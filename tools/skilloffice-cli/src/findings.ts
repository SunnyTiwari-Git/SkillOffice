export type Severity = 'critical' | 'high' | 'medium' | 'low' | 'info';

export const SEVERITIES: readonly Severity[] = ['critical', 'high', 'medium', 'low', 'info'];

export interface Finding {
  id: string;
  severity: Severity;
  title: string;
  location: string;
  evidence: string;
  recommendation: string;
  source_skill: string;
  status: 'open';
}

export type FindingInput = Omit<Finding, 'status'>;

export function createFinding(input: FindingInput): Finding {
  return { ...input, status: 'open' };
}

/** Critical and high findings block a release or an import. */
export function isBlocking(finding: Finding): boolean {
  return finding.severity === 'critical' || finding.severity === 'high';
}

export function sortBySeverity(findings: readonly Finding[]): Finding[] {
  return [...findings].sort(
    (a, b) => SEVERITIES.indexOf(a.severity) - SEVERITIES.indexOf(b.severity),
  );
}

export function formatFindings(findings: readonly Finding[]): string {
  if (findings.length === 0) return 'No findings.';
  return sortBySeverity(findings)
    .map(
      (f) =>
        `[${f.severity.toUpperCase()}] ${f.title}\n  at: ${f.location}\n  evidence: ${f.evidence}\n  fix: ${f.recommendation}`,
    )
    .join('\n\n');
}
