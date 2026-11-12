# Security review: anthropics-knowledge-work-plugins / sup-customer-insights

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | customer-support/skills/customer-research/SKILL.md |
| Pinned commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Official repository of Anthropic
- [x] Not a look-alike fork or renamed copy
- [x] Maintainer identified: Anthropic

## 2. Check the license

- [x] License identified: Apache-2.0; upstream has no NOTICE file
- [x] On the allow-list

## 3. Pin the version

- [x] Exact commit recorded above and in `registry/sources.yaml`

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copy: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of `customer-support/skills/customer-research/SKILL.md` read
- [x] No scripts in the upstream skill folder; none imported
- [x] Connector and tool-integration material not imported: `customer-support/.mcp.json`, `customer-support/CONNECTORS.md` and all connector lookups removed
- [x] Network access: none
- [x] Indirect sources: none found in the SKILL.md used
- [x] File-system access: reads files the user provides
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Instructions only; drafts and analysis for the user to review.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice included
- [x] Attribution added to the root `NOTICE` file (2026-11-07)

## Notes

Upstream skill could act through connected tools. SkillOffice removed all tool actions: the skill drafts and recommends only, and never sends, changes tickets or makes unapproved commitments.
