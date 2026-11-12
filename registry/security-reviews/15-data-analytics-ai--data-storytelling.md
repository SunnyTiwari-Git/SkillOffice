# Security review: wshobson-agents / data-storytelling

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/wshobson/agents |
| Pinned commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Official repository wshobson/agents
- [x] Not a look-alike fork or renamed copy
- [x] Maintainer identified: Seth Hobson

## 2. Check the license

- [x] License identified: MIT
- [x] On the allow-list
- [x] Upstream repository has no NOTICE file

## 3. Pin the version

- [x] Exact commit recorded above

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copy: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs

## 5. Human review

- [x] Every line of `data-storytelling/SKILL.md` and `references/details.md` read
- [x] No script files in the upstream skill folder; inline Python snippet not imported
- [x] No connector files in this plugin
- [x] Network access: none
- [x] Indirect sources: none. The upstream skill contains no credits, "adapted from" notes, licenses or links to other projects.
- [x] File-system access: reads only the analysis the user provides
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Reads user-provided material only; produces drafts.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, full MIT text included
- [x] Attribution added to the root NOTICE file (2026-11-07)

## Notes

No suspicious content found. Upstream examples used illustrative figures; the adapted skill uses placeholders only and forbids numbers not present in the user's analysis.
