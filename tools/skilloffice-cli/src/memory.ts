import { appendFileSync, existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { CorrectionLimitError, UserFacingError } from './errors.ts';
import { readJson, writeJsonAtomic } from './files.ts';
import { redact, redactValue } from './redact.ts';
import { requireWorkspace, withMemoryLock, type WorkspacePaths } from './workspace.ts';

export const LEDGER_EVENT_TYPES = [
  'run_started',
  'skill_completed',
  'skill_skipped',
  'decision',
  'file_changed',
  'test_result',
  'issue_opened',
  'issue_resolved',
  'correction_cycle',
  'run_completed',
  'note',
] as const;

export type LedgerEventType = (typeof LEDGER_EVENT_TYPES)[number];

export interface LedgerEvent {
  ts: string;
  runId: string | null;
  actor: string;
  type: LedgerEventType;
  summary: string;
  data: Record<string, unknown>;
}

export interface CurrentRun {
  id: string;
  manager: string;
  request: string;
  startedAt: string;
  plan: { skill: string; status: string; reason?: string }[];
  correctionCyclesUsed: number;
  maxCorrectionCycles: number;
}

export interface MemoryState {
  schemaVersion: 1;
  activeProfile: string;
  currentRun: CurrentRun | null;
  openTasks: unknown[];
  decisions: unknown[];
  openIssues: unknown[];
}

export const MAX_CORRECTION_CYCLES = 1;

export function emptyState(activeProfile: string): MemoryState {
  return { schemaVersion: 1, activeProfile, currentRun: null, openTasks: [], decisions: [], openIssues: [] };
}

export function readState(paths: WorkspacePaths): MemoryState {
  return readJson<MemoryState>(paths.state, emptyState('default'));
}

export interface LogRequest {
  type: string;
  actor: string;
  summary: string;
  runId?: string;
  data?: Record<string, unknown>;
  /** Set only when the user has explicitly approved another correction cycle. */
  humanApprovedExtraCycle?: boolean;
}

function assertEventType(type: string): asserts type is LedgerEventType {
  if (!LEDGER_EVENT_TYPES.includes(type as LedgerEventType)) {
    throw new UserFacingError(`Unknown event type "${type}". Use one of: ${LEDGER_EVENT_TYPES.join(', ')}`);
  }
}

/** Applies the event to state. Enforces the single correction cycle rule. */
function applyToState(state: MemoryState, event: LedgerEvent, request: LogRequest): MemoryState {
  const run = state.currentRun;
  switch (event.type) {
    case 'run_started':
      if (run) throw new UserFacingError(`Run ${run.id} is still open. Log run_completed for it first.`);
      return {
        ...state,
        currentRun: {
          id: event.runId ?? randomUUID(),
          manager: event.actor,
          request: event.summary,
          startedAt: event.ts,
          plan: [],
          correctionCyclesUsed: 0,
          maxCorrectionCycles: MAX_CORRECTION_CYCLES,
        },
      };
    case 'correction_cycle': {
      if (!run) throw new UserFacingError('No open run. Log run_started first.');
      const max = request.humanApprovedExtraCycle ? run.correctionCyclesUsed + 1 : run.maxCorrectionCycles;
      if (run.correctionCyclesUsed >= max) {
        throw new CorrectionLimitError(
          `Run ${run.id} already used its ${run.maxCorrectionCycles} correction cycle. Report the remaining issues and ask the user before another cycle.`,
        );
      }
      return { ...state, currentRun: { ...run, correctionCyclesUsed: run.correctionCyclesUsed + 1, maxCorrectionCycles: max } };
    }
    case 'run_completed':
      return { ...state, currentRun: null };
    default:
      return state;
  }
}

function assertRequest(request: LogRequest, position: string): void {
  assertEventType(request.type);
  if (typeof request.actor !== 'string' || request.actor.trim() === '' || typeof request.summary !== 'string' || request.summary.trim() === '') {
    throw new UserFacingError(`${position}actor and summary are required.`);
  }
}

/**
 * Appends events to the ledger (redacted) and updates state.json under one lock.
 * All events are checked before anything is written: one invalid event writes nothing.
 */
export async function logEvents(root: string, requests: readonly LogRequest[]): Promise<LedgerEvent[]> {
  if (requests.length === 0) throw new UserFacingError('No events to log.');
  requests.forEach((request, index) => assertRequest(request, requests.length > 1 ? `Event ${index + 1}: ` : ''));
  const paths = requireWorkspace(root);
  return withMemoryLock(paths, () => {
    let state = readState(paths);
    const events: LedgerEvent[] = [];
    requests.forEach((request, index) => {
      const type = request.type as LedgerEventType;
      const event: LedgerEvent = {
        ts: new Date().toISOString(),
        runId: request.runId ?? (type === 'run_started' ? randomUUID() : state.currentRun?.id ?? null),
        actor: request.actor,
        type,
        summary: redact(request.summary),
        data: redactValue(request.data ?? {}),
      };
      try {
        state = applyToState(state, event, request);
      } catch (error) {
        if (requests.length > 1 && error instanceof UserFacingError) {
          error.message = `Event ${index + 1}: ${error.message} Nothing from this batch was written.`;
        }
        throw error;
      }
      events.push(event);
    });
    appendFileSync(paths.ledger, events.map((event) => `${JSON.stringify(event)}\n`).join(''));
    writeJsonAtomic(paths.state, state);
    return events;
  });
}

export async function logEvent(root: string, request: LogRequest): Promise<LedgerEvent> {
  const [event] = await logEvents(root, [request]);
  return event as LedgerEvent;
}

/** Parses JSON Lines input for a batch: one event object per non-empty line. */
export function parseBatch(text: string): LogRequest[] {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '')
    .map((line, index) => {
      let value: unknown;
      try {
        value = JSON.parse(line);
      } catch (error) {
        throw new UserFacingError(`Batch line ${index + 1} is not valid JSON (${(error as Error).message}).`);
      }
      if (value === null || typeof value !== 'object' || Array.isArray(value)) {
        throw new UserFacingError(`Batch line ${index + 1} must be a JSON object.`);
      }
      const item = value as Record<string, unknown>;
      return {
        type: String(item['type'] ?? ''),
        actor: String(item['actor'] ?? ''),
        summary: String(item['summary'] ?? ''),
        runId: typeof item['runId'] === 'string' ? item['runId'] : undefined,
        data: item['data'] !== null && typeof item['data'] === 'object' && !Array.isArray(item['data'])
          ? (item['data'] as Record<string, unknown>)
          : undefined,
        // Approving an extra correction cycle needs the explicit --human-approved flag, never a batch line.
      };
    });
}

