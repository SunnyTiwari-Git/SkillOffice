import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, it } from 'node:test';
import { buildPackages } from '../src/build.ts';
import { installDepartments, listAvailable, resolveDepartments, uninstallDepartments } from '../src/install.ts';
import { fakeRepo, tempDir, writeFile } from './helpers.ts';

function builtRepo(): string {
  const repo = fakeRepo();
  buildPackages(repo);
  return repo;
}

describe('install', () => {
  it('lists only departments that are built and ready', () => {
    assert.deepEqual(listAvailable(builtRepo()).map((item) => item.manager), ['mkt-manager']);
  });

  it('installs the shared skills and the chosen manager for Claude Code and sets up the workspace', () => {
    const repo = builtRepo();
    const project = tempDir();
    const result = installDepartments(project, 'claude-code', ['mkt'], repo);

    assert.deepEqual(result.installed.sort(), ['front-desk', 'mkt-manager', 'skilloffice-core']);
    assert.deepEqual(readdirSync(path.join(project, '.claude/skills')).sort(), ['front-desk', 'mkt-manager', 'skilloffice-core']);
    assert.ok(existsSync(path.join(project, '.claude/skills/mkt-manager/skills/seo-audit/SKILL.md')), 'specialists ship inside the manager');
    assert.ok(existsSync(path.join(project, '.skilloffice/memory/state.json')));
    const lock = JSON.parse(readFileSync(path.join(project, '.skilloffice/lock.json'), 'utf8'));
    assert.equal(lock.installed['claude-code']['mkt-manager'].department, '06-marketing-content-pr');
  });

  it('accepts slugs and manager names, and installing again updates instead of duplicating', () => {
    const repo = builtRepo();
    const project = tempDir();
    installDepartments(project, 'agents', ['06-marketing-content-pr'], repo);
    const again = installDepartments(project, 'agents', ['mkt-manager'], repo);
    assert.deepEqual(again.installed, []);
    assert.equal(again.updated.length, 3);
  });

  it('refuses to overwrite a skill folder it did not install, and installs nothing', () => {
    const repo = builtRepo();
    const project = tempDir();
    writeFile(project, '.agents/skills/front-desk/SKILL.md', 'my own skill');
    assert.throws(() => installDepartments(project, 'agents', ['all'], repo), /was not installed by SkillOffice/);
    assert.equal(readFileSync(path.join(project, '.agents/skills/front-desk/SKILL.md'), 'utf8'), 'my own skill');
    assert.ok(!existsSync(path.join(project, '.agents/skills/mkt-manager')));
  });

  it('accepts a plain word from the department name, and refuses a word that fits several departments', () => {
    const available = [
      { slug: '03-finance-accounting', name: 'Finance and Accounting', manager: 'fin-manager' },
      { slug: '12-it-operations', name: 'IT Operations and Technical Support', manager: 'it-manager' },
      { slug: '16-operations-project-management', name: 'Business Operations and Project Management', manager: 'biz-manager' },
    ];
    assert.equal(resolveDepartments(['finance'], available)[0]?.manager, 'fin-manager');
    assert.throws(() => resolveDepartments(['operations'], available), /fits more than one department: it .*biz/);
  });

  it('rejects unknown platforms and departments with a helpful message', () => {
    const repo = builtRepo();
    assert.throws(() => installDepartments(tempDir(), 'vscode', ['mkt'], repo), /--platform must be one of/);
    assert.throws(() => installDepartments(tempDir(), 'agents', ['payroll'], repo), /Unknown department "payroll"/);
  });
});

describe('uninstall', () => {
  it('removes the department and, when none are left, the shared skills, but keeps context and memory', () => {
    const repo = builtRepo();
    const project = tempDir();
    installDepartments(project, 'agents', ['mkt'], repo);
    const removed = uninstallDepartments(project, 'agents', ['mkt'], repo);

    assert.deepEqual(removed.sort(), ['front-desk', 'mkt-manager', 'skilloffice-core']);
    assert.deepEqual(readdirSync(path.join(project, '.agents/skills')), []);
    assert.ok(existsSync(path.join(project, '.skilloffice/context/default/company.yaml')));
    assert.ok(existsSync(path.join(project, '.skilloffice/memory/state.json')));
  });

  it('never removes skill folders it did not install', () => {
    const repo = builtRepo();
    const project = tempDir();
    installDepartments(project, 'agents', ['mkt'], repo);
    writeFile(project, '.agents/skills/my-skill/SKILL.md', 'mine');
    uninstallDepartments(project, 'agents', ['all'], repo);
    assert.ok(existsSync(path.join(project, '.agents/skills/my-skill/SKILL.md')));
  });
});
