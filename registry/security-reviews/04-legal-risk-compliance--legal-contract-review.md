# Security review: anthropics-knowledge-work-plugins / legal-contract-review

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-12 |
| Upstream URL | https://github.com/anthropics/knowledge-work-plugins (legal/skills/review-contract/, small-business/skills/contract-review/) |
| Pinned commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Repository is the official one: https://github.com/anthropics/knowledge-work-plugins
- [x] Not a look-alike fork or renamed copy (fetched directly from the owner's GitHub account at the pinned commit)
- [x] Maintainer identified: Anthropic

## 2. Check the license

- [x] License identified: Apache-2.0
- [x] On the allow-list (MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC)
- [x] No CC-BY, share-alike, proprietary or unlicensed material used

## 3. Pin the version

- [x] Exact commit recorded above and in the skill's `skill.yaml` and `PROVENANCE.md`

## 4. Static scan (no execution)

- [x] `skilloffice scan` run on the downloaded copy (legal/, operations/ and small-business/contract-review, re-fetched at the pinned commit into a fresh folder on 2026-11-12): no findings
- [ ] Cisco skill-scanner run in local-only mode, if available: not run (not installed)
- [x] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of both upstream SKILL.md files and of reference/gotchas.md read; the connector references and the worked example read and not imported
- [x] Scripts: none in the upstream skills
- [x] MCP or connector files: legal/.mcp.json and CONNECTORS.md not imported; Gmail, Microsoft 365, Google Drive and DocuSign fetch instructions removed
- [x] Network access: removed (the upstream `allowed-tools: Read, WebFetch` pre-approval and all connector fetching)
- [x] File-system access: read-only review of files the user provides; the upstream DOCX export and HTML artifact steps removed
- [x] External dependencies: none
- [x] Indirect sources: none. The upstream files credit no other project; the upstream worked example contains an inaccurate label (a three-month cap described as uncapped liability) and was not imported.

## 6. Risk label

Chosen label and reason: low. Read-only review instructions, no scripts, no network, no file changes, no pre-approved tools. Not-legal-advice notice, jurisdiction statement and never-sign rules added.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-12)

## Notes

Regulated legal content: the skill states the assumed jurisdiction, never invents laws or deadlines, and routes definitive conclusions to counsel. Re-check on the next upstream update.
