# Provenance: mkt-performance-report

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | marketing/skills/performance-report/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/06-marketing-content-pr--mkt-performance-report.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Rewrote in SkillOffice format as a numbered process; body about 80 lines.
- Data now always comes from the user (pasted numbers or exports). Removed instructions to pull data automatically through marketing or product analytics connectors.
- Moved metric definitions, benchmarks, cadences, attribution and optimization levers into `references/metrics-guide.md`, condensed, with a note that email open rates are affected by mail privacy features.
- Added a data-check step, matching-window rule, labeled hypotheses, ranges for forecasts, regional currency and date handling, a personal-data rule and a handoff section.
- Removed connector placeholders and the link to the upstream connectors file.

## Files not imported

- `marketing/.mcp.json`: connector configuration (Slack, Canva, Figma, HubSpot, Amplitude and others), never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
