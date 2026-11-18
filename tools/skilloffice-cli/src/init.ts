import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { stringify } from 'yaml';
import { UserFacingError } from './errors.ts';
import { assertProfileName, type WorkspaceConfig } from './context.ts';
import { writeJsonAtomic } from './files.ts';
import { emptyState } from './memory.ts';
import { workspacePaths } from './workspace.ts';

export const AGENTS_START = '<!-- skilloffice:start -->';
export const AGENTS_END = '<!-- skilloffice:end -->';
export const GITIGNORE_ENTRIES = ['.skilloffice/context/', '.skilloffice/memory/', '.skilloffice/reports/'];

/** The helper's own folder: tools/skilloffice-cli in the repository, or the installed npm package. */
export const PACKAGE_DIR = path.resolve(import.meta.dirname, '..');

/**
 * Where templates and built skills live. An npm package carries them in assets/ (added at pack time);
 * inside the SkillOffice repository they are read from the repository root.
 */
export const REPO_ROOT = existsSync(path.join(PACKAGE_DIR, 'assets', 'registry', 'departments.yaml'))
  ? path.join(PACKAGE_DIR, 'assets')
  : path.resolve(PACKAGE_DIR, '..', '..');

export interface InitResult {
  created: string[];
  skipped: string[];
}

function writeIfMissing(file: string, content: string, result: InitResult): void {
  if (existsSync(file)) {
    result.skipped.push(file);
    return;
  }
  writeFileSync(file, content);
  result.created.push(file);
}

function ensureGitignore(target: string, result: InitResult): void {
  const file = path.join(target, '.gitignore');
  const current = existsSync(file) ? readFileSync(file, 'utf8') : '';
  const lines = new Set(current.split('\n').map((line) => line.trim()));
  const missing = GITIGNORE_ENTRIES.filter((entry) => !lines.has(entry));
  if (missing.length === 0) return;
  const prefix = current === '' ? '' : `${current}${current.endsWith('\n') ? '' : '\n'}\n`;
  writeFileSync(file, `${prefix}# SkillOffice: private company context and memory\n${missing.join('\n')}\n`);
  result.created.push(`${file} (added ${missing.length} entries)`);
}

function ensureAgentsSection(target: string, repoRoot: string, result: InitResult): void {
  const sectionFile = path.join(repoRoot, 'core', 'templates', 'agents-md-section.md');
  if (!existsSync(sectionFile)) throw new UserFacingError(`Template missing: ${sectionFile}`);
  const section = readFileSync(sectionFile, 'utf8').trim();
  const block = section.includes(AGENTS_START) ? section : `${AGENTS_START}\n${section}\n${AGENTS_END}`;
  const file = path.join(target, 'AGENTS.md');
  const current = existsSync(file) ? readFileSync(file, 'utf8') : '';
  const start = current.indexOf(AGENTS_START);
  const end = current.indexOf(AGENTS_END);
  const next =
    start !== -1 && end > start
      ? current.slice(0, start) + block + current.slice(end + AGENTS_END.length)
      : `${current}${current === '' || current.endsWith('\n') ? '' : '\n'}${current === '' ? '' : '\n'}${block}\n`;
  if (next !== current) {
    writeFileSync(file, next);
    result.created.push(`${file} (SkillOffice section)`);
  }
}

/** Sets up .skilloffice/ in a project. Safe to run again: existing files are never overwritten. */
export function initWorkspace(target: string, profile = 'default', repoRoot = REPO_ROOT): InitResult {
  assertProfileName(profile);
  if (!existsSync(target)) throw new UserFacingError(`Folder not found: ${target}`);
  const paths = workspacePaths(target);
  const profileDir = path.join(paths.context, profile);
  const result: InitResult = { created: [], skipped: [] };

  for (const dir of [path.join(profileDir, 'brand-assets'), paths.cache, paths.handoffs, paths.reports]) {
    mkdirSync(dir, { recursive: true });
  }

  const templates = path.join(repoRoot, 'context-templates');
  if (!existsSync(templates)) throw new UserFacingError(`Context templates missing: ${templates}`);
  for (const file of readdirSync(templates).filter((name) => name.endsWith('.yaml'))) {
    const destination = path.join(profileDir, file);
    if (existsSync(destination)) result.skipped.push(destination);
    else {
      copyFileSync(path.join(templates, file), destination);
      result.created.push(destination);
    }
  }
  const assetsReadme = path.join(templates, 'brand-assets', 'README.md');
  if (existsSync(assetsReadme)) {
    writeIfMissing(path.join(profileDir, 'brand-assets', 'README.md'), readFileSync(assetsReadme, 'utf8'), result);
  }

  const config: WorkspaceConfig = {
    schemaVersion: 1,
    activeProfile: profile,
    platforms: [],
    departments: [],
    memory: { retentionDays: 90 },
    privacy: { commitContext: false },
  };
  writeIfMissing(paths.config, stringify(config), result);
  writeIfMissing(paths.ledger, '', result);
  if (!existsSync(paths.state)) {
    writeJsonAtomic(paths.state, emptyState(profile));
    result.created.push(paths.state);
  }
  if (!existsSync(paths.files)) {
    writeJsonAtomic(paths.files, {});
    result.created.push(paths.files);
  }
  if (!existsSync(paths.lockFile)) {
    writeJsonAtomic(paths.lockFile, { schemaVersion: 1, installed: {} });
    result.created.push(paths.lockFile);
  }

  ensureGitignore(target, result);
  ensureAgentsSection(target, repoRoot, result);
  return result;
}
