# Security review: anthropics-knowledge-work-plugins / hr-interview-kit

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-12 |
| Upstream URL | https://github.com/anthropics/knowledge-work-plugins (human-resources/skills/interview-prep/, small-business/skills/job-post-builder/) |
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

- [x] `skilloffice scan` run on the downloaded copy (re-fetched at the pinned commit into scratchpad/upstream/kwp-ab4cb1cd and verified): no findings
- [ ] Cisco skill-scanner run in local-only mode, if available: not run (not installed)
- [x] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of the upstream interview-prep SKILL.md and of the job-post-builder interview guide phase read
- [x] Scripts: none in the upstream skills
- [x] MCP or connector files: none imported
- [x] Network access: none
- [x] File-system access: reads role details the user provides; DOCX output removed
- [x] External dependencies: none
- [x] Indirect sources: none. The upstream files credit no other project.

## 6. Risk label

Chosen label and reason: low. Instructions only, no scripts, no network, no file changes, no pre-approved tools. Lawful-questions reference and protected characteristics rule added.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-12)

## Notes

Interview questions are checked against a lawful-questions reference; jurisdiction-specific rules are flagged for HR or legal. Re-check on the next upstream update.
