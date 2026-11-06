# Security review: anthropics-knowledge-work-plugins / sls-account-research

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-06 |
| Upstream URL | https://github.com/anthropics/knowledge-work-plugins |
| Pinned commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Official repository in Anthropic's GitHub organization
- [x] Not a look-alike fork or renamed copy
- [x] Maintainer identified: Anthropic

## 2. Check the license

- [x] License identified: Apache-2.0
- [x] On the allow-list
- [x] Upstream repository has no NOTICE file

## 3. Pin the version

- [x] Exact commit recorded above

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copy: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of `sales/skills/account-research/SKILL.md` and `sales/skills/account-context/SKILL.md` read
- [x] No scripts in the upstream skill folders; none imported
- [x] Connector files `sales/.mcp.json` and `sales/CONNECTORS.md` NOT imported; all CRM, email, chat and calendar actions removed (including the owner chat message)
- [x] Network access: none required; web research only where the user's platform allows it
- [x] Indirect sources: none found
- [x] File-system access: none
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Instructions only.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice included
- [x] Attribution added to the root `NOTICE` file (2026-11-06)

## Notes

The upstream rules block let the agent take connector actions the user asked for. SkillOffice removed all actions: the skill researches and reports only. Added rules against recording sensitive personal traits.
