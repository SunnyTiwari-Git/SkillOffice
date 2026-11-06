import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, it } from 'node:test';
import { parse } from 'yaml';
import { buildCatalog } from '../src/catalog.ts';
import { readContextFields } from '../src/context.ts';
import { AGENTS_START, GITIGNORE_ENTRIES, initWorkspace } from '../src/init.ts';
import { fakeRepoRoot, tempDir, VALID_SKILL_YAML, writeFile, writeValidSkill } from './helpers.ts';

describe('init', () => {
  it('creates the workspace, hides private folders from git and adds one AGENTS.md section', () => {
    const project = tempDir();
    const repo = fakeRepoRoot();
    initWorkspace(project, 'acme', repo);
    const second = initWorkspace(project, 'acme', repo);

    assert.ok(existsSync(path.join(project, '.skilloffice/context/acme/company.yaml')));
    assert.ok(existsSync(path.join(project, '.skilloffice/memory/state.json')));
    const gitignore = readFileSync(path.join(project, '.gitignore'), 'utf8');
    for (const entry of GITIGNORE_ENTRIES) assert.equal(gitignore.split(entry).length - 1, 1, entry);
    const agents = readFileSync(path.join(project, 'AGENTS.md'), 'utf8');
    assert.equal(agents.split(AGENTS_START).length - 1, 1);
    assert.equal(second.created.length, 0, 're-running init must not change anything');
  });

  it('rejects profile names that could escape the context folder', () => {
    assert.throws(() => initWorkspace(tempDir(), '../other', fakeRepoRoot()), /Profile name/);
  });
});

describe('context', () => {
  it('returns only the requested fields from the bound profile', () => {
    const project = tempDir();
    initWorkspace(project, 'acme', fakeRepoRoot());
    writeFile(project, '.skilloffice/context/acme/brand.yaml', 'voice: Friendly\ncolors:\n  primary: "#123456"\n');
    writeFile(project, '.skilloffice/context/other-client/brand.yaml', 'voice: Secret client voice\n');

    const fields = readContextFields(project, ['brand.voice', 'brand.colors.primary', 'company.missing_field']);
    assert.deepEqual(fields, { 'brand.voice': 'Friendly', 'brand.colors.primary': '#123456', 'company.missing_field': null });
  });
});

describe('catalog', () => {
  it('lists department skills sorted by id and leaves out the manager', () => {
    const root = tempDir();
    const department = path.join(root, '06-marketing-content-pr');
    writeValidSkill(root, '06-marketing-content-pr/skills/seo-audit');
    writeValidSkill(root, '06-marketing-content-pr/skills/ad-copy');
    writeFile(department, 'skills/ad-copy/skill.yaml', VALID_SKILL_YAML.replace('/seo-audit', '/ad-copy'));
    writeValidSkill(root, '06-marketing-content-pr/manager');
    writeFile(department, 'manager/skill.yaml', VALID_SKILL_YAML.replace('kind: skill', 'kind: manager'));

    const catalog = buildCatalog(department);
    assert.deepEqual(catalog.skills.map((skill) => skill.id), [
      '06-marketing-content-pr/ad-copy',
      '06-marketing-content-pr/seo-audit',
    ]);
    assert.equal(parse(JSON.stringify(catalog)).department, '06-marketing-content-pr');
  });
});
