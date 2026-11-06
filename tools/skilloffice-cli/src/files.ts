import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, renameSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { UserFacingError } from './errors.ts';

const SKIPPED_DIRS = new Set(['.git', 'node_modules', 'dist', '.skilloffice']);

export function sha256(content: string | Buffer): string {
  return createHash('sha256').update(content).digest('hex');
}

export function sha256File(filePath: string): string {
  return sha256(readFileSync(filePath));
}

/** Converts a path to a POSIX path relative to root, rejecting anything outside root. */
export function toRelative(root: string, target: string): string {
  const absolute = path.resolve(root, target);
  const relative = path.relative(path.resolve(root), absolute);
  if (relative === '' || relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new UserFacingError(`Path is outside the project: ${target}`);
  }
  return relative.split(path.sep).join('/');
}

/** Lists files under the given paths, skipping version control, dependencies and the workspace folder. */
export function listFiles(root: string, targets: readonly string[]): string[] {
  const results: string[] = [];
  const visit = (absolute: string): void => {
    const stats = statSync(absolute);
    if (stats.isDirectory()) {
      if (SKIPPED_DIRS.has(path.basename(absolute))) return;
      for (const entry of readdirSync(absolute).sort()) visit(path.join(absolute, entry));
    } else if (stats.isFile()) {
      results.push(absolute);
    }
  };
  for (const target of targets) {
    const absolute = path.resolve(root, target);
    if (!existsSync(absolute)) throw new UserFacingError(`Path not found: ${target}`);
    visit(absolute);
  }
  return results;
}

export function readJson<T>(filePath: string, fallback: T): T {
  if (!existsSync(filePath)) return fallback;
  try {
    return JSON.parse(readFileSync(filePath, 'utf8')) as T;
  } catch (error) {
    throw new UserFacingError(`Could not read ${filePath}: ${(error as Error).message}`);
  }
}

/** Writes JSON through a temporary file so a crash never leaves a half-written file. */
export function writeJsonAtomic(filePath: string, value: unknown): void {
  const temporary = `${filePath}.${process.pid}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`);
  renameSync(temporary, filePath);
}

export function isProbablyBinary(content: Buffer): boolean {
  return content.subarray(0, 8000).includes(0);
}
