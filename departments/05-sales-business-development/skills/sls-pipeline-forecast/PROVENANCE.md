# Provenance: sls-pipeline-forecast

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream paths | sales/skills/pipeline-review/SKILL.md; sales/skills/forecast/SKILL.md; sales/skills/deal-slip-scenario/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/05-sales-business-development--sls-pipeline-forecast.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Merged pipeline-review, forecast and deal-slip-scenario into one review skill with three modes.
- Works only from exports the user provides; removed the shared connector rules block, connector tiers, live CRM queries and forecast-category writes.
- Output now uses the SkillOffice findings format for at-risk deals.
- Kept the stage rollup, risk flags, 3 times coverage heuristic, bucket mapping, the "never assume won" rule, export-date anchoring and the backfill realism bar.
- Added SkillOffice context fields, privacy, safety and handoff sections.

## Files not imported

- `sales/.mcp.json` and `sales/CONNECTORS.md` (service connectors).

## Attribution

Derived from anthropics/knowledge-work-plugins (from Anthropic), licensed under the Apache License, Version 2.0. The full license text is in `registry/licenses/anthropics-knowledge-work-plugins.txt`. The upstream repository has no NOTICE file. This file has been modified from the original as listed above.
