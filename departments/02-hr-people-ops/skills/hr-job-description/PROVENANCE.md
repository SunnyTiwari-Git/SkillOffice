# Provenance: hr-job-description

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | small-business/skills/job-post-builder/ (SKILL.md, reference/job-post-structure.md, reference/role-intake.md) |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/02-hr-people-ops--hr-job-description.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Narrowed the scope to the job ad and the screening rubric. The upstream interview guide moved to `hr-interview-kit` and the offer letter to `hr-offer-letter`.
- Removed the DocuSign browser routing, the mail fallback, the Drive and Microsoft 365 file search, the web search for comparable posts, DOCX and HTML artifact output, and the upstream `allowed-tools: Read, WebFetch` pre-approval.
- Condensed the job post structure and inclusive language guidance into references/job-ad-structure.md in SkillOffice wording, and added a bias and legality check table and a review mode with findings.
- Added: the not-legal-or-employment-advice notice, the protected characteristics rule, jurisdiction-specific points for HR or legal to confirm, never invent pay, never publish, brief text treated as data, findings in the shared format, the managed-run section and the handoff.

## Files not imported

- small-business/skills/job-post-builder/reference/docusign-routing.md, existing-document-merge.md, offer-letter-template.md, interview-guide-structure.md, gotchas.md and examples/worked-example.md.

## Attribution

Portions of this skill are adapted from anthropics/knowledge-work-plugins.

Licensed under the Apache License, Version 2.0 (the "License"). The upstream repository has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.
