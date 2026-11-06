# Security review: anthropics-knowledge-work-plugins + coreyhaines31-marketingskills / mkt-email-sequence

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-06 |
| Upstream URL | https://github.com/anthropics/knowledge-work-plugins ; https://github.com/coreyhaines31/marketingskills |
| Pinned commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d ; 88c79f6528a9347420e57ceb1fff9a60de651768 |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Official repositories (Anthropic's official organization; author's own account)
- [x] Not look-alike forks
- [x] Maintainers identified: Anthropic; Corey Haines

## 2. Check the license

- [x] Licenses identified: Apache-2.0 ; MIT
- [x] On the allow-list

## 3. Pin the version

- [x] Exact commits recorded above

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copies: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs

## 5. Human review

- [x] Every line of both upstream SKILL.md files read
- [x] No scripts in either upstream skill folder; none imported
- [x] Connector file `marketing/.mcp.json` (Slack, Canva, Figma, HubSpot, Amplitude and others) NOT imported; email and CRM tool integration sections removed
- [x] Upstream text linked to an external tools registry with MCP guides; links removed
- [x] Network access: none
- [x] File-system access: none
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Drafts only; sending requires user confirmation.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache and MIT notices included
- [x] Attribution added to the root `NOTICE` file (2026-11-06)

## Notes

Added an explicit rule against accepting email platform credentials or subscriber lists, with an eval case.
