# Security review: anthropics-knowledge-work-plugins / fin-invoicing-collections

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

- [x] Every line of `small-business/skills/invoice-chase/SKILL.md` and `small-business/skills/ap-processor/SKILL.md` read
- [x] No scripts in the upstream skill folders; none imported
- [x] Ledger, email, payment link, card and expense connector steps removed; send, queue, bill entry and payment steps removed; both `reference/` folders not imported; upstream `allowed-tools: Read, WebFetch` not carried over
- [x] Network access: none
- [x] Indirect sources: none. The upstream skills name payment and expense products as connectors only; no credits, "adapted from" notes or links to other projects.
- [x] File-system access: reads only files the user provides
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Reads user-provided files and drafts only; never sends, enters or pays.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, Apache notice included
- [x] Attribution added to the root NOTICE file (2026-11-12)

## Notes

Upstream send and payment write paths removed. Added: bank-detail change requests treated as a fraud signal; account numbers masked.
