# Provenance: fin-reconciliation

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | finance/skills/reconciliation/SKILL.md; matching rules informed by small-business/skills/month-end-prep/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/03-finance-accounting--fin-reconciliation.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Turned the methodology into a review skill that reports unreconciled and aged items as findings in the shared SkillOffice format, with a severity guide.
- Added processor settlement reconciliation (net payout against net deposit) and the duplicate and tolerance rules from month-end-prep, without any ledger or payment processor connector.
- Replaced fixed dollar escalation thresholds with the user's policies; example aging buckets kept in `references/reconciling-items.md`.
- Added "never change, void or delete a ledger transaction", masking of account numbers and fraud escalation.
- Added the not-professional-advice notice, a quality checklist and a handoff section.

## Files not imported

- `finance/.mcp.json`, `finance/CONNECTORS.md` and month-end-prep's ledger and processor reference files: connector-specific, never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
