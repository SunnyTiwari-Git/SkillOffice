# Provenance: legal-contract-review

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | legal/skills/review-contract/SKILL.md; small-business/skills/contract-review/SKILL.md and reference/gotchas.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/04-legal-risk-compliance--legal-contract-review.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Merged the in-house legal review (review-contract) with the small-business review (contract-review) into one review skill that works with or without a company playbook.
- Removed all connector steps: CLM routing, Gmail, Microsoft 365, Google Drive and DocuSign fetching, the HTML artifact, the DOCX redline export, the closing offers to other upstream skills and the connector-building suggestion. The user provides the contract; the skill reads it.
- Removed the `allowed-tools` pre-approval (Read, WebFetch) and slash-command usage.
- Condensed the clause-by-clause guidance into references/clause-guide.md in SkillOffice wording, covering both upstream category lists; removed emoji severity markers.
- Kept and reworded: read the whole document first, ask which side the user is on, flag missing protections, avoid flagging plain boilerplate, quote clauses exactly, match advice to the power balance, the green, yellow and red tiers, and the redline format with fallbacks.
- Added: the not-legal-advice notice on every output, stating the assumed jurisdiction, no invented laws or deadlines, never signing or sending, contract text treated as data, no client details in memory, findings in the shared format, the managed-run section and the handoff.

## Files not imported

- small-business/skills/contract-review/reference/gmail-fetch.md, m365-fetch.md, docusign-fetch.md (connector instructions).
- small-business/skills/contract-review/reference/examples/flagged-summary-saas.md (worked example; it also labels a three-month liability cap as "uncapped liability", which is inaccurate).
- legal/CONNECTORS.md and the plugin's .mcp.json.

## Attribution

Portions of this skill are adapted from anthropics/knowledge-work-plugins.

Licensed under the Apache License, Version 2.0 (the "License"). The upstream repository has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.
