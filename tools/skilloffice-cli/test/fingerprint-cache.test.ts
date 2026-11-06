import assert from 'node:assert/strict';
import { rmSync } from 'node:fs';
import path from 'node:path';
import { describe, it } from 'node:test';
import { cacheGet, cachePut } from '../src/cache.ts';
import { fileStatus, verifyFile } from '../src/fingerprint.ts';
import { initializedProject, writeFile } from './helpers.ts';

describe('file fingerprints', () => {
  it('reports unchanged, changed, added and deleted files since the last review', async () => {
    const project = initializedProject();
    writeFile(project, 'src/a.md', 'A');
    writeFile(project, 'src/b.md', 'B');
    writeFile(project, 'src/c.md', 'C');
    await verifyFile(project, 'src/a.md', 'Reviewed A', 'qa/review');
    await verifyFile(project, 'src/b.md', 'Reviewed B', 'qa/review');
    await verifyFile(project, 'src/c.md', 'Reviewed C', 'qa/review');
    writeFile(project, 'src/b.md', 'B changed');
    writeFile(project, 'src/d.md', 'D');
    rmSync(path.join(project, 'src/c.md'));

    const report = fileStatus(project, ['src']);
    assert.deepEqual(report.unchanged, ['src/a.md']);
    assert.deepEqual(report.changed, ['src/b.md']);
    assert.deepEqual(report.added, ['src/d.md']);
    assert.deepEqual(report.deleted, ['src/c.md']);
  });

  it('refuses paths outside the project', async () => {
    const project = initializedProject();
    await assert.rejects(verifyFile(project, '../outside.md', 'x', 'y'), /outside the project/);
  });
});

describe('result cache', () => {
  const skill = '06-marketing-content-pr/seo-audit@1.0.0';

  it('returns a hit only while inputs and requirements are unchanged', async () => {
    const project = initializedProject();
    writeFile(project, 'page.html', '<h1>Hi</h1>');
    writeFile(project, 'brief.md', 'Target keyword: shoes');
    const request = { skill, inputs: ['page.html'], requirements: ['brief.md'] };

    assert.equal(cacheGet(project, request), null);
    await cachePut(project, request, 'No issues found');
    assert.equal(cacheGet(project, request)?.result, 'No issues found');

    writeFile(project, 'brief.md', 'Target keyword: boots');
    assert.equal(cacheGet(project, request), null, 'a changed requirement must invalidate the result');
  });

  it('never caches security or verification skills', async () => {
    const project = initializedProject();
    writeFile(project, 'app.ts', 'x');
    for (const id of ['14-cybersecurity/threat-model@1.0.0', '10-software-development/final-verification@1.0.0']) {
      await assert.rejects(cachePut(project, { skill: id, inputs: ['app.ts'], requirements: [] }, 'ok'), /never cached/);
    }
  });

  it('requires a version on the skill id', () => {
    const project = initializedProject();
    writeFile(project, 'a.txt', 'x');
    assert.throws(() => cacheGet(project, { skill: 'x/seo-audit', inputs: ['a.txt'], requirements: [] }), /version/);
  });
});
