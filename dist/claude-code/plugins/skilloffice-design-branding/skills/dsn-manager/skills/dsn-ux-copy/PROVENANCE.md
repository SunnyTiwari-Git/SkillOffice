# Provenance: dsn-ux-copy

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | design/skills/ux-copy/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/09-design-branding--dsn-ux-copy.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Rewrote as write and review modes with numbered steps; review mode outputs findings in the SkillOffice format with rewrites.
- Combined the upstream copy patterns into one table and added form labels, success messages and consistent action naming through a flow.
- Voice comes from the SkillOffice brand profile (`brand.voice`, dos and don'ts); localization notes use `regional.output_language`.
- Added a safety rule against misleading copy about costs, consent, cancellation or data use.
- Removed the slash-command usage block, the connectors note and link, and the "if connectors available" section (knowledge base, Figma).
- Added quality checklist, safety and handoff sections.

Modified by SkillOffice on 2026-11-17 (version 0.2.0): added an "Ask first" section (original SkillOffice content).

## Files not imported

- `design/.mcp.json`: connector configuration, never imported.
- `design/CONNECTORS.md`: not needed.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
