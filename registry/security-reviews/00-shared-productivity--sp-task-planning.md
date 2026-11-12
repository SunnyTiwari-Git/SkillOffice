# Security review: anthropics-knowledge-work-plugins / sp-task-planning

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-13 |
| Upstream URL | https://github.com/anthropics/knowledge-work-plugins |
| Pinned commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Decision | Approved with changes |
| Risk label | medium |

## 1. Verify the source

- [x] Official repository in Anthropic's GitHub organization
- [x] Not a look-alike fork or renamed copy
- [x] Maintainer identified: Anthropic

## 2. Check the license

- [x] License identified: Apache-2.0
- [x] On the allow-list
- [x] Upstream repository has no NOTICE file

## 3. Pin the version

- [x] Exact commit recorded above (verified copy `kwp-ab4cb1cd`)

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded `productivity/skills` folder: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs

## 5. Human review

- [x] Every line of `productivity/skills/task-management/SKILL.md` read
- [x] Scripts: the upstream skill told the agent to copy `productivity/skills/dashboard.html` (an HTML page with script) into the user's project. That file and the copy step were NOT imported.
- [x] Connector files `productivity/.mcp.json` and `productivity/CONNECTORS.md` NOT imported
- [x] Network access: none
- [x] Indirect sources: none. The upstream skill contains no credits, "adapted from" notes, licenses or links to other projects.
- [x] File-system access: writes `TASKS.md` in the user's project only when the user asks and confirms
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: medium. The skill may write a `TASKS.md` file on the user's request (writes_files).

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice included
- [x] Attribution added to the root NOTICE file (2026-11-13)

## Notes

Upstream always created `TASKS.md` and copied a dashboard file from the plugin folder into the working directory on first use. The adapted skill writes nothing unless the user asks, and adds prioritization, load checks and a rule never to invent due dates or owners.
