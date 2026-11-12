# Provenance: sup-escalation

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream | https://github.com/anthropics/knowledge-work-plugins, path customer-support/skills/customer-escalation/SKILL.md, commit ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d, Apache-2.0 |
| Security review | registry/security-reviews/07-customer-support-success--sup-escalation.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Removed the slash-command usage block, the CONNECTORS.md pointer and connector context gathering (support platform, CRM, chat, project tracker, knowledge base).
- Removed the offers to post the brief to a chat channel and to set reminders.
- Moved escalation criteria, targets, severity, follow-up rhythm and de-escalation guidance to `references/escalation-guide.md`, condensed and reworded.
- Added redaction of secrets and personal data from quoted logs, revenue figures only from user data in `regional.currency`, and a breach-notification flag tied to `regional.jurisdictions` (not legal advice).
- Added SkillOffice context fields, safety and handoff sections.

## Files not imported

- `customer-support/.mcp.json` and `customer-support/CONNECTORS.md` (service connectors).

## Attribution

Derived from anthropics/knowledge-work-plugins, licensed under the Apache License, Version 2.0 (full text in `registry/licenses/anthropics-knowledge-work-plugins.txt`). The upstream repository has no NOTICE file. This file was modified by SkillOffice as listed above.
