import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { CorrectionLimitError } from '../src/errors.ts';
import { forget, logEvent, readLedger, readState } from '../src/memory.ts';
import { redact } from '../src/redact.ts';
import { workspacePaths } from '../src/workspace.ts';
import { initializedProject } from './helpers.ts';

describe('redact', () => {
  it('removes tokens, keys, connection strings and email addresses', () => {
    const output = redact(
      'token=abc123secret key AKIAABCDEFGHIJKLMNOP ghp_0123456789abcdefghijklmnopqrstuvwxyz mongodb://user:pass@host/db mail me@example.com',
    );
    for (const secret of ['abc123secret', 'AKIAABCDEFGHIJKLMNOP', 'ghp_0123', 'user:pass', 'me@example.com']) {
      assert.ok(!output.includes(secret), `still contains ${secret}`);
    }
  });
});

describe('memory ledger', () => {
  it('stores events redacted and tracks the open run in state', async () => {
    const project = initializedProject();
    const started = await logEvent(project, { type: 'run_started', actor: 'marketing/manager', summary: 'Review landing page' });
    await logEvent(project, { type: 'note', actor: 'marketing/seo-audit', summary: 'api_key=supersecretvalue found in config' });
    const paths = workspacePaths(project);
    const ledger = readLedger(paths);
    assert.equal(ledger.length, 2);
    assert.equal(ledger[1]?.runId, started.runId);
    assert.ok(!readFileSync(paths.ledger, 'utf8').includes('supersecretvalue'));
    assert.equal(readState(paths).currentRun?.id, started.runId);
  });

  it('allows one correction cycle per run and refuses a second without human approval', async () => {
    const project = initializedProject();
    await logEvent(project, { type: 'run_started', actor: 'design/manager', summary: 'Audit UI' });
    await logEvent(project, { type: 'correction_cycle', actor: 'design/manager', summary: 'Fix contrast issues' });
    await assert.rejects(
      logEvent(project, { type: 'correction_cycle', actor: 'design/manager', summary: 'Try again' }),
      CorrectionLimitError,
    );
    await logEvent(project, {
      type: 'correction_cycle',
      actor: 'design/manager',
      summary: 'User approved a second pass',
      humanApprovedExtraCycle: true,
    });
    assert.equal(readState(workspacePaths(project)).currentRun?.correctionCyclesUsed, 2);
  });

  it('rejects unknown event types and a second open run', async () => {
    const project = initializedProject();
    await assert.rejects(logEvent(project, { type: 'deleted_everything', actor: 'x/y', summary: 'z' }));
    await logEvent(project, { type: 'run_started', actor: 'x/manager', summary: 'first' });
    await assert.rejects(logEvent(project, { type: 'run_started', actor: 'x/manager', summary: 'second' }));
  });

  it('forget --all clears the ledger and state', async () => {
    const project = initializedProject();
    await logEvent(project, { type: 'run_started', actor: 'x/manager', summary: 'work' });
    const result = await forget(project, { all: true });
    assert.equal(result.removedEvents, 1);
    assert.equal(readLedger(workspacePaths(project)).length, 0);
    assert.equal(readState(workspacePaths(project)).currentRun, null);
  });
});
