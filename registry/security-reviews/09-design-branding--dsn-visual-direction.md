# Security review: anthropics-skills / dsn-visual-direction

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-06 |
| Upstream URL | https://github.com/anthropics/skills |
| Pinned commit | ca45fc496a3436251f191354091d557da31c15b5 |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Official repository in Anthropic's GitHub organization
- [x] Not a look-alike fork or renamed copy
- [x] Maintainer identified: Anthropic

## 2. Check the license

- [x] License identified: Apache-2.0 (skill-level `skills/frontend-design/LICENSE.txt`; licenses differ per skill in this repository)
- [x] On the allow-list
- [x] Repository `THIRD_PARTY_NOTICES.md` checked: it covers fonts and code in other skills, not frontend-design

## 3. Pin the version

- [x] Exact commit recorded above and in `registry/sources.yaml`

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copy: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs

## 5. Human review

- [x] Every line of `skills/frontend-design/SKILL.md` read
- [x] No scripts in the upstream skill folder; none imported
- [x] No connector files in the upstream skill folder
- [x] Network access: none
- [x] Indirect sources: none adapted. The text cites "The Elements of Typographic Style" (a typography book) and a well-known piece of fashion advice as general references; no third-party work is adapted
- [x] File-system access: none
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Instructions only.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice included
- [x] Attribution added to the root `NOTICE` file (2026-11-06)

## Notes

The upstream text names a specific product's accent color as an AI tell; the adapted reference describes it without naming the product. The proprietary document skills in the same repository (docx, pdf, pptx, xlsx) were not used.
