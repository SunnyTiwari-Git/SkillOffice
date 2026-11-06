# Security review: coreyhaines31-marketingskills / mkt-social-content

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

- [x] Every line of `skills/social/SKILL.md` read
- [x] No script files in the upstream skill folder; the upstream `references/listening.md` contains command-line fetch recipes for public sites. That file was NOT imported
- [x] Upstream "Publishing From Your Agent" section (scheduling through MCP or API tools) removed
- [x] Network access: none
- [x] File-system access: none
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Drafts only; publishing requires explicit user approval.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, MIT notice included
- [x] Attribution added to the root `NOTICE` file (2026-11-06)

## Notes

Removing the autonomous publishing path keeps the skill instruction-only and consistent with the SkillOffice rule that external actions need confirmation.
