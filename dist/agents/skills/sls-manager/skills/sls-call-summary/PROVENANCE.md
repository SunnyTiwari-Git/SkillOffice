# Provenance: sls-call-summary

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | sales/skills/call-summary/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/05-sales-business-development--sls-call-summary.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Removed the shared connector rules block, connector tiers, vendor-specific transcript retrieval, email draft creation and sending, chat posting and CRM writes.
- The follow-up and internal summary are paste-ready drafts; CRM changes are a checklist for the user.
- Kept extraction with line pointers and the separation of instruction-like transcript text.
- Added a rule that discussed prices, discounts, terms and dates are marked as needing approval, plus SkillOffice context fields, safety and handoff sections.

## Files not imported

- `sales/.mcp.json` and `sales/CONNECTORS.md` (service connectors).

## Attribution

Derived from anthropics/knowledge-work-plugins (from Anthropic), licensed under the Apache License, Version 2.0. The full license text is in `registry/licenses/anthropics-knowledge-work-plugins.txt`. The upstream repository has no NOTICE file. This file has been modified from the original as listed above.
