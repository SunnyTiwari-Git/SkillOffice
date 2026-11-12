# Security review: wshobson-agents / ops-cicd-pipeline

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/wshobson/agents (plugins/cicd-automation/skills/deployment-pipeline-design, github-actions-templates, gitlab-ci-patterns) |
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

- [x] Every line of the upstream SKILL.md files used was read; reference files were read or skimmed and rewritten in our own words
- [x] Scripts: none in these skills
- [x] MCP or connector files: none imported
- [x] Network access: none by the skill; pipelines it writes run in the user's CI system
- [x] File-system access: reads the project; writes pipeline files in the user's project only
- [x] External dependencies: none
- [x] Indirect sources: none found (no credits, "adapted from" notes or links to other projects)

## 6. Risk label

Chosen label and reason: medium. Instructions only, no scripts or network; the skill writes pipeline files in the user's project. Upstream examples deployed to production with `kubectl apply` without a gate and used major-version action tags; the adapted skill gates production, pins versions and never triggers runs itself. No pre-approved tools (`allowed-tools` not set).

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-07)

## Notes

Re-check on the next upstream update: compare the pinned commit with the new one and repeat steps 4 and 5.
