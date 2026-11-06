# Security review: coreyhaines31-marketingskills + anthropics-knowledge-work-plugins / mkt-marketing-plan

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-06 |
| Upstream URL | https://github.com/coreyhaines31/marketingskills ; https://github.com/anthropics/knowledge-work-plugins |
| Pinned commit | 88c79f6528a9347420e57ceb1fff9a60de651768 ; ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Repository is the official one: coreyhaines31/marketingskills is the author's own account; anthropics/knowledge-work-plugins is in Anthropic's official GitHub organization
- [x] Not a look-alike fork or renamed copy
- [x] Maintainer identified: Corey Haines; Anthropic

## 2. Check the license

- [x] License identified: MIT ; Apache-2.0
- [x] On the allow-list
- [x] Not share-alike, proprietary, source-available or unlicensed

## 3. Pin the version

- [x] Exact commits recorded above (owner adds them to `registry/sources.yaml`)

## 4. Static scan (no execution)

- [x] `skilloffice scan` run on the downloaded copy: no findings for the marketing candidates
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs

## 5. Human review

- [x] Every line of both upstream SKILL.md files read (`skills/marketing-plan/SKILL.md`, `marketing/skills/campaign-plan/SKILL.md`)
- [x] No scripts exist in either upstream skill folder; none imported
- [x] Connector file `marketing/.mcp.json` (Slack, Canva, Figma, HubSpot, Amplitude and others) was NOT imported. All connector and MCP instructions were removed from the text
- [x] Network access: none
- [x] File-system access: none (the upstream skill wrote to `~/marketing-plans/`; that behavior was removed)
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Instructions only, no scripts, no network, no file writes.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-06)

## Notes

The upstream marketing-plan skill wrote files to a fixed home-directory path and referenced tool integrations. Both were removed. Upstream reference files were not imported; no code paths remain.
