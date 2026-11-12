# Provenance: exe-kpi-review

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | small-business/skills/business-pulse/SKILL.md and small-business/skills/monday-brief/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/01-executive-strategy--exe-kpi-review.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Merged business-pulse and monday-brief into one review skill that works only from data the user provides, and reports in the shared findings format.
- Removed every connector step (ledgers, payment processors, CRM, calendar, mail, chat, e-signature, ads and expense tools), the parallel connector dispatch and the instruction not to ask before pulling data.
- Removed HTML, DOCX, Notion and Canva output, file saving, channel posting, scheduling, slash-command arguments and offers to run other upstream skills.
- Removed upstream `allowed-tools: Read, WebFetch`.
- Kept the core ideas: numbers lead with a comparison, risks name a record and a next step, missing data is "n/a", and the brief closes with one thing to act on.
- Rewrote the red, amber and green thresholds in our own words as editable defaults in `references/thresholds.md`, and changed the stale-deal default from 7 to 14 days.
- Added the untrusted-content rule, privacy handling and a handoff section.

## Files not imported

- `small-business/skills/business-pulse/reference/` (data source mapping, gotchas, output template, v2 sources, thresholds): connector-specific; thresholds rewritten instead.
- `small-business/.mcp.json` and connector configuration: never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
