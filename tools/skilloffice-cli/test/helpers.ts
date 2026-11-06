import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { initWorkspace } from '../src/init.ts';

export function tempDir(): string {
  return mkdtempSync(path.join(tmpdir(), 'skilloffice-test-'));
}

export function writeFile(root: string, relative: string, content: string): string {
  const file = path.join(root, relative);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, content);
  return file;
}

/** A minimal stand-in for the SkillOffice repo, holding only what init needs. */
export function fakeRepoRoot(): string {
  const root = tempDir();
  writeFile(root, 'context-templates/company.yaml', 'name: ""\nindustry: ""\n');
  writeFile(root, 'context-templates/brand.yaml', 'voice: ""\ncolors:\n  primary: ""\n');
  writeFile(root, 'context-templates/brand-assets/README.md', '# Brand assets\n');
  writeFile(root, 'core/templates/agents-md-section.md', '## SkillOffice\n\nFollow core/protocols/memory.md.\n');
  return root;
}

export function initializedProject(): string {
  const project = tempDir();
  initWorkspace(project, 'default', fakeRepoRoot());
  return project;
}

export const VALID_SKILL_MD = `---
name: seo-audit
description: Audits a web page for search visibility issues. Use when asked to review SEO.
license: Apache-2.0
metadata:
  version: "1.0.0"
---

# SEO audit

Follow the steps in [the checklist](references/checklist.md).
`;

export const VALID_SKILL_YAML = `id: 06-marketing-content-pr/seo-audit
version: 1.0.0
kind: skill
department: 06-marketing-content-pr
summary: Audits a page for SEO issues and returns findings.
inputs:
  - { name: page, description: URL or file, required: true }
outputs:
  - { name: findings, description: Findings in the shared format }
depends_on: []
context_needs: [company.name, brand.voice]
risk: low
side_effects: [reads_files]
cacheable: true
platforms_tested: []
provenance:
  type: original
`;

export function writeValidSkill(root: string, folder = 'departments/06-marketing-content-pr/skills/seo-audit'): string {
  writeFile(root, `${folder}/SKILL.md`, VALID_SKILL_MD);
  writeFile(root, `${folder}/skill.yaml`, VALID_SKILL_YAML);
  writeFile(root, `${folder}/references/checklist.md`, '- Title tag present\n');
  return path.join(root, folder);
}
