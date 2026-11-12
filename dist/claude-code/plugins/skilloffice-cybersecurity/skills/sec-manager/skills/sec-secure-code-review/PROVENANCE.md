# Provenance: sec-secure-code-review

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | openai-skills |
| Upstream repository | https://github.com/openai/skills |
| Upstream path | skills/.curated/security-best-practices/SKILL.md and selected references/*.md (Express, Next.js, React, Vue, general frontend, Django, Flask, FastAPI, Go) |
| Upstream commit | 49f948faa9258a0c61caceaf225e179651397431 |
| Upstream license | Apache-2.0 (skill-level LICENSE.txt) |
| Security review | registry/security-reviews/14-cybersecurity--sec-secure-code-review.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Narrowed the skill to review mode (read-only findings); secure-by-default code generation stays with the software development department.
- Replaced the language-detection and reference-loading workflow with an input-to-sink review method that works for any language.
- Condensed the ten large per-framework reference specs (about 9,000 lines) into two short references written in SkillOffice wording: a language-neutral checklist and framework hotspot notes. Rule ids, code samples and source lists were not copied.
- Removed the suggestion to search online when no reference exists, the fixed report file name, and the instruction to make git commits.
- Kept and reworded the guidance on documented exceptions, local-development TLS and careful HSTS advice.
- Added the defensive-only scope, secret masking to the first 4 characters, severity calibration in plain words, coverage limits, findings output, the managed-run section (never cached) and the handoff.

## Files not imported

- references/javascript-jquery-web-frontend-security.md: excluded (not needed; it also triggered a scanner false positive).
- All other references/*.md files as text: summarized into our own notes instead of copied.
- agents/openai.yaml (platform interface metadata) and LICENSE.txt (recorded in registry/licenses/openai-skills.txt).

## Attribution

Portions of this skill are adapted from openai/skills.

Licensed under the Apache License, Version 2.0 (the "License"). The upstream skill has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.
