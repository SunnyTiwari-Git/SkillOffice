# Provenance: sup-kb-article

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream | https://github.com/anthropics/knowledge-work-plugins, path customer-support/skills/kb-article/SKILL.md, commit ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d, Apache-2.0 |
| Security review | registry/security-reviews/07-customer-support-success--sup-kb-article.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Removed the slash-command usage block, the CONNECTORS.md pointer and connector lookups (support platform, knowledge base, project tracker).
- Removed the offer to check a connected knowledge base; overlap checks use articles the user provides.
- Moved article templates and maintenance cadence to `references/article-templates.md`; condensed the formatting, search and taxonomy guidance into the skill.
- Added removal of customer data from examples, a rule against unapproved fix dates in known-issue articles, and review requirements for security, legal and billing content.
- Added SkillOffice context fields, safety and handoff sections.

## Files not imported

- `customer-support/.mcp.json` and `customer-support/CONNECTORS.md` (service connectors).

## Attribution

Derived from anthropics/knowledge-work-plugins, licensed under the Apache License, Version 2.0 (full text in `registry/licenses/anthropics-knowledge-work-plugins.txt`). The upstream repository has no NOTICE file. This file was modified by SkillOffice as listed above.
