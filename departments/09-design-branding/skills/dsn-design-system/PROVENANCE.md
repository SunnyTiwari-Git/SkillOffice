# Provenance: dsn-design-system

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | design/skills/design-system/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/09-design-branding--dsn-design-system.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Added a create mode alongside the upstream audit, document and extend modes, so the skill can build a system from a visual direction.
- Tokens are expressed as CSS variables in one global file; added `references/token-example.md` with a role-based token set, reduced-motion and dark-theme blocks.
- Audit results use the SkillOffice findings format instead of a scored table; repeated hardcoded values are grouped into one finding.
- Added WCAG 2.2 AA contrast checks for token pairs and keyboard behavior for every interactive component.
- Brand colors, typography and the technical stack come from the SkillOffice context profile.
- Removed the slash-command usage block, the connectors note and link, the "if connectors available" section (Figma, knowledge base), the numeric audit score and emoji status markers.
- Added quality checklist, safety and handoff sections.

Modified by SkillOffice on 2026-11-17 (version 0.2.0): added an "Ask first" section (original SkillOffice content).

## Files not imported

- `design/.mcp.json`: connector configuration, never imported.
- `design/CONNECTORS.md`: not needed.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
