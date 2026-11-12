# Security review: anthropics-knowledge-work-plugins / biz-status-report

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-13 |
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

- [x] Exact commit recorded above (verified copy `kwp-ab4cb1cd`)

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded `operations/skills` folder: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs

## 5. Human review

- [x] Every line of `operations/skills/status-report/SKILL.md` read
- [x] No scripts in the upstream skill folder; none imported
- [x] Connector files `operations/.mcp.json` and `operations/CONNECTORS.md` NOT imported
- [x] Network access: none
- [x] Indirect sources: none. The upstream skill refers only to another skill in the same repository (risk-assessment); it credits no other project.
- [x] File-system access: reads only files the user provides
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Reads user-provided files only and drafts text.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice included
- [x] Attribution added to the root NOTICE file (2026-11-13)

## Notes

The upstream offer to post the report to a chat channel was removed; the adapted skill only drafts. Client-facing date changes require human approval.
