# Security review: anthropics-knowledge-work-plugins and coreyhaines31-marketingskills / sls-outreach

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-06 |
| Upstream URLs | https://github.com/anthropics/knowledge-work-plugins (primary); https://github.com/coreyhaines31/marketingskills |
| Pinned commits | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d (knowledge-work-plugins); 88c79f6528a9347420e57ceb1fff9a60de651768 (marketingskills) |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Official repositories: Anthropic's knowledge-work-plugins and Corey Haines's marketingskills
- [x] Not look-alike forks or renamed copies
- [x] Maintainers identified: Anthropic; Corey Haines

## 2. Check the license

- [x] Licenses identified: Apache-2.0; MIT (Copyright (c) 2025 Corey Haines)
- [x] On the allow-list
- [x] knowledge-work-plugins has no NOTICE file; MIT notice carried in `PROVENANCE.md`

## 3. Pin the version

- [x] Exact commits recorded above

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copies: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of `sales/skills/draft-outreach/SKILL.md` and `skills/cold-email/SKILL.md` read
- [x] No scripts in the upstream skill folders; none imported
- [x] Connector files `sales/.mcp.json` and `sales/CONNECTORS.md` NOT imported; sending, mail-tool drafts, sequence-tool enrollment, CRM logging and vendor integration links removed
- [x] Network access: none
- [x] Indirect sources: none found in the two SKILL.md files; the cold-email reference files were not imported
- [x] File-system access: none
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Instructions only; drafts paste-ready text.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache and MIT notices included
- [x] Attribution added to the root `NOTICE` file (2026-11-06)

## Notes

Upstream draft-outreach could send email and enroll contacts in sequences when asked. SkillOffice removed both: outreach is drafts only. Added a rule that pricing, discounts, terms and delivery dates are never committed, and opt-out and consent checks per `regional.jurisdictions`.
