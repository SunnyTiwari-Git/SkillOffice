# Provenance: sls-deal-review

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream paths | sales/skills/deal-review/SKILL.md; sales/skills/deal-advance-gap/SKILL.md; sales/skills/close-plan/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/05-sales-business-development--sls-deal-review.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Merged deal-review, deal-advance-gap and close-plan into one review skill with three modes.
- Removed the shared connector rules block, connector tiers, CRM writes, document creation and the champion email. Record changes are a checklist for the user.
- Output now uses the SkillOffice findings format with a severity guide.
- Kept the signal-adjusted probability table (moved to `references/deal-signals.md`), the stage reality check, the gap map and the business case and mutual action plan structures (moved to `references/close-plan.md`).
- Added pricing and terms placeholders that require team approval, plus SkillOffice context fields, safety and handoff sections.

## Files not imported

- `sales/.mcp.json` and `sales/CONNECTORS.md` (service connectors).

## Attribution

Derived from anthropics/knowledge-work-plugins (from Anthropic), licensed under the Apache License, Version 2.0. The full license text is in `registry/licenses/anthropics-knowledge-work-plugins.txt`. The upstream repository has no NOTICE file. This file has been modified from the original as listed above.
