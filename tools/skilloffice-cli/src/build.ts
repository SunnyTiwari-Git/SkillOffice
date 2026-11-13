import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { UserFacingError } from './errors.ts';
import { writeDepartmentGuide } from './guide.ts';
import { readSkillYaml } from './skill-yaml.ts';
import { findSkillFolders } from './validate.ts';

export type Layout = 'manager-only' | 'full';

/** Files that stay in the source repo: tests and evals are not shipped to users. */
const EXCLUDED_FROM_PACKAGES = new Set(['evals']);
const BUILDABLE_STATUSES = new Set(['pilot', 'active']);
const OWNER = 'SunnyTiwari-Git';
const REPOSITORY = 'https://github.com/SunnyTiwari-Git/SkillOffice';

interface Department {
  slug: string;
  name: string;
  status: string;
}

interface Package {
  /** Folder name of the installed skill, equal to its SKILL.md name. */
  name: string;
  build: (destination: string) => void;
}

export interface BuildResult {
  departments: string[];
  agentsSkills: string[];
  claudePlugins: string[];
}

function copySkill(source: string, destination: string): void {
  cpSync(source, destination, {
    recursive: true,
    filter: (file) => !EXCLUDED_FROM_PACKAGES.has(path.basename(file)) || path.dirname(file) !== source,
  });
}

function readDepartments(repoRoot: string): Department[] {
  const file = path.join(repoRoot, 'registry', 'departments.yaml');
  const data = parse(readFileSync(file, 'utf8')) as { departments?: Department[] };
  if (!Array.isArray(data.departments)) throw new UserFacingError(`${file}: missing departments list`);
  return data.departments;
}

function corePackage(repoRoot: string): Package {
  return {
    name: 'skilloffice-core',
    build: (destination) => {
      copySkill(path.join(repoRoot, 'core', 'skilloffice-core'), destination);
      cpSync(path.join(repoRoot, 'core', 'protocols'), path.join(destination, 'references', 'protocols'), { recursive: true });
      for (const template of ['report.md', 'handoff.md']) {
        cpSync(path.join(repoRoot, 'core', 'templates', template), path.join(destination, 'references', 'templates', template));
      }
    },
  };
}

function frontDeskPackage(repoRoot: string): Package {
  return {
    name: 'front-desk',
    build: (destination) => {
      copySkill(path.join(repoRoot, 'core', 'front-desk'), destination);
      mkdirSync(path.join(destination, 'references'), { recursive: true });
      cpSync(path.join(repoRoot, 'registry', 'departments.yaml'), path.join(destination, 'references', 'departments.yaml'));
    },
  };
}

/** A department manager with its specialists bundled inside, so only the manager loads at startup. */
function departmentPackages(repoRoot: string, department: Department, layout: Layout): Package[] {
  const departmentDir = path.join(repoRoot, 'departments', department.slug);
  const skillDirs = findSkillFolders(departmentDir, ['.']);
  const managers = skillDirs.filter((dir) => readSkillYaml(dir)['kind'] === 'manager');
  const specialists = skillDirs.filter((dir) => readSkillYaml(dir)['kind'] === 'skill');
  if (managers.length !== 1) {
    throw new UserFacingError(`${department.slug}: expected exactly one manager, found ${managers.length}`);
  }
  const managerDir = managers[0] as string;
  const catalog = path.join(departmentDir, 'catalog.yaml');
  if (!existsSync(catalog)) throw new UserFacingError(`${department.slug}: catalog.yaml missing. Run "skilloffice catalog".`);

  const manager: Package = {
    name: path.basename(managerDir),
    build: (destination) => {
      copySkill(managerDir, destination);
      cpSync(catalog, path.join(destination, 'catalog.yaml'));
      for (const dir of specialists) copySkill(dir, path.join(destination, 'skills', path.basename(dir)));
    },
  };
  if (layout === 'manager-only') return [manager];
  return [manager, ...specialists.map((dir) => ({ name: path.basename(dir), build: (destination: string) => copySkill(dir, destination) }))];
}

