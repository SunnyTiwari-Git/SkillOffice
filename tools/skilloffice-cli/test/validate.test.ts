import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { validatePaths } from '../src/validate.ts';
import { tempDir, VALID_SKILL_MD, VALID_SKILL_YAML, writeFile, writeValidSkill } from './helpers.ts';

const ids = (root: string): string[] => validatePaths(root, ['.']).findings.map((finding) => finding.id);

describe('validate', () => {
  it('passes a skill that follows the spec and has a complete skill.yaml', () => {
    const root = tempDir();
    writeValidSkill(root);
    const { skills, findings } = validatePaths(root, ['.']);
    assert.equal(skills.length, 1);
    assert.deepEqual(findings, []);
  });

  it('flags frontmatter fields outside the six standard fields', () => {
    const root = tempDir();
    const dir = writeValidSkill(root);
    writeFile(dir, 'SKILL.md', VALID_SKILL_MD.replace('license:', 'when_to_use: always\nlicense:'));
    assert.ok(ids(root).includes('frontmatter-extra-field'));
  });

  it('flags a name that does not match its folder', () => {
    const root = tempDir();
    writeValidSkill(root, 'departments/x/skills/other-name');
    assert.ok(ids(root).includes('name-folder-mismatch'));
  });

  it('flags allowed-tools that pre-approve shell access', () => {
    const root = tempDir();
    const dir = writeValidSkill(root);
    writeFile(dir, 'SKILL.md', VALID_SKILL_MD.replace('license:', 'allowed-tools: Read Bash\nlicense:'));
    assert.ok(ids(root).includes('allowed-tools-risky'));
  });

  it('flags a network skill that is not marked high risk', () => {
    const root = tempDir();
    const dir = writeValidSkill(root);
    writeFile(dir, 'skill.yaml', VALID_SKILL_YAML.replace('[reads_files]', '[network]'));
    assert.ok(ids(root).includes('risk-understated'));
  });

  it('requires medium risk for a skill that writes files, and low for one that only reads', () => {
    const root = tempDir();
    const dir = writeValidSkill(root);
    writeFile(dir, 'skill.yaml', VALID_SKILL_YAML.replace('[reads_files]', '[reads_files, writes_files]'));
    assert.ok(ids(root).includes('risk-understated'));
    writeFile(dir, 'skill.yaml', VALID_SKILL_YAML.replace('risk: low', 'risk: medium'));
    assert.ok(ids(root).includes('risk-mismatch'));
  });

  it('requires source, commit and PROVENANCE.md for adapted skills', () => {
    const root = tempDir();
    const dir = writeValidSkill(root);
    writeFile(dir, 'skill.yaml', VALID_SKILL_YAML.replace('type: original', 'type: adapted'));
    const found = ids(root);
    assert.ok(found.includes('provenance-incomplete'));
    assert.ok(found.includes('provenance-file-missing'));
  });

  it('flags links to files that do not exist', () => {
    const root = tempDir();
    const dir = writeValidSkill(root);
    writeFile(dir, 'SKILL.md', VALID_SKILL_MD.replace('references/checklist.md', 'references/missing.md'));
    assert.ok(ids(root).includes('broken-reference'));
  });

  it('skips template folders during discovery', () => {
    const root = tempDir();
    writeFile(root, 'core/templates/skill/SKILL.md', VALID_SKILL_MD);
    assert.equal(validatePaths(root, ['.']).skills.length, 0);
  });
});
