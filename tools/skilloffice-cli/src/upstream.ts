import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { UserFacingError } from './errors.ts';

interface Source {
  id: string;
  url: string;
  pinned_commit: string;
}

export type UpstreamStatus = 'up to date' | 'changed' | 'unreachable';

export interface UpstreamResult {
  id: string;
  url: string;
  pinned: string;
  latest: string | null;
  status: UpstreamStatus;
}

/** Returns the latest commit on the default branch, or null if it cannot be read. */
export type LatestCommitReader = (url: string) => string | null;

const ALLOWED_URL = /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/;

/** Reads the remote's HEAD with `git ls-remote`. Nothing is downloaded or executed from the source. */
export const gitLatestCommit: LatestCommitReader = (url) => {
  const result = spawnSync('git', ['ls-remote', url, 'HEAD'], {
    encoding: 'utf8',
    timeout: 30_000,
    env: { ...process.env, GIT_TERMINAL_PROMPT: '0' },
  });
  if (result.status !== 0) return null;
  const sha = result.stdout.split(/\s+/)[0] ?? '';
  return /^[0-9a-f]{40}$/.test(sha) ? sha : null;
};

/**
 * Compares every pinned source in registry/sources.yaml with its current upstream commit.
 * A changed source is not updated automatically: it needs a new intake review first.
 */
export function checkUpstream(repoRoot: string, latestCommit: LatestCommitReader = gitLatestCommit): UpstreamResult[] {
  const file = path.join(repoRoot, 'registry', 'sources.yaml');
  const data = parse(readFileSync(file, 'utf8')) as { sources?: Source[] };
  if (!Array.isArray(data.sources)) throw new UserFacingError(`${file}: missing sources list`);
  return data.sources.map((source) => {
    if (!ALLOWED_URL.test(source.url)) throw new UserFacingError(`${source.id}: url must be an https://github.com/<owner>/<repo> address`);
    const latest = latestCommit(source.url);
    const status: UpstreamStatus = latest === null ? 'unreachable' : latest === source.pinned_commit ? 'up to date' : 'changed';
    return { id: source.id, url: source.url, pinned: source.pinned_commit, latest, status };
  });
}

export function formatUpstream(results: readonly UpstreamResult[]): string {
  const rows = results.map((item) =>
    `| ${item.id} | ${item.pinned.slice(0, 12)} | ${item.latest ? item.latest.slice(0, 12) : 'n/a'} | ${item.status} |`);
  const changed = results.filter((item) => item.status === 'changed').length;
  return [
    '| Source | Pinned | Latest | Status |',
    '| --- | --- | --- | --- |',
    ...rows,
    '',
    changed === 0
      ? 'All sources match their pinned commits.'
      : `${changed} source(s) changed upstream. Review each change with registry/security-reviews/TEMPLATE.md before updating anything. See docs/maintenance.md.`,
  ].join('\n');
}
