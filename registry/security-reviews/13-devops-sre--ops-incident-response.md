# Security review: wshobson-agents, anthropics-knowledge-work-plugins / ops-incident-response

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/wshobson/agents (plugins/incident-response/skills/incident-runbook-templates, on-call-handoff-patterns, connectivity-triage); https://github.com/anthropics/knowledge-work-plugins (engineering/skills/incident-response/SKILL.md) |
| Pinned commit | wshobson-agents: 4bde3168b43c0655c4d00ea2726e631719908a6d; anthropics-knowledge-work-plugins: ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Decision | Approved with changes |
| Risk label | medium |

## 1. Verify the source

- [x] Repository is the official one: https://github.com/wshobson/agents, https://github.com/anthropics/knowledge-work-plugins
- [x] Not a look-alike fork or renamed copy (cloned directly from the owners' GitHub accounts)
- [x] Maintainer identified: Seth Hobson, Anthropic

## 2. Check the license

- [x] License identified: MIT, Apache-2.0
- [x] On the allow-list (MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC)
- [x] No CC-BY, share-alike, proprietary or unlicensed material used

## 3. Pin the version

- [x] Exact commits recorded above and in the skill's `skill.yaml` and `PROVENANCE.md`

## 4. Static scan (no execution)

- [x] `skilloffice scan` run on the downloaded copy: no findings in the files used
- [ ] Cisco skill-scanner run in local-only mode, if available: not run (not installed)
- [x] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of the upstream SKILL.md files used was read; references were skimmed, not imported
- [x] Scripts: none in these skills
- [x] MCP or connector files: Anthropic `engineering/.mcp.json` and `CONNECTORS.md` not imported; paging and chat connector instructions removed
- [x] Network access: the skill proposes bounded, read-only diagnostics (DNS lookups, ping, traceroute, HTTP timing) that run only with the responder's approval through the platform's normal permission prompts
- [x] File-system access: reads the project; writes incident notes and runbooks in the user's project only
- [x] External dependencies: none
- [x] Indirect sources: none found

## 6. Risk label

Chosen label and reason: medium. Instructions only; writes notes and runbooks. Production-changing actions (restarts, rollbacks, scaling, DNS, firewall, VPN) are proposed for the responder to approve and run, never run by the skill. Diagnostics are read-only and bounded. Possible security or personal-data incidents are routed to the Cybersecurity department and legal contact. No pre-approved tools.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-07)

## Notes

Re-check on the next upstream update: compare the pinned commits with the new ones and repeat steps 4 and 5.
