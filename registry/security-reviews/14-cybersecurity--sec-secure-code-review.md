# Security review: openai-skills / sec-secure-code-review

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/openai/skills (skills/.curated/security-best-practices/) |
| Pinned commit | 49f948faa9258a0c61caceaf225e179651397431 |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Repository is the official one: https://github.com/openai/skills
- [x] Not a look-alike fork or renamed copy (cloned directly from the owner's GitHub account)
- [x] Maintainer identified: OpenAI

## 2. Check the license

- [x] License identified: Apache-2.0 (skill-level LICENSE.txt)
- [x] On the allow-list (MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC)
- [x] No CC-BY, share-alike, proprietary or unlicensed material used

## 3. Pin the version

- [x] Exact commit recorded above and in the skill's `skill.yaml` and `PROVENANCE.md`

## 4. Static scan (no execution)

- [x] `skilloffice scan` run on the downloaded copy: one finding, a false positive in `references/javascript-jquery-web-frontend-security.md` line 504 (prose about security relevance); that file is excluded and not imported
- [ ] Cisco skill-scanner run in local-only mode, if available: not run (not installed)
- [x] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of the upstream SKILL.md read; the reference specs for the selected stacks read for structure and condensed into new text
- [x] Scripts: none in the upstream skill
- [x] MCP or connector files: none
- [x] Network access: removed the upstream suggestion to search online when no reference matches
- [x] File-system access: read-only review; removed the fixed report file name and git commit instructions
- [x] External dependencies: none
- [x] Indirect sources: the upstream reference files cite public documentation (OWASP Cheat Sheet Series, Express, Node.js, MDN, framework docs, NVD) as sources. These are citations, not adapted works, and none of their text was copied into SkillOffice; our references are written in our own words. No NOTICE entry needed.

## 6. Risk label

Chosen label and reason: low. Read-only review instructions, no scripts, no network, no file changes. No pre-approved tools. Defensive-only scope and secret masking added.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-07)

## Notes

Excluded: `references/javascript-jquery-web-frontend-security.md` (not needed, scanner false positive). Not imported as text: the other per-framework reference specs (summarized instead), `agents/openai.yaml`. Re-check on the next upstream update.
