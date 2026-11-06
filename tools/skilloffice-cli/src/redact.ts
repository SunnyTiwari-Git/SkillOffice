interface RedactionRule {
  label: string;
  pattern: RegExp;
}

// Order matters: specific token formats run before the generic key=value rule.
const RULES: readonly RedactionRule[] = [
  { label: 'private-key', pattern: /-----BEGIN [A-Z ]*PRIVATE KEY-----[\s\S]*?-----END [A-Z ]*PRIVATE KEY-----/g },
  { label: 'aws-access-key', pattern: /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/g },
  { label: 'github-token', pattern: /\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,})\b/g },
  { label: 'api-key', pattern: /\bsk-[A-Za-z0-9_-]{20,}\b/g },
  { label: 'slack-token', pattern: /\bxox[abprs]-[A-Za-z0-9-]{10,}\b/g },
  { label: 'google-api-key', pattern: /\bAIza[0-9A-Za-z_-]{35}\b/g },
  { label: 'jwt', pattern: /\beyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\b/g },
  { label: 'connection-string', pattern: /\b[a-z][a-z0-9+.-]*:\/\/[^\s:/@]+:[^\s@]+@[^\s]+/gi },
  { label: 'bearer-token', pattern: /\bBearer\s+[A-Za-z0-9._~+/=-]{16,}/g },
  { label: 'email', pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g },
  {
    label: 'secret-value',
    pattern: /\b(password|passwd|secret|api[_-]?key|token|access[_-]?key)(\s*[:=]\s*)(["']?)[^\s"',]{6,}\3/gi,
  },
];

/** Replaces secrets and personal data with [REDACTED:type] markers before anything is stored in memory. */
export function redact(text: string): string {
  return RULES.reduce((current, rule) => {
    if (rule.label === 'secret-value') {
      return current.replace(rule.pattern, (_match, key: string, separator: string) => `${key}${separator}[REDACTED:${rule.label}]`);
    }
    return current.replace(rule.pattern, `[REDACTED:${rule.label}]`);
  }, text);
}

/** Redacts every string inside a JSON-compatible value. */
export function redactValue<T>(value: T): T {
  return JSON.parse(redact(JSON.stringify(value))) as T;
}
