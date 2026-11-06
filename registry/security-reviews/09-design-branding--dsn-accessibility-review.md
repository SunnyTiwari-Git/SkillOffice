# Security review: anthropics-knowledge-work-plugins / dsn-accessibility-review

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

- [x] Exact commit recorded above and in `registry/sources.yaml`

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copy: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs

## 5. Human review

- [x] Every line of `design/skills/accessibility-review/SKILL.md` read
- [x] No scripts in the upstream skill folder; none imported
- [x] Connector file `design/.mcp.json` and `design/CONNECTORS.md` NOT imported; Figma and project-tracker connector instructions removed
- [x] Network access: none
- [x] Indirect sources: none adapted. The WCAG reference summarizes the W3C standard in our own words and links to the official text; no W3C text copied
- [x] File-system access: reads page code, components or screenshots the user provides
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: medium. Reads local files; read-only review.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice included
- [x] Attribution added to the root `NOTICE` file (2026-11-06)

## Notes

Content correction: the upstream listed 2.5.5 Target Size (44 by 44) under AA; 2.5.5 is level AAA. The adapted skill uses WCAG 2.2 AA 2.5.8 (24 by 24). The skill must never claim legal compliance. No suspicious content found.
