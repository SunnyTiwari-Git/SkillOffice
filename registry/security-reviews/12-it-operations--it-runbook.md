# Security review: anthropics-knowledge-work-plugins / it-runbook

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

- [x] Every line of `operations/skills/runbook/SKILL.md` read
- [x] No scripts in the upstream skill folder; none imported
- [x] Connector files `operations/.mcp.json` and `operations/CONNECTORS.md` NOT imported
- [x] Network access: none
- [x] Indirect sources: none. The upstream skill contains no credits, "adapted from" notes, licenses or links to other projects.
- [x] File-system access: reads only files the user provides
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Reads user-provided notes only and drafts a document.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice included
- [x] Attribution added to the root NOTICE file (2026-11-13)

## Notes

The upstream connector actions that searched and published to a knowledge base and auto-filled on-call contacts from an ITSM tool were removed, as were the slash-command block and the `argument-hint` field. The adapted skill adds identity verification before credential changes, forbids secrets in runbooks, and requires confirmation and data preservation before destructive steps.
