# Security review: openai-skills + wshobson-agents / sec-threat-model

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/openai/skills (skills/.curated/security-threat-model/); https://github.com/wshobson/agents (plugins/security-scanning/skills/stride-analysis-patterns/, attack-tree-construction/) |
| Pinned commit | openai-skills 49f948faa9258a0c61caceaf225e179651397431; wshobson-agents 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Repositories are the official ones: https://github.com/openai/skills and https://github.com/wshobson/agents
- [x] Not look-alike forks or renamed copies (cloned directly from the owners' GitHub accounts)
- [x] Maintainers identified: OpenAI; Seth Hobson

## 2. Check the license

- [x] Licenses identified: Apache-2.0 (skill-level LICENSE.txt, openai) and MIT (wshobson)
- [x] On the allow-list (MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC)
- [x] No CC-BY, share-alike, proprietary or unlicensed material used

## 3. Pin the version

- [x] Exact commits recorded above and in the skill's `skill.yaml` and `PROVENANCE.md`

## 4. Static scan (no execution)

- [x] `skilloffice scan` run on the downloaded copy: no findings in the files used
- [ ] Cisco skill-scanner run in local-only mode, if available: not run (not installed)
- [x] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of the upstream SKILL.md files, prompt-template.md and security-controls-and-assets.md read; wshobson references/details.md read for structure (Python templates)
- [x] Scripts: none in the upstream skills
- [x] MCP or connector files: none
- [x] Network access: none
- [x] File-system access: reads the user's files; the upstream instruction to write a fixed-name output file was removed
- [x] External dependencies: none
- [x] Indirect sources: none found; the upstream skills credit no other project

## 6. Risk label

Chosen label and reason: low. Instructions only, reads files, no scripts, no network, no file changes. No pre-approved tools (`allowed-tools` not set). Defensive-only scope and secret masking added.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-07)

## Notes

Not imported: openai `agents/openai.yaml` (platform interface metadata), the wshobson Python code templates, plugin manifests, agents and commands. Re-check on the next upstream update: compare the pinned commits with the new ones and repeat steps 4 and 5.
