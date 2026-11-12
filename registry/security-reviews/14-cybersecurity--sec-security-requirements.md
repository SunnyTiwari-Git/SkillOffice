# Security review: wshobson-agents / sec-security-requirements

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/wshobson/agents (plugins/security-scanning/skills/security-requirement-extraction/) |
| Pinned commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Repository is the official one: https://github.com/wshobson/agents
- [x] Not a look-alike fork or renamed copy (cloned directly from the owner's GitHub account)
- [x] Maintainer identified: Seth Hobson

## 2. Check the license

- [x] License identified: MIT
- [x] On the allow-list (MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC)
- [x] No CC-BY, share-alike, proprietary or unlicensed material used

## 3. Pin the version

- [x] Exact commit recorded above and in the skill's `skill.yaml` and `PROVENANCE.md`

## 4. Static scan (no execution)

- [x] `skilloffice scan` run on the downloaded copy: no findings
- [ ] Cisco skill-scanner run in local-only mode, if available: not run (not installed)
- [x] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of the upstream SKILL.md read; references/details.md read (Python code templates)
- [x] Scripts: none in the upstream skill; the Python templates are documentation and were not imported
- [x] MCP or connector files: none
- [x] Network access: none
- [x] File-system access: none (instructions only)
- [x] External dependencies: none
- [x] Indirect sources: none found; the upstream skill credits no other project

## 6. Risk label

Chosen label and reason: low. Instructions only, reads documents, no scripts, no network, no file changes. No pre-approved tools.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder, with the full MIT notice
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-07)

## Notes

The upstream compliance mapping table of specific control numbers was not copied; the skill now asks the agent to confirm current framework versions and to mark compliance conclusions for legal. Re-check on the next upstream update.
