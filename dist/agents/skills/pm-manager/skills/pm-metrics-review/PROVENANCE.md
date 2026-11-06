# Provenance: pm-metrics-review

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | product-management/skills/metrics-review/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/08-product-management--pm-metrics-review.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Rewrote in SkillOffice format as a numbered review process; body about 80 lines.
- Removed the product analytics connector step and the slash-command usage block. The skill works only from data the user provides and never invents numbers.
- Added a data-check step and metric-health findings in the SkillOffice findings format with severity guidance; recommendations link to finding ids.
- Moved the metrics hierarchy, metric definitions, goal-setting, review cadences, dashboard and alerting guidance into `references/metrics-guide.md`, condensed.
- Business model, currency, date and time zone come from the SkillOffice context profile.
- Added a quality checklist, a safety note and a handoff section.

## Files not imported

- `product-management/.mcp.json`: connector configuration, never imported.
- `product-management/CONNECTORS.md` and `product-management/commands/`: not needed.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
