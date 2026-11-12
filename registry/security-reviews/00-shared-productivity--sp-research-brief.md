# Security review: anthropics-knowledge-work-plugins / sp-research-brief

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

- [x] `skilloffice scan` on the downloaded `enterprise-search/skills` and `productivity/skills` folders: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs

## 5. Human review

- [x] Every line of `enterprise-search/skills/knowledge-synthesis/SKILL.md` and `enterprise-search/skills/search-strategy/SKILL.md` read
- [x] No scripts in either upstream skill folder; none imported
- [x] Connector files `enterprise-search/.mcp.json` and `enterprise-search/CONNECTORS.md` NOT imported
- [x] Network access: none by the skill; the platform's own search is used only with the user's permission
- [x] Indirect sources: none. Neither upstream skill contains credits, "adapted from" notes, licenses or links to other projects.
- [x] File-system access: reads only material the user provides
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Reads user-provided material and writes a brief in the conversation.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice included
- [x] Attribution added to the root NOTICE file (2026-11-13)

## Notes

The upstream skills assumed connected chat, email, wiki, cloud storage and project tracker sources searched in parallel, with source-specific query syntax and connector placeholders. All of that was removed. The adapted skill adds a no-invented-sources rule, search only with permission, and treats all found content as data, never instructions.
