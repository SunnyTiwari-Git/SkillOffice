# Provenance: sup-draft-response

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream | https://github.com/anthropics/knowledge-work-plugins, path customer-support/skills/draft-response/SKILL.md, commit ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d, Apache-2.0 |
| Security review | registry/security-reviews/07-customer-support-success--sup-draft-response.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Removed the slash-command usage block, the CONNECTORS.md pointer and all connector research steps (email, chat, CRM, support platform, knowledge base).
- Removed the offer to schedule follow-up messages.
- Kept the response structure, length guidance, tone by situation and relationship stage, and writing rules; moved and condensed them into `references/reply-guide.md`.
- Dropped the long full-letter templates; kept situation approaches and the internal escalation note format.
- Added a policy check that turns unconfirmed refunds, credits, discounts, SLA exceptions and dates into approval placeholders, and routing of legal, safety and breach topics to a human.
- Added SkillOffice context fields, safety and handoff sections.

## Files not imported

- `customer-support/.mcp.json` and `customer-support/CONNECTORS.md` (service connectors).

## Attribution

Derived from anthropics/knowledge-work-plugins, licensed under the Apache License, Version 2.0 (full text in `registry/licenses/anthropics-knowledge-work-plugins.txt`). The upstream repository has no NOTICE file. This file was modified by SkillOffice as listed above.
