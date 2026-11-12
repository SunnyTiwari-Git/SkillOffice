# Provenance: proc-vendor-evaluation

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | operations/skills/vendor-review/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/17-procurement-vendor-management--proc-vendor-evaluation.md |
| Imported on | 2026-11-13 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-13:

- Kept the total cost of ownership items, risk areas, performance areas, comparison matrix, recommendation (proceed, negotiate, pass) and negotiation points, rewritten in our own words.
- Added a must-have pass or fail gate, weighted scoring with weights confirmed before scoring, evidence-based reasons, unverified-claim marking, a sensitivity check and the approval needed for the value.
- Required all vendors to be compared over the same period and currency with the arithmetic and assumptions shown, and banned filling in missing prices.
- Removed the connector section (knowledge base, procurement system), the slash-command usage block, the `argument-hint` frontmatter field and the reference to CONNECTORS.md.
- Moved the layout into `references/evaluation-template.md` and added a handoff section.

## Files not imported

- `operations/.mcp.json` and `operations/CONNECTORS.md`: connector configuration, never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