function writeLegalFiles(repoRoot: string, destination: string): void {
  cpSync(path.join(repoRoot, 'LICENSE'), path.join(destination, 'LICENSE'));
  cpSync(path.join(repoRoot, 'NOTICE'), path.join(destination, 'NOTICE'));
  cpSync(path.join(repoRoot, 'registry', 'licenses'), path.join(destination, 'third-party-licenses'), { recursive: true });
}

function writeJson(file: string, value: unknown): void {
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
}

function pluginName(department: Department | null): string {
  return department ? `skilloffice-${department.slug.replace(/^\d+-/, '')}` : 'skilloffice-front-desk';
}

/**
 * Builds install-ready packages from the canonical skills. Output is deterministic so CI can
 * check that the committed dist/ matches the source.
 */
export function buildPackages(repoRoot: string, layout: Layout = 'manager-only'): BuildResult {
  const dist = path.join(repoRoot, 'dist');
  rmSync(dist, { recursive: true, force: true });
  const version = (parse(readFileSync(path.join(repoRoot, 'core', 'skilloffice-core', 'skill.yaml'), 'utf8')) as { version: string }).version;

  const departments = readDepartments(repoRoot).filter(
    (department) => BUILDABLE_STATUSES.has(department.status) && existsSync(path.join(repoRoot, 'departments', department.slug)),
  );
  const groups: { department: Department | null; packages: Package[]; description: string }[] = [
    { department: null, packages: [corePackage(repoRoot), frontDeskPackage(repoRoot)], description: 'Routes a request to the right SkillOffice department.' },
    ...departments.map((department) => ({
      department,
      packages: [corePackage(repoRoot), ...departmentPackages(repoRoot, department, layout)],
      description: `SkillOffice ${department.name}: a department manager that plans, runs and reviews specialist skills.`,
    })),
  ];

  // .agents/skills layout, read by Antigravity, Gemini CLI, Codex, Cursor, Copilot and Windsurf.
  const agentsRoot = path.join(dist, 'agents');
  const agentsSkills = new Set<string>();
  for (const group of groups) {
    for (const pkg of group.packages) {
      if (agentsSkills.has(pkg.name)) continue;
      pkg.build(path.join(agentsRoot, 'skills', pkg.name));
      agentsSkills.add(pkg.name);
    }
  }
  writeLegalFiles(repoRoot, agentsRoot);

  // Claude Code plugins, one per department, listed in the repository's marketplace.
  const claudePlugins: string[] = [];
  for (const group of groups) {
    const name = pluginName(group.department);
    const pluginRoot = path.join(dist, 'claude-code', 'plugins', name);
    for (const pkg of group.packages) pkg.build(path.join(pluginRoot, 'skills', pkg.name));
    writeJson(path.join(pluginRoot, '.claude-plugin', 'plugin.json'), {
      name,
      version,
      description: group.description,
      author: { name: OWNER },
      homepage: REPOSITORY,
      repository: REPOSITORY,
      license: 'Apache-2.0',
      keywords: ['skilloffice', 'agent-skills', ...(group.department ? [group.department.slug] : ['router'])],
    });
    writeLegalFiles(repoRoot, pluginRoot);
    claudePlugins.push(name);
  }
  writeJson(path.join(repoRoot, '.claude-plugin', 'marketplace.json'), {
    name: 'skilloffice',
    owner: { name: OWNER },
    metadata: { description: 'Department-based AI skills for businesses.', version },
    plugins: groups.map((group) => ({
      name: pluginName(group.department),
      source: `./dist/claude-code/plugins/${pluginName(group.department)}`,
      description: group.description,
      version,
      license: 'Apache-2.0',
    })),
  });

  if (existsSync(path.join(repoRoot, 'docs'))) writeDepartmentGuide(repoRoot);
  return { departments: departments.map((department) => department.slug), agentsSkills: [...agentsSkills].sort(), claudePlugins };
}
