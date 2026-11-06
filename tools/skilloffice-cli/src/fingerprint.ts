import path from 'node:path';
import { UserFacingError } from './errors.ts';
import { listFiles, readJson, sha256File, toRelative, writeJsonAtomic } from './files.ts';
import { redact } from './redact.ts';
import { requireWorkspace, withMemoryLock } from './workspace.ts';

export interface FileRecord {
  sha256: string;
  summary: string;
  verifiedAt: string;
  verifiedBy: string;
}

export type FileIndex = Record<string, FileRecord>;

export interface StatusReport {
  changed: string[];
  unchanged: string[];
  added: string[];
  deleted: string[];
}

function isUnder(file: string, prefixes: readonly string[]): boolean {
  return prefixes.some((prefix) => prefix === '.' || file === prefix || file.startsWith(`${prefix}/`));
}

/** Compares files on disk with the fingerprints recorded at their last review. */
export function fileStatus(root: string, targets: readonly string[]): StatusReport {
  const paths = requireWorkspace(root);
  const index = readJson<FileIndex>(paths.files, {});
  const scopes = targets.map((target) => (path.resolve(root, target) === path.resolve(root) ? '.' : toRelative(root, target)));
  const report: StatusReport = { changed: [], unchanged: [], added: [], deleted: [] };
  const seen = new Set<string>();

  for (const absolute of listFiles(root, targets)) {
    const relative = toRelative(root, absolute);
    seen.add(relative);
    const record = index[relative];
    if (!record) report.added.push(relative);
    else if (record.sha256 === sha256File(absolute)) report.unchanged.push(relative);
    else report.changed.push(relative);
  }
  report.deleted = Object.keys(index).filter((file) => isUnder(file, scopes) && !seen.has(file));
  return report;
}

/** Records a file's current fingerprint after a skill has reviewed it. */
export async function verifyFile(root: string, target: string, summary: string, verifiedBy: string): Promise<FileRecord> {
  if (summary.trim() === '' || verifiedBy.trim() === '') {
    throw new UserFacingError('--summary and --by are required.');
  }
  const paths = requireWorkspace(root);
  const relative = toRelative(root, target);
  const record: FileRecord = {
    sha256: sha256File(path.resolve(root, relative)),
    summary: redact(summary),
    verifiedAt: new Date().toISOString(),
    verifiedBy,
  };
  return withMemoryLock(paths, () => {
    const index = readJson<FileIndex>(paths.files, {});
    index[relative] = record;
    writeJsonAtomic(paths.files, index);
    return record;
  });
}
