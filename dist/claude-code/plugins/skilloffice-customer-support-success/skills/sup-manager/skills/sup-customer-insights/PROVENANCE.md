# Provenance: sup-customer-insights

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream | https://github.com/anthropics/knowledge-work-plugins, path customer-support/skills/customer-research/SKILL.md, commit ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d, Apache-2.0 |
| Security review | registry/security-reviews/07-customer-support-success--sup-customer-insights.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Removed the slash-command usage block, the CONNECTORS.md pointer and the connector search tiers (knowledge base, cloud storage, CRM, support platform, chat, email, calendar); research uses provided material, or public sources with the user's agreement.
- Kept source authority ranking, confidence levels, contradiction handling and escalate-versus-answer guidance, reworded and condensed.
- Added a themes mode that groups tickets by root cause with counts and recommended actions.
- Removed the offers to save findings into a knowledge base; added personal data minimization in quotes and examples.
- Added SkillOffice context fields, safety and handoff sections.

## Files not imported

- `customer-support/.mcp.json` and `customer-support/CONNECTORS.md` (service connectors).

## Attribution

Derived from anthropics/knowledge-work-plugins, licensed under the Apache License, Version 2.0 (full text in `registry/licenses/anthropics-knowledge-work-plugins.txt`). The upstream repository has no NOTICE file. This file was modified by SkillOffice as listed above.
