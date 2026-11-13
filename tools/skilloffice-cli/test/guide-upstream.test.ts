import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildDepartmentGuide } from '../src/guide.ts';
import { checkUpstream, formatUpstream } from '../src/upstream.ts';
import { fakeRepo, tempDir, writeFile } from './helpers.ts';

describe('department guide', () => {
  it('lists built departments with their install code and skills, and planned ones as coming later', () => {
    const guide = buildDepartmentGuide(fakeRepo());
    assert.match(guide, /\| `mkt` \| \[Marketing\]/);
    assert.match(guide, /\| `seo-audit` \| Audits a page for SEO issues/);
    assert.match(guide, /## Coming later\n\n- Sales/);
  });

  it('is identical when built twice', () => {
    const repo = fakeRepo();
    assert.equal(buildDepartmentGuide(repo), buildDepartmentGuide(repo));
  });
});

describe('upstream check', () => {
  const PINNED = 'a'.repeat(40);

  function repoWithSources(urls: string[]): string {
    const root = tempDir();
    writeFile(root, 'registry/sources.yaml',
      `sources:\n${urls.map((url, index) => `  - id: s${index}\n    url: ${url}\n    pinned_commit: ${PINNED}\n`).join('')}`);
    return root;
  }

  it('reports up to date, changed and unreachable sources without updating anything', () => {
    const root = repoWithSources(['https://github.com/a/same', 'https://github.com/a/moved', 'https://github.com/a/gone']);
    const latest = (url: string) => (url.endsWith('same') ? PINNED : url.endsWith('moved') ? 'b'.repeat(40) : null);
    const results = checkUpstream(root, latest);
    assert.deepEqual(results.map((item) => item.status), ['up to date', 'changed', 'unreachable']);
    assert.match(formatUpstream(results), /1 source\(s\) changed upstream/);
  });

  it('refuses source addresses that are not plain GitHub repository URLs', () => {
    const root = repoWithSources(['https://example.com/a/b']);
    assert.throws(() => checkUpstream(root, () => PINNED), /must be an https:\/\/github.com/);
  });
});
