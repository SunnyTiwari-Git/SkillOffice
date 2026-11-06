# Provenance: sls-account-research

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream paths | sales/skills/account-research/SKILL.md; sales/skills/account-context/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/05-sales-business-development--sls-account-research.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Merged account-research (prospects) and account-context (existing customers) into one skill with two modes.
- Removed the shared connector rules block, the tools table, connector tiers and all CRM, email, chat and calendar actions (including the owner chat message). The user supplies exports, notes and threads instead.
- Replaced the CRM ownership lookup with a check against data the user provides, with an explicit "not checked" state.
- Kept the ICP fit table, dated and sourced signals, labeled inferences and specific relevance hooks.
- Added SkillOffice context fields, sensitive-trait and privacy rules, safety and handoff sections.

## Files not imported

- `sales/.mcp.json` and `sales/CONNECTORS.md` (service connectors).

## Attribution

Derived from anthropics/knowledge-work-plugins (from Anthropic), licensed under the Apache License, Version 2.0. The full license text is in `registry/licenses/anthropics-knowledge-work-plugins.txt`. The upstream repository has no NOTICE file. This file has been modified from the original as listed above.
