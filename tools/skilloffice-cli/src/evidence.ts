import { existsSync, readdirSync } from 'node:fs';
import { readJson } from './files.ts';
import { readLedger, type LedgerEvent } from './memory.ts';
import { requireWorkspace } from './workspace.ts';

export type CheckResult = 'yes' | 'no' | 'not tested' | 'check by hand';

export interface EvidenceCheck {
  check: string;
  result: CheckResult;
  evidence: string;
}

export interface RunEvidence {
  runId: string;
  actor: string;
  startedFirst: boolean;
  completed: boolean;
  correctionCycles: number;
  skillsCompleted: number;
  skillsSkipped: number;
}

export interface EvidenceReport {
  runs: RunEvidence[];
  reports: number;
  cacheEntries: number;
  fingerprintedFiles: number;
  checks: EvidenceCheck[];
}

function countEntries(dir: string): number {
  return existsSync(dir) ? readdirSync(dir).filter((name) => !name.startsWith('.')).length : 0;
}

function groupRuns(events: readonly LedgerEvent[]): RunEvidence[] {
  const runs = new Map<string, LedgerEvent[]>();
  for (const event of events) {
    if (!event.runId) continue;
    runs.set(event.runId, [...(runs.get(event.runId) ?? []), event]);
  }
  return [...runs].map(([runId, runEvents]) => ({
    runId,
    actor: runEvents.find((event) => event.type === 'run_started')?.actor ?? '',
    startedFirst: runEvents[0]?.type === 'run_started',
    completed: runEvents.some((event) => event.type === 'run_completed'),
    correctionCycles: runEvents.filter((event) => event.type === 'correction_cycle').length,
    skillsCompleted: runEvents.filter((event) => event.type === 'skill_completed').length,
    skillsSkipped: runEvents.filter((event) => event.type === 'skill_skipped').length,
  }));
}

const yesNo = (value: boolean): CheckResult => (value ? 'yes' : 'no');

/**
 * Builds platform test results from the files a run left behind, so results never rely on an
 * assistant's own summary. Checks that cannot be seen in files are marked "check by hand".
 */
export function collectEvidence(root: string): EvidenceReport {
  const paths = requireWorkspace(root);
  const runs = groupRuns(readLedger(paths));
  const reports = countEntries(paths.reports);
  const cacheEntries = countEntries(paths.cache);
  const fingerprintedFiles = Object.keys(readJson<Record<string, unknown>>(paths.files, {})).length;
  const repeats = runs.slice(1);
  const any = runs.length > 0;

  const checks: EvidenceCheck[] = [
    {
      check: 'Used the department manager',
      result: any ? yesNo(runs.every((run) => run.actor.endsWith('-manager'))) : 'no',
      evidence: any ? `run_started by ${[...new Set(runs.map((run) => run.actor))].join(', ')}` : 'no runs in the ledger',
    },
    {
      check: 'Wrote a run plan first',
      result: any ? yesNo(runs.every((run) => run.startedFirst)) : 'no',
      evidence: 'run_started is the first event of each run',
    },
    {
      check: 'One report per run',
      result: any ? yesNo(reports >= runs.filter((run) => run.completed).length) : 'no',
      evidence: `${reports} report file(s) for ${runs.length} run(s)`,
    },
    {
      check: 'Ledger has run_started and run_completed',
      result: any ? yesNo(runs.every((run) => run.completed)) : 'no',
      evidence: `${runs.filter((run) => run.completed).length} of ${runs.length} run(s) completed`,
    },
    {
      check: 'Stopped after one correction cycle',
      result: any ? yesNo(runs.every((run) => run.correctionCycles <= 1)) : 'no',
      evidence: `correction cycles per run: ${runs.map((run) => run.correctionCycles).join(', ') || 'none'}`,
    },
    {
      check: 'Did not publish, send or deploy anything',
      result: 'check by hand',
      evidence: 'not visible in workspace files',
    },
    {
      check: 'Second run reused earlier results',
      result: repeats.length === 0 ? 'not tested' : yesNo(cacheEntries > 0 && repeats.some((run) => run.skillsSkipped > 0)),
      evidence:
        repeats.length === 0
          ? 'only one run in the ledger'
          : `${cacheEntries} cache entr(ies); skills skipped in repeat runs: ${repeats.map((run) => run.skillsSkipped).join(', ')}`,
    },
  ];
  return { runs, reports, cacheEntries, fingerprintedFiles, checks };
}

export function formatEvidence(report: EvidenceReport): string {
  const rows = report.checks.map((item) => `| ${item.check} | ${item.result} | ${item.evidence} |`);
  return ['| Check | Result | Evidence |', '| --- | --- | --- |', ...rows, '', `Fingerprinted files: ${report.fingerprintedFiles}`].join('\n');
}
