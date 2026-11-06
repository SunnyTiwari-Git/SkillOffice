# Provenance: dsn-design-handoff

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | design/skills/design-handoff/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/09-design-branding--dsn-design-handoff.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Rewrote the content list as numbered steps covering overview, layout, tokens, components, states, responsive behavior, content rules, edge cases, accessibility, implementation notes and open questions.
- Moved the output template into `references/handoff-template.md`, added content rules, permission and success states, and a reduced-motion line.
- Token references use the CSS variable names from `dsn-design-system`; implementation notes follow `technical.stack` from the SkillOffice context profile.
- Missing information is listed as open questions rather than invented.
- Added a rule against credentials or real customer data in examples.
- Removed the slash-command usage block, the Figma-pull instruction, the connectors note and link, and the "if connectors available" section (design tool, project tracker).
- Added quality checklist, safety and handoff sections.

## Files not imported

- `design/.mcp.json`: connector configuration, never imported.
- `design/CONNECTORS.md`: not needed.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
