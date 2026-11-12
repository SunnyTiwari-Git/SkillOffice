# Security review: anthropics-knowledge-work-plugins / fin-month-end-close

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-12 |
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

- [x] Exact commit recorded above (re-fetched copy, same commit confirmed)

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copy: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs

## 5. Human review

- [x] Every line of `finance/skills/close-management/SKILL.md`, `small-business/skills/close-month/SKILL.md` and `small-business/skills/month-end-prep/SKILL.md` read
- [x] No scripts in the upstream skill folders; none imported
- [x] Connector files and month-end-prep `reference/` files (ledger reconcile guides, settlement mappings, packet format, examples) NOT imported; upstream `allowed-tools: Read, WebFetch` not carried over
- [x] Network access: none (upstream web fetch removed)
- [x] Indirect sources: none. The upstream skills contain no credits, "adapted from" notes, licenses or links to other projects.
- [x] File-system access: reads only files the user provides
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Reads user-provided files only; never posts, locks periods or sends the packet.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice included
- [x] Attribution added to the root NOTICE file (2026-11-12)

## Notes

Upstream automatic distribution to an accountant removed; sending now requires the user.
