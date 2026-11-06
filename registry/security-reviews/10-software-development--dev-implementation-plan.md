# Security review: obra-superpowers / dev-implementation-plan

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-06 |
| Upstream URL | https://github.com/obra/superpowers (skills/writing-plans/SKILL.md, skills/executing-plans/SKILL.md) |
| Pinned commit | obra-superpowers: 22f0b463e7a5e579904dd6211a520321035526f7 |
| Decision | Approved with changes |
| Risk label | medium |

## 1. Verify the source

- [x] Repository is the official one: https://github.com/obra/superpowers
- [x] Not a look-alike fork or renamed copy (cloned directly from the owner's GitHub account)
- [x] Maintainer identified: Jesse Vincent (obra)

## 2. Check the license

- [x] License identified: MIT
- [x] On the allow-list (MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC)
- [x] No CC-BY, share-alike, proprietary or unlicensed material used

## 3. Pin the version

- [x] Exact commit recorded above and in the skill's `skill.yaml` and `PROVENANCE.md`

## 4. Static scan (no execution)

- [x] `skilloffice scan` run on the downloaded copy: no findings in the files used, except one high `credential-access` finding in superpowers `skills/systematic-debugging/SKILL.md:98` (an example running `security list-keychains` and `security find-identity`). Not imported; replaced with a neutral example.
- [ ] Cisco skill-scanner run in local-only mode, if available: not run (not installed)
- [x] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of the upstream Markdown used was read
- [x] Scripts: none imported. Removed or not imported: superpowers `skills/brainstorming/scripts/` (start-server.sh, stop-server.sh, helper.js, server.cjs, frame-template.html), `skills/executing-plans/scripts/` (task-start, task-done), `skills/systematic-debugging/find-polluter.sh` and `condition-based-waiting-example.ts`. They were read where relevant to this skill and judged not malicious, but unnecessary.
- [x] MCP or connector files: Anthropic `engineering/.mcp.json` and `CONNECTORS.md` not imported. Superpowers `hooks/` folder not imported.
- [x] Network access: none
- [x] File-system access: reads the user's project; writes code, tests or documents in the user's project only
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: medium. Instructions only, no scripts, no network; the skill reads and writes files in the user's project and may run the project's own commands through the platform's normal permission prompts. No pre-approved tools (`allowed-tools` not set).

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-06)

## Notes

Removed or not imported:
- skills/executing-plans/scripts/task-start and task-done: shell helpers that call another skill's scripts; replaced by instructions.
- References to subagent-driven-development scripts (sdd-workspace, review-package): not part of this skill.

Re-check on the next upstream update: compare the pinned commit with the new one and repeat steps 4 and 5.
