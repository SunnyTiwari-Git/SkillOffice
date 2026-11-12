# Provenance: hr-performance-review

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | human-resources/skills/performance-review/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/02-hr-people-ops--hr-performance-review.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Kept the three modes (self-assessment, manager review, calibration) and the guidance to be specific, balanced and behavior-focused; condensed the templates into references/review-templates.md in SkillOffice wording.
- Removed the "Compensation Recommendation" section from the manager review and the "Compensation Actions" table from calibration: pay decisions stay with people and route to `hr-compensation-analysis`.
- Removed the fixed rating distribution targets (15 to 20 percent and similar); targets apply only if the company's own policy sets them.
- Calibration uses employee codes instead of names; removed the HRIS and project tracker connector steps, the CONNECTORS.md pointer and the slash-command usage block.
- Added: the not-legal-or-employment-advice notice, a bias and vagueness language check with findings, the protected characteristics rule, routing of disciplinary and complaint matters to HR and legal, no personal data in memory, the managed-run section and the handoff.

## Files not imported

- human-resources/CONNECTORS.md and the plugin's .mcp.json.

## Attribution

Portions of this skill are adapted from anthropics/knowledge-work-plugins.

Licensed under the Apache License, Version 2.0 (the "License"). The upstream repository has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.
