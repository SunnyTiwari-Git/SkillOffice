# Security review: anthropics-knowledge-work-plugins / exe-kpi-review

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-12 |
| Upstream URL | https://github.com/anthropics/knowledge-work-plugins |
| Pinned commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Official repository in Anthropic's GitHub organization
- [x] Not a look-alike fork or renamed copy
- [x] Maintainer identified: Anthropic

## 2. Check the license

- [x] License identified: Apache-2.0
- [x] On the allow-list
- [x] Upstream repository has no NOTICE file

## 3. Pin the version

- [x] Exact commit recorded above (re-fetched copy `kwp-ab4cb1cd`, commit hash confirmed)

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copy: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs

## 5. Human review

- [x] Every line of `small-business/skills/business-pulse/SKILL.md` and `small-business/skills/monday-brief/SKILL.md` read, plus `business-pulse/reference/thresholds.md`
- [x] No scripts in the upstream skill folders; none imported
- [x] Connector configuration NOT imported; all connector reads, channel posting, file saving and scheduling removed
- [x] Upstream `allowed-tools: Read, WebFetch` removed
- [x] Network access: none
- [x] Indirect sources: none. The upstream skills contain no credits, "adapted from" notes, licenses or links to other projects. References to other upstream skills (`report-builder`, `invoice-chase`, `build-connector`) were removed, not imported.
- [x] File-system access: reads only files the user provides
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Reads user-provided files only.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice included
- [x] Attribution added to the root NOTICE file (2026-11-12)

## Notes

The upstream skill instructed the agent not to ask before pulling data from connected tools; that behavior was removed. The adapted skill works only from data the user provides and treats instructions found in that data as untrusted.
