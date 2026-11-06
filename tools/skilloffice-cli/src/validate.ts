import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { UserFacingError } from './errors.ts';
import { createFinding, type Finding, type Severity } from './findings.ts';
import { parseSkillDocument } from './frontmatter.ts';
import {
  HIGH_RISK_EFFECTS,
  PROVENANCE_TYPES,
  readSkillYaml,
  RISK_LEVELS,
  SIDE_EFFECTS,
  SKILL_KINDS,
  SKILL_YAML_FILE,
} from './skill-yaml.ts';

/** The only frontmatter fields allowed by the Agent Skills specification. */
export const ALLOWED_FRONTMATTER = ['name', 'description', 'license', 'compatibility', 'metadata', 'allowed-tools'];
export const MAX_BODY_LINES = 500;
const NAME_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SEMVER_PATTERN = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;
const ID_PATTERN = /^[a-z0-9][a-z0-9-]*\/[a-z0-9]+(?:-[a-z0-9]+)*$/;
const RISKY_TOOL_PATTERN = /\b(?:Bash|Shell|Terminal|WebFetch|WebSearch|Fetch|Delete|Write)\b|\brm\b|\bcurl\b/i;
// Directories never treated as skill folders during discovery (templates hold placeholder names).
const DISCOVERY_SKIP = new Set(['.git', 'node_modules', 'dist', '.skilloffice', 'templates']);

export const SKILL_FILE = 'SKILL.md';

/** Finds every folder that contains a SKILL.md, without descending into a skill folder. */
export function findSkillFolders(root: string, targets: readonly string[]): string[] {
  const found: string[] = [];
  const visit = (dir: string): void => {
    if (existsSync(path.join(dir, SKILL_FILE))) {
      found.push(dir);
      return;
    }
    for (const entry of readdirSync(dir).sort()) {
      const child = path.join(dir, entry);
      if (!DISCOVERY_SKIP.has(entry) && statSync(child).isDirectory()) visit(child);
    }
  };
  for (const target of targets) {
    const absolute = path.resolve(root, target);
    if (!existsSync(absolute)) throw new UserFacingError(`Path not found: ${target}`);
    visit(absolute);
  }
  return found;
}

function makeReporter(findings: Finding[], location: string) {
  return (severity: Severity, id: string, title: string, evidence: string, recommendation: string): void => {
    findings.push(
      createFinding({ id, severity, title, location, evidence, recommendation, source_skill: 'skilloffice/validate' }),
    );
  };
}

function validateFrontmatter(skillDir: string, label: string, findings: Finding[]): void {
  const report = makeReporter(findings, `${label}/${SKILL_FILE}`);
  const text = readFileSync(path.join(skillDir, SKILL_FILE), 'utf8');
  let document;
  try {
    document = parseSkillDocument(text, `${label}/${SKILL_FILE}`);
  } catch (error) {
    report('high', 'frontmatter-invalid', 'SKILL.md frontmatter cannot be read', (error as Error).message, 'Add a valid --- frontmatter block.');
    return;
  }
  const { frontmatter, body } = document;
  const folderName = path.basename(skillDir);

  for (const key of Object.keys(frontmatter)) {
    if (!ALLOWED_FRONTMATTER.includes(key)) {
      report('high', 'frontmatter-extra-field', `Field "${key}" is not part of the Agent Skills standard`, key,
        'Move it to skill.yaml. claude.ai and the Skills API reject unknown fields.');
    }
  }

  const name = frontmatter['name'];
  if (typeof name !== 'string' || !NAME_PATTERN.test(name) || name.length > 64) {
    report('high', 'name-invalid', 'name must be 1-64 lowercase letters, digits and single hyphens', String(name),
      'Use a name like seo-audit.');
  } else if (name !== folderName) {
    report('high', 'name-folder-mismatch', 'name must match the folder name', `name "${name}", folder "${folderName}"`,
      'Rename the folder or the name so they match.');
  }

  const description = frontmatter['description'];
  if (typeof description !== 'string' || description.trim().length === 0 || description.length > 1024) {
    report('high', 'description-invalid', 'description must be 1-1024 characters', String(description).slice(0, 80),
      'Say what the skill does and when to use it.');
  }

  const compatibility = frontmatter['compatibility'];
  if (compatibility !== undefined && (typeof compatibility !== 'string' || compatibility.length > 500)) {
    report('medium', 'compatibility-invalid', 'compatibility must be text of at most 500 characters', String(compatibility).slice(0, 80),
      'Shorten it.');
  }

  const metadata = frontmatter['metadata'];
  if (metadata !== undefined) {
    const isStringMap =
      metadata !== null && typeof metadata === 'object' && !Array.isArray(metadata) &&
      Object.values(metadata).every((value) => typeof value === 'string');
    if (!isStringMap) {
      report('medium', 'metadata-invalid', 'metadata must map text keys to text values', JSON.stringify(metadata).slice(0, 80),
        'Quote every value, for example version: "1.0.0".');
    }
  }

  const allowedTools = frontmatter['allowed-tools'];
  if (typeof allowedTools === 'string' && RISKY_TOOL_PATTERN.test(allowedTools)) {
    report('high', 'allowed-tools-risky', 'allowed-tools pre-approves a risky tool', allowedTools,
      'Remove shell, network, write and delete tools so the user is always asked first.');
  }

  const bodyLines = body.split('\n').length;
  if (bodyLines > MAX_BODY_LINES) {
    report('medium', 'body-too-long', `SKILL.md body is over ${MAX_BODY_LINES} lines`, `${bodyLines} lines`,
      'Move detail into references/ files that load only when needed.');
  }

  for (const match of body.matchAll(/\]\(([^)\s]+)\)/g)) {
    const target = (match[1] ?? '').split('#')[0] ?? '';
    if (target === '' || /^[a-z]+:/i.test(target)) continue;
    if (!existsSync(path.join(skillDir, target))) {
      report('medium', 'broken-reference', 'Link points to a file that does not exist', target, 'Fix the path or add the file.');
    }
  }
}

