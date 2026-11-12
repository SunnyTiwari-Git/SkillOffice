# Security review: anthropics-knowledge-work-plugins / legal-vendor-terms-check

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-12 |
| Upstream URL | https://github.com/anthropics/knowledge-work-plugins (legal/skills/vendor-check/) |
| Pinned commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Repository is the official one: https://github.com/anthropics/knowledge-work-plugins
- [x] Not a look-alike fork or renamed copy (fetched directly from the owner's GitHub account at the pinned commit)
- [x] Maintainer identified: Anthropic

## 2. Check the license

- [x] License identified: Apache-2.0
- [x] On the allow-list (MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC)
- [x] No CC-BY, share-alike, proprietary or unlicensed material used

## 3. Pin the version

- [x] Exact commit recorded above and in the skill's `skill.yaml` and `PROVENANCE.md`

## 4. Static scan (no execution)

- [x] `skilloffice scan` run on the downloaded copy (re-fetched at the pinned commit into a fresh folder on 2026-11-12): no findings
- [ ] Cisco skill-scanner run in local-only mode, if available: not run (not installed)
- [x] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of the upstream SKILL.md read
- [x] Scripts: none
- [x] MCP or connector files: not imported. The upstream skill was built around searching CLM, CRM, email, document storage and chat; all of those searches were removed
- [x] Network access: none; the skill works only from documents the user provides
- [x] File-system access: read-only
- [x] External dependencies: none
- [x] Indirect sources: none credited in the upstream file

## 6. Risk label

Chosen label and reason: low. Read-only, no scripts, no network, no connector searches, no file changes.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-12)

## Notes

Vendor contact details and contract text are kept out of memory. Re-check on the next upstream update.
