import { readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { createFinding, type Finding, type Severity } from './findings.ts';
import { isProbablyBinary, listFiles } from './files.ts';

interface ScanRule {
  id: string;
  severity: Severity;
  title: string;
  pattern: RegExp;
  recommendation: string;
}

/** Files larger than this are flagged: attackers pad files to get past scanners. */
export const MAX_FILE_BYTES = 512 * 1024;

const ALLOW_MARKER = /skilloffice-scan:\s*allow\s+([a-z0-9-]+)/g;

const RULES: readonly ScanRule[] = [
  {
    id: 'remote-pipe-shell',
    severity: 'critical',
    title: 'Downloads a remote script and runs it in a shell',
    pattern: /\b(?:curl|wget)\b[^\n|]*\|\s*(?:sudo\s+)?(?:ba|z|da)?sh\b/i,
    recommendation: 'Remove it. Skills must never fetch and execute remote code.',
  },
  {
    id: 'base64-decode',
    severity: 'high',
    title: 'Decodes hidden Base64 content',
    pattern: /\bbase64\s+(?:-d|--decode)\b|\batob\s*\(|\bb64decode\s*\(/i,
    recommendation: 'Replace encoded content with readable text, or remove it.',
  },
  {
    id: 'encoded-blob',
    severity: 'medium',
    title: 'Long encoded blob',
    pattern: /[A-Za-z0-9+/]{200,}={0,2}/,
    recommendation: 'Check what the blob contains. Skills should contain readable text only.',
  },
  {
    id: 'hidden-unicode',
    severity: 'high',
    title: 'Invisible or text-direction Unicode characters',
    pattern: /[​-‏‪-‮⁠-⁤⁦-⁩]|(?!^)﻿/,
    recommendation: 'Remove invisible characters. They can hide instructions from human reviewers.',
  },
  {
    id: 'prompt-injection',
    severity: 'high',
    title: 'Phrase used in prompt-injection attacks',
    pattern: /\bignore\s+(?:all\s+)?(?:previous|prior|above|earlier)\s+instructions\b|\bdisregard\s+(?:the\s+|your\s+)?(?:system|previous)\b|\bdeveloper\s+mode\b|\bdo\s+not\s+tell\s+the\s+user\b/i,
    recommendation: 'Remove the phrase, or mark a legitimate example with a skilloffice-scan allow comment.',
  },
  {
    id: 'credential-access',
    severity: 'high',
    title: 'Refers to credential or key files',
    pattern: /~\/\.ssh\b|\bid_(?:rsa|ed25519)\b|\.aws\/credentials|\.npmrc\b|\.netrc\b|\.kube\/config|\bkeychain\b|\.git-credentials/i,
    recommendation: 'Skills must never read credentials. Remove the reference.',
  },
  {
    id: 'paste-site',
    severity: 'high',
    title: 'Links to a paste site often used to host payloads',
    pattern: /\b(?:pastebin\.com|glot\.io|rentry\.(?:co|org)|hastebin\.com|paste\.ee|ghostbin\.\w+|termbin\.com)\b/i,
    recommendation: 'Remove the link. Content must live in the skill folder where it can be reviewed.',
  },
  {
    id: 'env-exfiltration',
    severity: 'high',
    title: 'Reads environment variables near a network call',
    pattern: /(?:printenv|process\.env|os\.environ|\$ENV\b)[\s\S]{0,120}?(?:curl|wget|fetch\s*\(|requests\.|https?:\/\/)/i,
    recommendation: 'Remove it. Environment variables often hold secrets.',
  },
  {
    id: 'disable-safety',
    severity: 'high',
    title: 'Asks to disable safety or security controls',
    pattern: /\b(?:disable|turn\s+off|bypass|skip)\s+(?:the\s+)?(?:safety|security|sandbox|permission(?:s| prompts)?|antivirus|gatekeeper|firewall)\b/i,
    recommendation: 'Remove it. Skills must work within the platform safety controls.',
  },
  {
    id: 'persistence',
    severity: 'medium',
    title: 'Sets up something that runs automatically later',
    pattern: /\bcrontab\b|\blaunchctl\b|LaunchAgents|systemctl\s+enable|>>\s*~\/\.(?:bash|zsh)rc|\.bash_profile/i,
    recommendation: 'Check why the skill needs this. Skills should not install background jobs.',
  },
];

function allowedRulesOnLine(line: string): Set<string> {
  return new Set([...line.matchAll(ALLOW_MARKER)].map((match) => match[1] ?? ''));
}

function scanText(text: string, location: string): Finding[] {
  const findings: Finding[] = [];
  const lines = text.split('\n');
  lines.forEach((line, index) => {
    const allowed = allowedRulesOnLine(line);
    for (const rule of RULES) {
      if (allowed.has(rule.id) || !rule.pattern.test(line)) continue;
      findings.push(
        createFinding({
          id: rule.id,
          severity: rule.severity,
          title: rule.title,
          location: `${location}:${index + 1}`,
          evidence: line.trim().slice(0, 160),
          recommendation: rule.recommendation,
          source_skill: 'skilloffice/scan',
        }),
      );
    }
  });
  return findings;
}

/** Scans files statically. Nothing is executed. */
export function scanPaths(root: string, targets: readonly string[]): Finding[] {
  const findings: Finding[] = [];
  for (const file of listFiles(root, targets)) {
    const location = path.relative(root, file).split(path.sep).join('/');
    const size = statSync(file).size;
    if (size > MAX_FILE_BYTES) {
      findings.push(
        createFinding({
          id: 'oversized-file',
          severity: 'high',
          title: 'File is unusually large',
          location,
          evidence: `${size} bytes (limit ${MAX_FILE_BYTES})`,
          recommendation: 'Remove padding or split the file. Large files are used to get past scanners.',
          source_skill: 'skilloffice/scan',
        }),
      );
      continue;
    }
    const content = readFileSync(file);
    if (isProbablyBinary(content)) {
      findings.push(
        createFinding({
          id: 'binary-file',
          severity: 'medium',
          title: 'Binary file inside a skill',
          location,
          evidence: `${size} bytes`,
          recommendation: 'Confirm it is a harmless asset such as an image. Executables are not allowed.',
          source_skill: 'skilloffice/scan',
        }),
      );
      continue;
    }
    findings.push(...scanText(content.toString('utf8'), location));
  }
  return findings;
}
