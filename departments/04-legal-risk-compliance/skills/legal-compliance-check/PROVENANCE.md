# Provenance: legal-compliance-check

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | legal/skills/compliance-check/SKILL.md; operations/skills/compliance-tracking/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/04-legal-risk-compliance--legal-compliance-check.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Merged the compliance check with the audit-readiness tracking skill.
- Replaced the long privacy regulation overview, DPA checklist, data subject request handling and regulatory monitoring sections with a short regulation map in SkillOffice wording (references/regulation-map.md). DPA review moved to legal-contract-review and legal-privacy-review; data subject request responses moved to legal-response-draft.
- Removed specific response timelines and other numbers that change between laws and over time, except the commonly cited GDPR breach notification window, which is marked as needing confirmation. Added the India DPDP Act, HIPAA and PCI DSS as named starting points.
- Removed the connector note and slash-command usage.
- Added: the not-legal-advice notice, the assumed jurisdictions, a rule against invented laws, articles, thresholds or deadlines, never calling an activity "compliant", the one-line verdict, findings in the shared format, the managed-run section and the handoff.

## Files not imported

- legal/CONNECTORS.md and the plugin's .mcp.json.

## Attribution

Portions of this skill are adapted from anthropics/knowledge-work-plugins.

Licensed under the Apache License, Version 2.0 (the "License"). The upstream repository has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.
