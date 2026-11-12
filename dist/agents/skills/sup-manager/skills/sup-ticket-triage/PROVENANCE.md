# Provenance: sup-ticket-triage

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream | https://github.com/anthropics/knowledge-work-plugins, path customer-support/skills/ticket-triage/SKILL.md, commit ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d, Apache-2.0 |
| Security review | registry/security-reviews/07-customer-support-success--sup-ticket-triage.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Removed the slash-command usage block, the CONNECTORS.md pointer and all connector lookups (support platform, knowledge base, project tracker); duplicate checks now use only material the user provides.
- Removed the offers to search tools and to package escalations through other commands; escalation now points to sup-escalation.
- Moved the category taxonomy, priority framework, routing table, duplicate check and reply templates to `references/triage-rules.md`, condensed and reworded.
- Made default SLA targets explicit as defaults, preferring `operations.policies`; added batch mode with pattern detection.
- Added rules: never change, assign or close tickets or send replies; no unapproved dates, refunds or credits in first replies; mask personal data; legal, safety and breach reports go to a human.
- Added SkillOffice context fields, safety and handoff sections.

## Files not imported

- `customer-support/.mcp.json` and `customer-support/CONNECTORS.md` (service connectors).
- `customer-support/.claude-plugin/` (plugin manifest).

## Attribution

Derived from anthropics/knowledge-work-plugins, licensed under the Apache License, Version 2.0 (full text in `registry/licenses/anthropics-knowledge-work-plugins.txt`). The upstream repository has no NOTICE file. This file was modified by SkillOffice as listed above.
