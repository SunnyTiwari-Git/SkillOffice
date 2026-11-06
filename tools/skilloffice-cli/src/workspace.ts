import { existsSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';
import { UserFacingError } from './errors.ts';

export const WORKSPACE_DIR = '.skilloffice';
const LOCK_STALE_MS = 60_000;
const LOCK_RETRY_MS = 100;
const LOCK_MAX_ATTEMPTS = 50;

export interface WorkspacePaths {
  root: string;
  workspace: string;
  config: string;
  lockFile: string;
  context: string;
  reports: string;
  memory: string;
  state: string;
  ledger: string;
  files: string;
  cache: string;
  handoffs: string;
  memoryLock: string;
}

export function workspacePaths(root: string): WorkspacePaths {
  const workspace = path.join(root, WORKSPACE_DIR);
  const memory = path.join(workspace, 'memory');
  return {
    root,
    workspace,
    config: path.join(workspace, 'config.yaml'),
    lockFile: path.join(workspace, 'lock.json'),
    context: path.join(workspace, 'context'),
    reports: path.join(workspace, 'reports'),
    memory,
    state: path.join(memory, 'state.json'),
    ledger: path.join(memory, 'ledger.jsonl'),
    files: path.join(memory, 'files.json'),
    cache: path.join(memory, 'cache'),
    handoffs: path.join(memory, 'handoffs'),
    memoryLock: path.join(memory, '.lock'),
  };
}

export function requireWorkspace(root: string): WorkspacePaths {
  const paths = workspacePaths(root);
  if (!existsSync(paths.memory)) {
    throw new UserFacingError(`No SkillOffice workspace in ${root}. Run "skilloffice init" first.`);
  }
  return paths;
}

function tryAcquire(lockPath: string): boolean {
  try {
    writeFileSync(lockPath, JSON.stringify({ pid: process.pid, at: new Date().toISOString() }), { flag: 'wx' });
    return true;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'EEXIST') throw error;
    if (Date.now() - statSync(lockPath).mtimeMs > LOCK_STALE_MS) rmSync(lockPath, { force: true });
    return false;
  }
}

/** Runs fn while holding the memory lock, so two agents never write memory at the same time. */
export async function withMemoryLock<T>(paths: WorkspacePaths, fn: () => T): Promise<T> {
  for (let attempt = 0; attempt < LOCK_MAX_ATTEMPTS; attempt += 1) {
    if (tryAcquire(paths.memoryLock)) {
      try {
        return fn();
      } finally {
        rmSync(paths.memoryLock, { force: true });
      }
    }
    await sleep(LOCK_RETRY_MS);
  }
  const holder = existsSync(paths.memoryLock) ? readFileSync(paths.memoryLock, 'utf8') : 'unknown';
  throw new UserFacingError(`Memory is locked by another process (${holder}). Try again shortly.`);
}
