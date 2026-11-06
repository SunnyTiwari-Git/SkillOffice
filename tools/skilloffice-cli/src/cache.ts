import { existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { UserFacingError } from './errors.ts';
import { readJson, sha256, sha256File, toRelative, writeJsonAtomic } from './files.ts';
import { redact } from './redact.ts';
import { requireWorkspace, withMemoryLock } from './workspace.ts';

/**
 * Security checks and final verification must always run fresh (core/protocols/token-budget.md).
 * Skills whose id matches this pattern are refused by the cache.
 */
export const NEVER_CACHE_PATTERN = /(?:^|[/-])(?:security|verification|verify)(?:$|[/-])|^14-cybersecurity\//;

export interface CacheRequest {
  /** Skill id with version, for example 06-marketing-content-pr/seo-audit@1.2.0. */
  skill: string;
  /** Files the skill read. */
  inputs: readonly string[];
  /** Requirement or rule files the result depends on. A change to any of them invalidates the result. */
  requirements: readonly string[];
}

export interface CacheEntry {
  key: string;
  skill: string;
  inputs: Record<string, string>;
  requirements: Record<string, string>;
  result: string;
  createdAt: string;
}

function fingerprints(root: string, files: readonly string[]): Record<string, string> {
  const result: Record<string, string> = {};
  for (const file of [...files].sort()) {
    const relative = toRelative(root, file);
    result[relative] = sha256File(path.resolve(root, relative));
  }
  return result;
}

function assertCacheable(skill: string): void {
  if (!/^[^@\s]+@\d+\.\d+\.\d+/.test(skill)) {
    throw new UserFacingError('--skill must include a version, for example 06-marketing-content-pr/seo-audit@1.0.0');
  }
  if (NEVER_CACHE_PATTERN.test(skill.split('@')[0] ?? '')) {
    throw new UserFacingError(`${skill} is a security or verification skill. Its results are never cached.`);
  }
}

function describe(root: string, request: CacheRequest) {
  assertCacheable(request.skill);
  if (request.inputs.length === 0) throw new UserFacingError('--inputs needs at least one file.');
  const inputs = fingerprints(root, request.inputs);
  const requirements = fingerprints(root, request.requirements);
  const key = sha256(JSON.stringify({ skill: request.skill, inputs, requirements }));
  return { key, inputs, requirements };
}

/** Returns the stored result when the skill, its inputs and its requirements are all unchanged. */
export function cacheGet(root: string, request: CacheRequest): CacheEntry | null {
  const paths = requireWorkspace(root);
  const { key } = describe(root, request);
  const file = path.join(paths.cache, `${key}.json`);
  return existsSync(file) ? readJson<CacheEntry>(file, null as never) : null;
}

export async function cachePut(root: string, request: CacheRequest, result: string): Promise<CacheEntry> {
  if (result.trim() === '') throw new UserFacingError('--result is required.');
  const paths = requireWorkspace(root);
  const { key, inputs, requirements } = describe(root, request);
  const entry: CacheEntry = {
    key,
    skill: request.skill,
    inputs,
    requirements,
    result: redact(result),
    createdAt: new Date().toISOString(),
  };
  return withMemoryLock(paths, () => {
    mkdirSync(paths.cache, { recursive: true });
    writeJsonAtomic(path.join(paths.cache, `${key}.json`), entry);
    return entry;
  });
}
