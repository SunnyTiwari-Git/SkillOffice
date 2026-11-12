# Provenance: data-sql

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | data/skills/write-query/SKILL.md, data/skills/sql-queries/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/15-data-analytics-ai--data-sql.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Merged write-query (workflow) and sql-queries (dialect reference) into one skill.
- Removed the data warehouse connector path, the offer to execute queries and the slash-command usage block. The skill writes queries; the user runs them.
- Added read-only by default: no write or DDL statements unless explicitly requested, then marked destructive with transaction and copy-first advice; LIMIT on exploratory queries.
- Added rules for safe division, complete periods, stated time zone, join row-count checks, minimal personal data and never placing credentials in queries.
- Condensed the per-dialect reference into a comparison table and kept four common patterns (running totals, deduplication, cohort retention, funnel) in `references/dialects.md`, rewritten.
- Added declared context, a quality checklist, a safety note and a handoff section.

## Files not imported

- `data/.mcp.json` and `data/CONNECTORS.md`: connector configuration, never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
