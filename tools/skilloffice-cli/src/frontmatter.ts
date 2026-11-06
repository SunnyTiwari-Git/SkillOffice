import { parse } from 'yaml';
import { UserFacingError } from './errors.ts';

export interface SkillDocument {
  frontmatter: Record<string, unknown>;
  body: string;
  /** Line number in the file where the body starts (1-based). */
  bodyStartLine: number;
}

const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

export function parseSkillDocument(text: string, fileLabel: string): SkillDocument {
  const match = FRONTMATTER_PATTERN.exec(text);
  if (!match) {
    throw new UserFacingError(`${fileLabel}: missing frontmatter block between --- lines`);
  }
  let frontmatter: unknown;
  try {
    frontmatter = parse(match[1] ?? '');
  } catch (error) {
    throw new UserFacingError(`${fileLabel}: frontmatter is not valid YAML (${(error as Error).message})`);
  }
  if (frontmatter === null || typeof frontmatter !== 'object' || Array.isArray(frontmatter)) {
    throw new UserFacingError(`${fileLabel}: frontmatter must be a set of key: value pairs`);
  }
  return {
    frontmatter: frontmatter as Record<string, unknown>,
    body: text.slice(match[0].length),
    bodyStartLine: match[0].split('\n').length,
  };
}
