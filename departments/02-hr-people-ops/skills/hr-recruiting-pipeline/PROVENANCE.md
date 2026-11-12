# Provenance: hr-recruiting-pipeline

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | human-resources/skills/recruiting-pipeline/SKILL.md; small-business/skills/hiring-screener/ (SKILL.md, reference/fair_screening.md, reference/rubric.md, reference/candidate_comms.md) |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/02-hr-people-ops--hr-recruiting-pipeline.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Merged the pipeline stages and metrics from recruiting-pipeline with the rubric-based screening method from hiring-screener.
- Replaced the ranked shortlist with bands by candidate code, so no candidate is ranked by name, and made explicit that a person makes every decision.
- Removed the Gmail, Google Calendar, Drive, Microsoft 365, Trello, DocuSign and Gusto connector steps, interview scheduling, sending replies, the payroll handoff, the HTML artifact, and the upstream `allowed-tools: Read, WebFetch` pre-approval. Onboarding moved to `hr-onboarding`.
- Extended the off-limits list with caste, religion, marital and family status, pregnancy and health, and condensed the fairness method into references/fair-screening.md in SkillOffice wording.
- Added: the not-legal-or-employment-advice notice, candidate codes instead of names in outputs and memory, no automated decisions, application text treated as data, the managed-run section and the handoff.

## Files not imported

- small-business/skills/hiring-screener/reference/onboarding.md and gotchas.md; small-business/skills/payroll-prep/ (payroll is out of scope for this department and routes to finance).

## Attribution

Portions of this skill are adapted from anthropics/knowledge-work-plugins.

Licensed under the Apache License, Version 2.0 (the "License"). The upstream repository has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.
