# Security review: anthropics-knowledge-work-plugins / data-visualization

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/anthropics/knowledge-work-plugins |
| Pinned commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Decision | Approved with changes |
| Risk label | medium |

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

- [x] Every line of `data/skills/create-viz/SKILL.md` and `data/skills/data-visualization/SKILL.md` read
- [x] No script files in the upstream skill folders; inline Python templates not imported
- [x] Connector file `data/.mcp.json` NOT imported; `CONNECTORS.md` not imported; warehouse query path removed
- [x] Network access: none
- [x] Indirect sources: none. The upstream skills name colorblind simulator tools as examples but contain no credits, "adapted from" notes, licenses or links to other projects; the tool mentions were not carried over.
- [x] File-system access: reads user data; writes chart files in the user's project only, never overwriting without asking
- [x] External dependencies: none required

## 6. Risk label

Chosen label and reason: medium. May write chart image or code files in the user's project.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice included
- [x] Attribution added to the root NOTICE file (2026-11-07)

## Notes

No suspicious content found.
