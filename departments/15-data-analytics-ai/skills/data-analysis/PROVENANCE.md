# Provenance: data-analysis

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | data/skills/analyze/SKILL.md, data/skills/statistical-analysis/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/15-data-analytics-ai--data-analysis.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Merged analyze (workflow) and statistical-analysis (methods) into one skill with eight numbered steps.
- Removed the warehouse connector path (query, execute, retry) and the slash-command usage block. The skill uses data the user provides; queries come from `data-sql`.
- Added explicit rules: never invent numbers, state sample sizes, give ranges, check conclusions within segments, name alternative explanations.
- Condensed the statistics material (center and spread, growth, forecasting, outliers, test selection, sample size, traps) into `references/statistics.md`; Python snippets removed and replaced with plain descriptions.
- Currency, date format and time zone come from the SkillOffice context profile.
- Added a quality checklist, a safety note (aggregates only, no individual rows) and a handoff section.

## Files not imported

- `data/.mcp.json` and `data/CONNECTORS.md`: connector configuration, never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
