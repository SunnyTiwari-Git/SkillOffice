# Security review: anthropics-knowledge-work-plugins / pm-roadmap

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-06 |
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

- [x] Exact commit recorded above

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copy: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs

## 5. Human review

- [x] Every line of `product-management/skills/roadmap-update/SKILL.md` read
- [x] No scripts in the upstream skill folder; none imported
- [x] Connector file `product-management/.mcp.json` NOT imported; `CONNECTORS.md` and `commands/` not imported; connector placeholders removed
- [x] Network access: none
- [x] Indirect sources: none. The upstream skill contains no credits, "adapted from" notes, licenses or links to other projects.
- [x] File-system access: none beyond reading files the user provides
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Instructions only.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice included
- [x] Attribution added to the root `NOTICE` file (2026-11-06)

## Notes

No suspicious content found. Connector placeholders and the slash-command usage block were removed. Removed the offer to update ticket statuses in a project tracker. Customer-facing versions need the user's approval.
