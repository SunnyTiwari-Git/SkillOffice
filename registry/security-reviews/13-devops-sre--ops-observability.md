# Security review: wshobson-agents / ops-observability

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/wshobson/agents (plugins/observability-monitoring/skills/prometheus-configuration, grafana-dashboards, distributed-tracing) |
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

- [x] `skilloffice scan` run on the downloaded copy: no findings in the files used
- [ ] Cisco skill-scanner run in local-only mode, if available: not run (not installed)
- [x] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of the upstream SKILL.md files used was read; references were skimmed and rewritten in our own words
- [x] Scripts: none in these skills
- [x] MCP or connector files: none imported
- [x] Network access: none by the skill; live monitoring queries only with approval
- [x] File-system access: reads the project; writes monitoring configuration in the user's project only
- [x] External dependencies: none
- [x] Indirect sources: none found

## 6. Risk label

Chosen label and reason: medium. Instructions only; writes configuration files. Upstream suggested adding user IDs as trace tags; the adapted skill forbids personal data and secrets in labels, span attributes and logs. No pre-approved tools.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-07)

## Notes

Re-check on the next upstream update: compare the pinned commit with the new one and repeat steps 4 and 5.
