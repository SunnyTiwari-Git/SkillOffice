import { cpSync, existsSync, readFileSync, rmSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { UserFacingError } from './errors.ts';
import { readJson, writeJsonAtomic } from './files.ts';
import { initWorkspace, REPO_ROOT } from './init.ts';
import { workspacePaths } from './workspace.ts';

export const PLATFORMS = ['claude-code', 'agents'] as const;
export type Platform = (typeof PLATFORMS)[number];

/** Where each platform looks for skills inside a project. `agents` covers Antigravity, Gemini CLI, Codex, Cursor, Copilot and Windsurf. */
export const SKILL_DIRS: Record<Platform, string> = { 'claude-code': '.claude/skills', agents: '.agents/skills' };

/** Installed with every department: the shared rules and the router. */
const SHARED_PACKAGES = ['skilloffice-core', 'front-desk'];
const INSTALLABLE_STATUSES = new Set(['pilot', 'active']);

export interface AvailableDepartment {
  slug: string;
  name: string;
  manager: string;
}

interface InstalledEntry {
  version: string;
  department: string;
  installedAt: string;
}

interface LockFile {
  schemaVersion: 1;
  installed: Partial<Record<Platform, Record<string, InstalledEntry>>>;
}

export interface InstallResult {
  platform: Platform;
  directory: string;
  installed: string[];
  updated: string[];
}

function assertPlatform(platform: string): asserts platform is Platform {
  if (!PLATFORMS.includes(platform as Platform)) {
    throw new UserFacingError(`--platform must be one of: ${PLATFORMS.join(', ')} (agents = Antigravity, Gemini CLI, Codex, Cursor, Copilot, Windsurf).`);
  }
}

function packagesDir(repoRoot: string): string {
  const dir = path.join(repoRoot, 'dist', 'agents', 'skills');
  if (!existsSync(dir)) throw new UserFacingError(`Packages not built: ${dir}. Run "npm run build" in the SkillOffice folder first.`);
  return dir;
}

/** Departments that are built and ready to install. */
export function listAvailable(repoRoot = REPO_ROOT): AvailableDepartment[] {
  const packages = packagesDir(repoRoot);
  const data = parse(readFileSync(path.join(repoRoot, 'registry', 'departments.yaml'), 'utf8')) as {
    departments?: { slug: string; name: string; status: string; manager?: string }[];
  };
  return (data.departments ?? [])
    .filter((item) => INSTALLABLE_STATUSES.has(item.status) && item.manager && existsSync(path.join(packages, item.manager)))
    .map((item) => ({ slug: item.slug, name: item.name, manager: item.manager as string }));
}

function words(text: string): string[] {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

/**
 * Accepts an exact code (03-finance-accounting, finance-accounting, fin-manager, fin) or a plain word
 * from the department's name (finance, design, support). A word that fits several departments is
 * refused with the options listed, never guessed.
 */
export function resolveDepartments(tokens: readonly string[], available: readonly AvailableDepartment[]): AvailableDepartment[] {
  if (tokens.length === 0) throw new UserFacingError('Name at least one department with --departments, or use --departments all. See "skilloffice install --list".');
  if (tokens.includes('all')) return [...available];
  return tokens.map((token) => {
    const wanted = token.trim().toLowerCase();
    const exact = available.find((item) =>
      [item.slug, item.slug.replace(/^\d+-/, ''), item.manager, item.manager.replace(/-manager$/, '')].includes(wanted));
    if (exact) return exact;
    const byWord = available.filter((item) => [...words(item.name), ...words(item.slug)].includes(wanted));
    if (byWord.length === 1) return byWord[0] as AvailableDepartment;
    if (byWord.length > 1) {
      throw new UserFacingError(`"${token}" fits more than one department: ${byWord.map((item) => `${item.manager.replace(/-manager$/, '')} (${item.name})`).join(', ')}. Use one of those codes.`);
    }
    throw new UserFacingError(`Unknown department "${token}". See "skilloffice install --list".`);
  });
}

function readVersion(packageDir: string): string {
  const file = path.join(packageDir, 'skill.yaml');
  return existsSync(file) ? String((parse(readFileSync(file, 'utf8')) as { version?: string }).version ?? 'unknown') : 'unknown';
}

function readLock(target: string): LockFile {
  const lock = readJson<LockFile>(workspacePaths(target).lockFile, { schemaVersion: 1, installed: {} });
  return { schemaVersion: 1, installed: lock.installed ?? {} };
}

/**
 * Copies the shared skills and the chosen department managers into a project, and sets up its
 * private .skilloffice/ workspace. Never overwrites a skill folder that SkillOffice did not install.
 */
export function installDepartments(
  target: string,
  platform: string,
  departmentTokens: readonly string[],
  repoRoot = REPO_ROOT,
): InstallResult {
  assertPlatform(platform);
  if (!existsSync(target)) throw new UserFacingError(`Folder not found: ${target}`);
  const packages = packagesDir(repoRoot);
  const chosen = resolveDepartments(departmentTokens, listAvailable(repoRoot));
  initWorkspace(target, 'default', repoRoot);

  const lock = readLock(target);
  const owned = lock.installed[platform] ?? {};
  const directory = path.join(target, SKILL_DIRS[platform]);
  const plan = [
    ...SHARED_PACKAGES.map((name) => ({ name, department: 'core' })),
    ...chosen.map((item) => ({ name: item.manager, department: item.slug })),
  ];

  for (const item of plan) {
    if (existsSync(path.join(directory, item.name)) && !owned[item.name]) {
      throw new UserFacingError(`${path.join(SKILL_DIRS[platform], item.name)} already exists and was not installed by SkillOffice. Rename or remove it first. Nothing was installed.`);
    }
  }

  const result: InstallResult = { platform, directory, installed: [], updated: [] };
  for (const item of plan) {
    const destination = path.join(directory, item.name);
    const isUpdate = existsSync(destination);
    rmSync(destination, { recursive: true, force: true });
    cpSync(path.join(packages, item.name), destination, { recursive: true });
    owned[item.name] = { version: readVersion(destination), department: item.department, installedAt: new Date().toISOString() };
    (isUpdate ? result.updated : result.installed).push(item.name);
  }
  writeJsonAtomic(workspacePaths(target).lockFile, { ...lock, installed: { ...lock.installed, [platform]: owned } });
  return result;
}

/** Removes department managers installed by SkillOffice. Shared skills go when no department is left. Context and memory are kept. */
export function uninstallDepartments(target: string, platform: string, departmentTokens: readonly string[], repoRoot = REPO_ROOT): string[] {
  assertPlatform(platform);
  const lock = readLock(target);
  const owned = { ...(lock.installed[platform] ?? {}) };
  const installedManagers = Object.entries(owned).filter(([, entry]) => entry.department !== 'core').map(([name]) => name);
  if (installedManagers.length === 0) throw new UserFacingError(`No SkillOffice departments are installed for ${platform} in ${target}.`);

  const toRemove = departmentTokens.includes('all')
    ? installedManagers
    : resolveDepartments(departmentTokens, listAvailable(repoRoot)).map((item) => item.manager).filter((name) => owned[name]);
  if (toRemove.length === 0) throw new UserFacingError('None of those departments are installed here.');

  for (const name of toRemove) delete owned[name];
  if (!Object.values(owned).some((entry) => entry.department !== 'core')) {
    for (const name of SHARED_PACKAGES) {
      if (owned[name]) {
        delete owned[name];
        toRemove.push(name);
      }
    }
  }
  const directory = path.join(target, SKILL_DIRS[platform]);
  for (const name of toRemove) rmSync(path.join(directory, name), { recursive: true, force: true });
  writeJsonAtomic(workspacePaths(target).lockFile, { ...lock, installed: { ...lock.installed, [platform]: owned } });
  return toRemove;
}
