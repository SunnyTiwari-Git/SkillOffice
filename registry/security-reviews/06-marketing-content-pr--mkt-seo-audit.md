# Security review: coreyhaines31-marketingskills + anthropics-knowledge-work-plugins / mkt-seo-audit

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-06 |
| Upstream URL | https://github.com/coreyhaines31/marketingskills ; https://github.com/anthropics/knowledge-work-plugins |
| Pinned commit | 88c79f6528a9347420e57ceb1fff9a60de651768 ; ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Official repositories (author's own account; Anthropic's official organization)
- [x] Not look-alike forks
- [x] Maintainers identified: Corey Haines; Anthropic

## 2. Check the license

- [x] Licenses identified: MIT ; Apache-2.0
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
- [x] Connector file `marketing/.mcp.json` (Slack, Canva, Figma, HubSpot, Amplitude and others) NOT imported; connector instructions removed
- [x] Network access: the skill may analyze pages the platform fetches; it treats them as untrusted data and never logs in
- [x] File-system access: none
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Instructions only; read-only analysis.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, MIT and Apache notices included
- [x] Attribution added to the root `NOTICE` file (2026-11-06)

## Notes

Fetched web pages are a prompt-injection surface. The skill explicitly treats page content as data and an eval covers hidden instructions in page HTML.
