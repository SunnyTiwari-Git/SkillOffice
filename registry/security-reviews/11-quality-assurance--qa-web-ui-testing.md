# Security review: anthropics-skills / qa-web-ui-testing

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-06 |
| Upstream URL | https://github.com/anthropics/skills (skills/webapp-testing/) |
| Pinned commit | ca45fc496a3436251f191354091d557da31c15b5 |
| Decision | Approved with changes |
| Risk label | medium |

## 1. Verify the source

- [x] Repository is the official one: https://github.com/anthropics/skills
- [x] Not a look-alike fork or renamed copy (cloned directly from the owner's GitHub account)
- [x] Maintainer identified: Anthropic

## 2. Check the license

- [x] License identified: Apache-2.0 (per-skill `skills/webapp-testing/LICENSE.txt`). Licenses in this repository differ per skill; the docx, pdf, pptx and xlsx skills are proprietary and were not used.
- [x] On the allow-list (MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC)
- [x] No CC-BY, share-alike, proprietary or unlicensed material used. The repository's `THIRD_PARTY_NOTICES.md` covers fonts and code in other skills, not this one.

## 3. Pin the version

- [x] Exact commit recorded above and in the skill's `skill.yaml` and `PROVENANCE.md`

## 4. Static scan (no execution)

- [x] `skilloffice scan` run on the downloaded copy: no findings
- [ ] Cisco skill-scanner run in local-only mode, if available: not run (not installed)
- [x] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of the upstream SKILL.md (95 lines) read
- [x] Scripts read and removed: `scripts/with_server.py` (105 lines; starts user-supplied server commands with `shell=True` and polls localhost ports; not malicious, but unnecessary), `examples/console_logging.py`, `examples/element_discovery.py`, `examples/static_html_automation.py` (Playwright examples against localhost or local files; not malicious). None imported; the approach is described in prose in `references/patterns.md`.
- [x] MCP or connector files: none in this skill
- [x] Network access: the adapted skill drives a browser against the user's local app only; production and shared environments require explicit approval
- [x] File-system access: reads the user's project; writes test scripts and screenshots in the user's project only
- [x] External dependencies: uses the project's existing browser tool; proposes Playwright and asks before adding it
- [x] Indirect sources: none found; the upstream skill credits no other project

## 6. Risk label

Chosen label and reason: medium. No bundled scripts, but the skill writes test files, starts local servers and browsers through the platform's normal permission prompts. No pre-approved tools (`allowed-tools` not set). Added rules: local targets only, synthetic data, credentials only from environment variables, stop started servers.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-06)

## Notes

The upstream skill instructs the agent to run bundled scripts as black boxes without reading them first ("DO NOT read the source until you try running the script"). SkillOffice's intake requires reading every script before use, so this instruction was removed along with the scripts. Re-check on the next upstream update: compare the pinned commit with the new one and repeat steps 4 and 5.
