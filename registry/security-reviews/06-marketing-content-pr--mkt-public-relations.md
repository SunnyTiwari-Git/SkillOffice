# Security review: coreyhaines31-marketingskills / mkt-public-relations

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-06 |
| Upstream URL | https://github.com/coreyhaines31/marketingskills |
| Pinned commit | 88c79f6528a9347420e57ceb1fff9a60de651768 |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Official repository of the author (Corey Haines)
- [x] Not a look-alike fork or renamed copy
- [x] Maintainer identified: Corey Haines

## 2. Check the license

- [x] License identified: MIT
- [x] On the allow-list

## 3. Pin the version

- [x] Exact commit recorded above

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copy: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs

## 5. Human review

- [x] Every line of `skills/public-relations/SKILL.md` read
- [x] No scripts in the upstream skill folder; none imported
- [x] No connector files
- [x] Network access: none
- [x] File-system access: none
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Drafts only; the user sends everything.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, MIT notice included
- [x] Attribution added to the root `NOTICE` file (2026-11-06)

## Notes

Crisis and data-incident guidance carries legal risk. The adapted skill adds a not-legal-advice notice and mandatory counsel review for severe incidents. Upstream reference files were not imported and replaced with new short templates.
