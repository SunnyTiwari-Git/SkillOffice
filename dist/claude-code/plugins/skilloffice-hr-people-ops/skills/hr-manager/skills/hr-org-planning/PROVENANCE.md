# Provenance: hr-org-planning

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | human-resources/skills/org-planning/SKILL.md; human-resources/skills/people-report/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/02-hr-people-ops--hr-org-planning.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Merged org-planning (headcount, structure, sequencing, budget) and people-report (headcount, attrition, org health reports) into one skill with plan and report modes.
- Kept the structure benchmarks as rules of thumb for discussion (references/org-metrics.md) and added formulas with a worked example, in SkillOffice wording.
- Removed per-person "flight risk" assessment and named employees in reports; reports are aggregate with codes and suppression of groups under five people. Diversity metrics only on request with lawfully collected data.
- Removed revenue-per-employee productivity metrics and engagement survey items not supported by the user's data, the HRIS and chat connector steps (including sharing reports to channels), the CONNECTORS.md pointer and the slash-command usage block.
- Added: the not-legal-or-employment-advice notice, routing of any job reductions to HR and legal, never invent costs, the protected characteristics rule, the managed-run section and the handoff.

## Files not imported

- human-resources/CONNECTORS.md and the plugin's .mcp.json.

## Attribution

Portions of this skill are adapted from anthropics/knowledge-work-plugins.

Licensed under the Apache License, Version 2.0 (the "License"). The upstream repository has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.
