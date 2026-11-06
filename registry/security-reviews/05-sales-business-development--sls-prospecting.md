# Security review: coreyhaines31-marketingskills and anthropics-knowledge-work-plugins / sls-prospecting

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-06 |
| Upstream URLs | https://github.com/coreyhaines31/marketingskills (primary); https://github.com/anthropics/knowledge-work-plugins |
| Pinned commits | 88c79f6528a9347420e57ceb1fff9a60de651768 (marketingskills); ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d (knowledge-work-plugins) |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Official repositories: Corey Haines's marketingskills and Anthropic's knowledge-work-plugins
- [x] Not look-alike forks or renamed copies
- [x] Maintainers identified: Corey Haines; Anthropic

## 2. Check the license

- [x] Licenses identified: MIT (Copyright (c) 2025 Corey Haines); Apache-2.0
- [x] On the allow-list
- [x] knowledge-work-plugins has no NOTICE file; MIT notice carried in `PROVENANCE.md`

## 3. Pin the version

- [x] Exact commits recorded above

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copies: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of `skills/prospecting/SKILL.md`, `sales/skills/lead-triage/SKILL.md` and `sales/skills/account-tiering/SKILL.md` read
- [x] No scripts in the upstream skill folders; none imported
- [x] Connector files `sales/.mcp.json` and `sales/CONNECTORS.md` NOT imported; CRM lookups and writes and the routing chat post removed; vendor tool integration links removed
- [x] Network access: none required; public research only where the user's platform allows it
- [x] Indirect sources: found in upstream prospecting reference files, which were NOT imported: Kappaemme `first-customer-finder` (MIT, `references/demand-signals.md`), eliasstravik GTM engineering toolkit (MIT, `references/enrichment-playbook.md`), a "local-client-prospector" pattern (`references/local-prospecting.md`) and a podcast credit (`references/signal-plays.md`). No content from these files is in the SkillOffice skill.
- [x] File-system access: none
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Instructions only.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache and MIT notices included
- [x] Attribution added to the root `NOTICE` file (2026-11-06)

## Notes

Prospecting touches personal data and anti-spam law. The upstream compliance guardrails (no bulk scraping, no bypassing log-ins, public business channels, source and date for each contact, no breached data, no sensitive-trait targeting) were kept and tied to `regional.jurisdictions`. The upstream list included a partner tool marked with a symbol; all tool tables were removed.
