# Security review: wshobson-agents / ops-cloud-cost-review

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/wshobson/agents (plugins/cloud-infrastructure/skills/cost-optimization) |
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

- [x] `skilloffice scan` run on the downloaded copy: no findings in the files used
- [ ] Cisco skill-scanner run in local-only mode, if available: not run (not installed)
- [x] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of the upstream SKILL.md and references/tagging-standards.md was read
- [x] Scripts: none in this skill
- [x] MCP or connector files: none imported
- [x] Network access: none
- [x] File-system access: reads cost exports and code the user provides; writes nothing
- [x] External dependencies: none
- [x] Indirect sources: none found

## 6. Risk label

Chosen label and reason: low. Read-only review; never stops, deletes, resizes, tags or buys anything. Removed fixed discount percentages that go stale. Billing data is summarized, not copied into reports or memory. No pre-approved tools.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-07)

## Notes

Re-check on the next upstream update: compare the pinned commit with the new one and repeat steps 4 and 5.