function isStringList(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function validateSkillYaml(skillDir: string, label: string, findings: Finding[]): void {
  const report = makeReporter(findings, `${label}/${SKILL_YAML_FILE}`);
  if (!existsSync(path.join(skillDir, SKILL_YAML_FILE))) {
    report('high', 'skill-yaml-missing', 'skill.yaml is missing', label, 'Add skill.yaml from core/templates/skill/.');
    return;
  }
  let data: Record<string, unknown>;
  try {
    data = readSkillYaml(skillDir);
  } catch (error) {
    report('high', 'skill-yaml-invalid', 'skill.yaml cannot be read', (error as Error).message, 'Fix the YAML.');
    return;
  }

  const id = data['id'];
  if (typeof id !== 'string' || !ID_PATTERN.test(id)) {
    report('high', 'id-invalid', 'id must look like department-slug/skill-name', String(id), 'For example 06-marketing-content-pr/seo-audit.');
  } else if (id.split('/')[1] !== path.basename(skillDir)) {
    report('high', 'id-folder-mismatch', 'The skill part of id must match the folder name', id, 'Make them match.');
  }
  if (typeof data['version'] !== 'string' || !SEMVER_PATTERN.test(data['version'])) {
    report('high', 'version-invalid', 'version must be semantic, like 1.0.0', String(data['version']), 'Use MAJOR.MINOR.PATCH.');
  }
  const checkEnum = (field: string, allowed: readonly string[]): void => {
    if (!allowed.includes(String(data[field]))) {
      report('high', `${field}-invalid`, `${field} must be one of: ${allowed.join(', ')}`, String(data[field]), 'Pick an allowed value.');
    }
  };
  checkEnum('kind', SKILL_KINDS);
  checkEnum('risk', RISK_LEVELS);
  if (typeof data['department'] !== 'string' || data['department'].length === 0) {
    report('high', 'department-missing', 'department is required', String(data['department']), 'Use the department folder name, or core.');
  }
  const summary = data['summary'];
  if (typeof summary !== 'string' || summary.length === 0 || summary.length > 160) {
    report('medium', 'summary-invalid', 'summary must be one line of at most 160 characters', String(summary).slice(0, 80),
      'Managers read this line in the catalog, so keep it short.');
  }
  for (const field of ['depends_on', 'context_needs']) {
    if (!isStringList(data[field])) report('high', `${field}-invalid`, `${field} must be a list of text values`, String(data[field]), 'Use [] when empty.');
  }
  for (const field of ['inputs', 'outputs', 'platforms_tested']) {
    if (!Array.isArray(data[field])) report('high', `${field}-invalid`, `${field} must be a list`, String(data[field]), 'Use [] when empty.');
  }
  if (typeof data['cacheable'] !== 'boolean') {
    report('high', 'cacheable-invalid', 'cacheable must be true or false', String(data['cacheable']), 'Set cacheable.');
  }

  const effects = data['side_effects'];
  if (!isStringList(effects) || effects.length === 0 || !effects.every((effect) => SIDE_EFFECTS.includes(effect as never))) {
    report('high', 'side-effects-invalid', `side_effects must list values from: ${SIDE_EFFECTS.join(', ')}`, String(effects), 'Use [none] for instruction-only skills.');
  } else {
    if (effects.some((effect) => HIGH_RISK_EFFECTS.includes(effect)) && data['risk'] !== 'high') {
      report('high', 'risk-understated', 'Skills that run scripts, use the network or act externally must be high risk', effects.join(', '),
        'Set risk: high. High-risk skills need owner approval.');
    }
    if (existsSync(path.join(skillDir, 'scripts')) && !effects.includes('runs_scripts')) {
      report('medium', 'scripts-undeclared', 'scripts/ folder exists but runs_scripts is not declared', label, 'Declare runs_scripts or remove the folder.');
    }
  }

  const provenance = data['provenance'] as Record<string, unknown> | undefined;
  if (!provenance || !PROVENANCE_TYPES.includes(String(provenance['type']) as never)) {
    report('high', 'provenance-invalid', 'provenance.type must be original or adapted', JSON.stringify(provenance), 'Record where the skill came from.');
  } else if (provenance['type'] === 'adapted') {
    const commit = provenance['upstream_commit'];
    if (typeof provenance['source_id'] !== 'string' || typeof commit !== 'string' || !/^[0-9a-f]{40}$/.test(commit)) {
      report('high', 'provenance-incomplete', 'Adapted skills need source_id and upstream_commit', JSON.stringify(provenance),
        'Add the registry source id and the exact upstream commit.');
    }
    if (!existsSync(path.join(skillDir, 'PROVENANCE.md'))) {
      report('high', 'provenance-file-missing', 'Adapted skills need a PROVENANCE.md', label, 'Copy core/templates/skill/PROVENANCE.md.');
    }
  }
}

export function validateSkillFolder(root: string, skillDir: string): Finding[] {
  const findings: Finding[] = [];
  const label = path.relative(root, skillDir).split(path.sep).join('/') || '.';
  validateFrontmatter(skillDir, label, findings);
  validateSkillYaml(skillDir, label, findings);
  return findings;
}

export function validatePaths(root: string, targets: readonly string[]): { skills: string[]; findings: Finding[] } {
  const skills = findSkillFolders(root, targets);
  return { skills, findings: skills.flatMap((dir) => validateSkillFolder(root, dir)) };
}
