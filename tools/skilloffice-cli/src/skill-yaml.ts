import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { UserFacingError } from './errors.ts';

export const RISK_LEVELS = ['low', 'medium', 'high'] as const;
export const SKILL_KINDS = ['skill', 'manager', 'core'] as const;
export const SIDE_EFFECTS = ['none', 'reads_files', 'writes_files', 'runs_scripts', 'network', 'external_actions'] as const;
export const PROVENANCE_TYPES = ['original', 'adapted'] as const;
/** Side effects that make a skill high risk by definition. */
export const HIGH_RISK_EFFECTS: readonly string[] = ['runs_scripts', 'network', 'external_actions'];

export interface SkillYaml {
  id: string;
  version: string;
  kind: (typeof SKILL_KINDS)[number];
  department: string;
  summary: string;
  inputs: { name: string; description: string; required: boolean }[];
  outputs: { name: string; description: string }[];
  depends_on: string[];
  context_needs: string[];
  risk: (typeof RISK_LEVELS)[number];
  side_effects: (typeof SIDE_EFFECTS)[number][];
  cacheable: boolean;
  platforms_tested: { platform: string; date: string; result: 'pass' | 'fail' | 'partial' }[];
  provenance: { type: (typeof PROVENANCE_TYPES)[number]; source_id?: string; upstream_commit?: string };
}

export const SKILL_YAML_FILE = 'skill.yaml';

/** Reads skill.yaml without validating it. Validation lives in validate.ts. */
export function readSkillYaml(skillDir: string): Record<string, unknown> {
  const file = path.join(skillDir, SKILL_YAML_FILE);
  if (!existsSync(file)) throw new UserFacingError(`${file}: not found`);
  let data: unknown;
  try {
    data = parse(readFileSync(file, 'utf8'));
  } catch (error) {
    throw new UserFacingError(`${file}: not valid YAML (${(error as Error).message})`);
  }
  if (data === null || typeof data !== 'object' || Array.isArray(data)) {
    throw new UserFacingError(`${file}: must be a set of key: value pairs`);
  }
  return data as Record<string, unknown>;
}
