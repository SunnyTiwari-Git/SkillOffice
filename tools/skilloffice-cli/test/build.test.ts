import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { describe, it } from 'node:test';
import { buildPackages } from '../src/build.ts';
import { fakeRepo, PILOT_SLUG } from './helpers.ts';

const SLUG = PILOT_SLUG;

function snapshot(dir: string): Record<string, string> {
  return Object.fromEntries(
    readdirSync(dir, { recursive: true, encoding: 'utf8' })
      .filter((file) => statSync(path.join(dir, file)).isFile())
      .sort()
      .map((file) => [file, readFileSync(path.join(dir, file), 'utf8')]),
  );
}

describe('build', () => {
  it('ships only core, the front desk and managers at the top level, with specialists bundled inside', () => {
    const root = fakeRepo();
    const result = buildPackages(root);
    const skills = path.join(root, 'dist/agents/skills');

    assert.deepEqual(result.departments, [SLUG], 'planned departments are not built');
    assert.deepEqual(readdirSync(skills).sort(), ['front-desk', 'mkt-manager', 'skilloffice-core']);
    assert.ok(existsSync(path.join(skills, 'mkt-manager/skills/seo-audit/SKILL.md')));
    assert.ok(existsSync(path.join(skills, 'mkt-manager/catalog.yaml')));
    assert.ok(existsSync(path.join(skills, 'skilloffice-core/references/protocols/memory.md')));
    assert.ok(existsSync(path.join(skills, 'front-desk/references/departments.yaml')));
  });

  it('leaves evals out of packages and includes license files', () => {
    const root = fakeRepo();
    buildPackages(root);
    const plugin = path.join(root, 'dist/claude-code/plugins/skilloffice-marketing-content-pr');
    assert.ok(!existsSync(path.join(plugin, 'skills/mkt-manager/skills/seo-audit/evals')));
    for (const file of ['LICENSE', 'NOTICE', 'third-party-licenses/upstream.txt', '.claude-plugin/plugin.json']) {
      assert.ok(existsSync(path.join(plugin, file)), file);
    }
  });

  it('writes a marketplace entry for the front desk and each built department', () => {
    const root = fakeRepo();
    buildPackages(root);
    const marketplace = JSON.parse(readFileSync(path.join(root, '.claude-plugin/marketplace.json'), 'utf8'));
    assert.deepEqual(
      marketplace.plugins.map((plugin: { name: string }) => plugin.name),
      ['skilloffice-front-desk', 'skilloffice-marketing-content-pr'],
    );
  });

  it('adds specialists as top-level skills in the full layout', () => {
    const root = fakeRepo();
    buildPackages(root, 'full');
    assert.ok(existsSync(path.join(root, 'dist/agents/skills/seo-audit/SKILL.md')));
  });

  it('produces identical output when run twice', () => {
    const root = fakeRepo();
    buildPackages(root);
    const first = snapshot(path.join(root, 'dist'));
    buildPackages(root);
    assert.deepEqual(snapshot(path.join(root, 'dist')), first);
  });
});
