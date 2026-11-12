# Security review: wshobson-agents / sec-sast-setup

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/wshobson/agents (plugins/security-scanning/skills/sast-configuration/) |
| Pinned commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Decision | Approved with changes |
| Risk label | medium |

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

- [x] Every line of the upstream SKILL.md (197 lines) read
- [x] Scripts: none in the upstream skill
- [x] MCP or connector files: none
- [x] Network access: the upstream quick-start commands install packages and start a Docker server with host bootstrap checks disabled; these ready-to-run commands were removed and tool installs now need the user's approval
- [x] File-system access: writes configuration and CI files in the user's project, only after approval
- [x] External dependencies: scanners chosen by the user; no dependency is added by the skill itself
- [x] Indirect sources: none found; the upstream skill credits no other project

## 6. Risk label

Chosen label and reason: medium. The skill writes configuration and CI files in the user's project (after approval). Scans run only through the platform's normal permission prompts. No pre-approved tools.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder, with the full MIT notice
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-07)

## Notes

Not imported: plugin manifests, agents and commands (including commands/security-sast.md). Re-check on the next upstream update.
