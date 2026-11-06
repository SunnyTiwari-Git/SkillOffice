# Provenance: sls-call-prep

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream paths | sales/skills/call-prep/SKILL.md; sales/skills/stakeholder-map/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/05-sales-business-development--sls-call-prep.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Merged call-prep and stakeholder-map into one meeting brief.
- Removed the shared connector rules block, connector tiers, calendar resolution, vendor-specific call-recorder instructions and CRM contact creation. The user supplies meeting details, notes and threads.
- Kept the evidence bar for champions, the stakeholder table, coverage gaps and access paths, and the call plan.
- Added SkillOffice context fields (including `regional.time_zone`), safety and handoff sections.

## Files not imported

- `sales/.mcp.json` and `sales/CONNECTORS.md` (service connectors).

## Attribution

Derived from anthropics/knowledge-work-plugins (from Anthropic), licensed under the Apache License, Version 2.0. The full license text is in `registry/licenses/anthropics-knowledge-work-plugins.txt`. The upstream repository has no NOTICE file. This file has been modified from the original as listed above.
