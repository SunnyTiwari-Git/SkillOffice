# Provenance: data-explore

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | data/skills/explore-data/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/15-data-analytics-ai--data-explore.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Rewrote in SkillOffice format as six numbered steps; body about 70 lines.
- Removed the data warehouse connector path and the slash-command usage block. The skill works from files, exports or query results the user provides; queries for the user to run go through `data-sql`.
- Added personal data handling: flag personal data columns, show counts only, never raw values; regulated data flagged by jurisdiction.
- Moved column classes, completeness thresholds, red flags, distribution shapes and time series checks into `references/profiling-guide.md`, condensed and reworded.
- Dropped the schema documentation template (now part of `data-dictionary`) and the schema exploration SQL (now part of `data-sql`).
- Added declared context, a quality checklist, a safety note and a handoff section.

## Files not imported

- `data/.mcp.json` and `data/CONNECTORS.md`: connector configuration, never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
