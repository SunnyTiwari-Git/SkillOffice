# Security review: anthropics-knowledge-work-plugins / ops-deploy-verification

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/anthropics/knowledge-work-plugins (engineering/skills/deploy-checklist/SKILL.md) |
| Pinned commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Repository is the official one: https://github.com/anthropics/knowledge-work-plugins
- [x] Not a look-alike fork or renamed copy (cloned directly from the owner's GitHub account)
- [x] Maintainer identified: Anthropic

## 2. Check the license

- [x] License identified: Apache-2.0
- [x] On the allow-list (MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC)
- [x] No CC-BY, share-alike, proprietary or unlicensed material used

## 3. Pin the version

- [x] Exact commit recorded above and in the skill's `skill.yaml` and `PROVENANCE.md`

## 4. Static scan (no execution)

- [x] `skilloffice scan` run on the downloaded copy: no findings in the files used
- [ ] Cisco skill-scanner run in local-only mode, if available: not run (not installed)
- [x] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of the upstream SKILL.md was read
- [x] Scripts: none in this skill
- [x] MCP or connector files: `engineering/.mcp.json` and `CONNECTORS.md` not imported; connector instructions removed
- [x] Network access: none
- [x] File-system access: reads evidence the user provides; writes nothing (or the checklist if asked)
- [x] External dependencies: none
- [x] Indirect sources: none found

## 6. Risk label

Chosen label and reason: low. Read-only verification that recommends go or no-go; never deploys, merges, approves gates or changes flags; always runs fresh and is never cached. No pre-approved tools.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-07)

## Notes

Re-check on the next upstream update: compare the pinned commit with the new one and repeat steps 4 and 5.
