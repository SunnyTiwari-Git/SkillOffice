import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { UserFacingError } from './errors.ts';
import { requireWorkspace } from './workspace.ts';

const DOT_PATH = /^[a-z_]+(?:\.[a-z0-9_]+)+$/;
const PROFILE_NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export interface WorkspaceConfig {
  schemaVersion: number;
  activeProfile: string;
  platforms: string[];
  departments: string[];
  memory: { retentionDays: number };
  privacy: { commitContext: boolean };
}

export function assertProfileName(profile: string): void {
  if (!PROFILE_NAME.test(profile)) {
    throw new UserFacingError(`Profile name "${profile}" must use lowercase letters, digits and hyphens.`);
  }
}

export function readConfig(root: string): WorkspaceConfig {
  const paths = requireWorkspace(root);
  if (!existsSync(paths.config)) throw new UserFacingError(`Missing ${paths.config}. Run "skilloffice init".`);
  return parse(readFileSync(paths.config, 'utf8')) as WorkspaceConfig;
}

/**
 * Reads only the requested fields from the project's bound profile.
 * Other profiles are never read, so one client's details cannot leak into another client's work.
 */
export function readContextFields(root: string, fields: readonly string[]): Record<string, unknown> {
  const config = readConfig(root);
  assertProfileName(config.activeProfile);
  const profileDir = path.join(requireWorkspace(root).context, config.activeProfile);
  const loaded = new Map<string, Record<string, unknown>>();
  const result: Record<string, unknown> = {};

  for (const field of fields) {
    if (!DOT_PATH.test(field)) throw new UserFacingError(`"${field}" is not a context path like brand.voice`);
    const [section, ...rest] = field.split('.');
    const file = path.join(profileDir, `${section}.yaml`);
    if (!loaded.has(file)) {
      loaded.set(file, existsSync(file) ? ((parse(readFileSync(file, 'utf8')) ?? {}) as Record<string, unknown>) : {});
    }
    let value: unknown = loaded.get(file);
    for (const key of rest) {
      value = value !== null && typeof value === 'object' ? (value as Record<string, unknown>)[key] : undefined;
    }
    result[field] = value ?? null;
  }
  return result;
}
