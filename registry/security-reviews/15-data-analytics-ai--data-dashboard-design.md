# Security review: anthropics-knowledge-work-plugins and wshobson-agents / data-dashboard-design

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/anthropics/knowledge-work-plugins; https://github.com/wshobson/agents |
| Pinned commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d (knowledge-work-plugins); 4bde3168b43c0655c4d00ea2726e631719908a6d (wshobson/agents) |
| Decision | Approved with changes |
| Risk label | medium |

## 1. Verify the source

- [x] Official repositories: Anthropic's GitHub organization; wshobson/agents by Seth Hobson
- [x] Not look-alike forks or renamed copies
- [x] Maintainers identified: Anthropic; Seth Hobson

## 2. Check the license

- [x] Licenses identified: Apache-2.0; MIT
- [x] Both on the allow-list
- [x] Neither upstream repository has a NOTICE file

## 3. Pin the version

- [x] Exact commits recorded above

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copies: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs

## 5. Human review

- [x] Every line of `data/skills/build-dashboard/SKILL.md`, `kpi-dashboard-design/SKILL.md` and its `references/details.md` read
- [x] No script files in the upstream skill folders; inline HTML, JavaScript, Python and Streamlit templates not imported
- [x] Connector file `data/.mcp.json` NOT imported; `CONNECTORS.md` not imported
- [x] Network access: the upstream HTML template loaded Chart.js and a date adapter from a CDN (pinned with integrity hashes). Not imported; the adapted skill prefers no external scripts and requires a pinned version, integrity hash and user notice if one is used.
- [x] Indirect sources: none. Neither upstream skill contains credits, "adapted from" notes, licenses or links to other projects beyond the CDN script URLs.
- [x] File-system access: reads user data; writes the dashboard file in the user's project only, never overwriting without asking
- [x] External dependencies: none required

## 6. Risk label

Chosen label and reason: medium. May write a dashboard file in the user's project.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice and full MIT text included
- [x] Attribution added to the root NOTICE file (2026-11-07)

## Notes

Upstream build-dashboard told the agent to create realistic sample data when none was provided; this was removed because it can be mistaken for real results. Upstream kpi-dashboard-design's customer acquisition cost SQL double-counted spend and was not carried over.
