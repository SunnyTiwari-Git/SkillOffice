# Provenance: data-visualization

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | data/skills/create-viz/SKILL.md, data/skills/data-visualization/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/15-data-analytics-ai--data-visualization.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Merged create-viz (workflow) and data-visualization (design reference) into one skill with six numbered steps.
- Removed the warehouse connector path, the slash-command usage block and the long Python code templates; the skill is tool-agnostic (Python, R, spreadsheets or BI tools) and describes what to build.
- Added rules: never overwrite existing files without asking, use only provided data, no individual people's details on charts, alt text and data table always included.
- Brand colors, typography, currency, date format and units come from the SkillOffice context profile.
- Condensed chart selection, color, accuracy, layout and accessibility guidance into `references/chart-guide.md`.
- Added declared context, a quality checklist, a safety note and a handoff section.

## Files not imported

- `data/.mcp.json` and `data/CONNECTORS.md`: connector configuration, never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
