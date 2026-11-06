# Provenance: pm-stakeholder-update

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | product-management/skills/stakeholder-update/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/08-product-management--pm-stakeholder-update.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Rewrote in SkillOffice format as a numbered process; body about 70 lines.
- Removed connector steps (project tracker, chat, meeting transcription, knowledge base), the offer to draft chat messages for sending and the slash-command usage block. The skill drafts only and never sends.
- Added a commitments check: customer and board versions must not promise unconfirmed dates or features and need the user's approval.
- Moved audience templates, status definitions and the decision record format into `references/update-templates.md`, condensed. The upstream meeting facilitation section (stand-ups, planning, retrospectives, demos) was not carried over, as it falls outside this skill.
- Company, team and regional context comes from the SkillOffice context profile.
- Added a quality checklist, a safety note and a handoff section.

## Files not imported

- `product-management/.mcp.json`: connector configuration, never imported.
- `product-management/CONNECTORS.md` and `product-management/commands/`: not needed.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
