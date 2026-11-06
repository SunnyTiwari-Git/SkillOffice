import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { collectEvidence } from '../src/evidence.ts';
import { logEvent, logEvents, parseBatch, readLedger, readState } from '../src/memory.ts';
import { workspacePaths } from '../src/workspace.ts';
import { initializedProject, writeFile } from './helpers.ts';

const MANAGER = '06-marketing-content-pr/mkt-manager';

describe('batch logging', () => {
  it('writes every event of a valid batch under one run', async () => {
    const project = initializedProject();
    const events = await logEvents(project, parseBatch([
      JSON.stringify({ type: 'run_started', actor: MANAGER, summary: 'Review page' }),
      JSON.stringify({ type: 'skill_completed', actor: '06-marketing-content-pr/mkt-seo-audit', summary: '4 findings' }),
      '',
      JSON.stringify({ type: 'skill_skipped', actor: '06-marketing-content-pr/mkt-copywriting', summary: 'Not requested' }),
    ].join('\n')));
    assert.equal(events.length, 3);
    assert.ok(events.every((event) => event.runId === events[0]?.runId));
    assert.equal(readLedger(workspacePaths(project)).length, 3);
  });

  it('writes nothing when any event in the batch is invalid', async () => {
    const project = initializedProject();
    await logEvent(project, { type: 'run_started', actor: MANAGER, summary: 'Review page' });
    const batch = parseBatch([
      JSON.stringify({ type: 'correction_cycle', actor: MANAGER, summary: 'Fix findings' }),
      JSON.stringify({ type: 'correction_cycle', actor: MANAGER, summary: 'Second cycle' }),
    ].join('\n'));
    await assert.rejects(logEvents(project, batch), /Nothing from this batch was written/);
    const paths = workspacePaths(project);
    assert.equal(readLedger(paths).length, 1);
    assert.equal(readState(paths).currentRun?.correctionCyclesUsed, 0);
  });

  it('ignores an extra-cycle approval written inside a batch line', () => {
    const [request] = parseBatch(JSON.stringify({ type: 'note', actor: 'x/y', summary: 'z', humanApprovedExtraCycle: true }));
    assert.equal(request?.humanApprovedExtraCycle, undefined);
  });

  it('rejects lines that are not JSON objects', () => {
    assert.throws(() => parseBatch('not json'), /line 1 is not valid JSON/);
    assert.throws(() => parseBatch('[1,2]'), /must be a JSON object/);
  });
});

describe('evidence', () => {
  it('marks reuse as not tested when only one run happened', async () => {
    const project = initializedProject();
    await logEvents(project, [
      { type: 'run_started', actor: MANAGER, summary: 'Review' },
      { type: 'skill_completed', actor: 'x/mkt-seo-audit', summary: 'done' },
      { type: 'run_completed', actor: MANAGER, summary: 'done' },
    ]);
    writeFile(project, '.skilloffice/reports/001.md', '# Report');
    const checks = Object.fromEntries(collectEvidence(project).checks.map((item) => [item.check, item.result]));
    assert.equal(checks['Used the department manager'], 'yes');
    assert.equal(checks['One report per run'], 'yes');
    assert.equal(checks['Second run reused earlier results'], 'not tested');
    assert.equal(checks['Did not publish, send or deploy anything'], 'check by hand');
  });

  it('confirms reuse only when a repeat run skipped skills and cache entries exist', async () => {
    const project = initializedProject();
    const run = (skipped: boolean) => logEvents(project, [
      { type: 'run_started', actor: MANAGER, summary: 'Review' },
      skipped
        ? { type: 'skill_skipped', actor: 'x/mkt-seo-audit', summary: 'cached result still valid' }
        : { type: 'skill_completed', actor: 'x/mkt-seo-audit', summary: 'done' },
      { type: 'run_completed', actor: MANAGER, summary: 'done' },
    ]);
    await run(false);
    await run(true);
    const reuse = () => collectEvidence(project).checks.find((item) => item.check === 'Second run reused earlier results')?.result;
    assert.equal(reuse(), 'no', 'no cache entries yet');
    writeFile(project, '.skilloffice/memory/cache/abc.json', '{}');
    assert.equal(reuse(), 'yes');
  });
});