export function readLedger(paths: WorkspacePaths): LedgerEvent[] {
  if (!existsSync(paths.ledger)) return [];
  return readFileSync(paths.ledger, 'utf8')
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => JSON.parse(line) as LedgerEvent);
}

export interface ForgetRequest {
  all?: boolean;
  olderThanDays?: number;
}

/** Deletes memory, either everything or entries older than a number of days. Context files are never touched. */
export async function forget(root: string, request: ForgetRequest): Promise<{ removedEvents: number; removedFiles: number }> {
  if (!request.all && (request.olderThanDays === undefined || !(request.olderThanDays >= 0))) {
    throw new UserFacingError('Use --all, or --older-than <days> with a number of days.');
  }
  const paths = requireWorkspace(root);
  return withMemoryLock(paths, () => {
    const events = readLedger(paths);
    const cutoff = request.all ? Number.POSITIVE_INFINITY : Date.now() - (request.olderThanDays ?? 0) * 86_400_000;
    const kept = events.filter((event) => Date.parse(event.ts) >= cutoff);
    writeFileSync(paths.ledger, kept.map((event) => `${JSON.stringify(event)}\n`).join(''));

    let removedFiles = 0;
    for (const dir of [paths.cache, paths.handoffs]) {
      if (!existsSync(dir)) continue;
      for (const entry of readdirSync(dir)) {
        const target = path.join(dir, entry);
        if (statSync(target).mtimeMs < cutoff) {
          rmSync(target, { recursive: true, force: true });
          removedFiles += 1;
        }
      }
    }
    if (request.all) {
      writeJsonAtomic(paths.files, {});
      writeJsonAtomic(paths.state, emptyState(readState(paths).activeProfile));
    }
    return { removedEvents: events.length - kept.length, removedFiles };
  });
}
