# Security review: coreyhaines31-marketingskills / sup-churn-prevention

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/coreyhaines31/marketingskills |
| Upstream path | skills/churn-prevention/SKILL.md |
| Pinned commit | 88c79f6528a9347420e57ceb1fff9a60de651768 |
| Decision | Approved with changes |
| Risk label | low |

## 1. Verify the source

- [x] Official repository of Corey Haines
- [x] Not a look-alike fork or renamed copy
- [x] Maintainer identified: Corey Haines

## 2. Check the license

- [x] License identified: MIT (Copyright (c) 2025 Corey Haines); full notice carried in `PROVENANCE.md`
- [x] On the allow-list

## 3. Pin the version

- [x] Exact commit recorded above and in `registry/sources.yaml`

## 4. Static scan (no execution)

- [x] `skilloffice scan` on the downloaded copy: no findings
- [ ] Cisco skill-scanner: not run in this session
- [x] Checked for remote downloads, shell pipes, encoded blobs, hidden Unicode, oversized files, credential access and paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of `skills/churn-prevention/SKILL.md` read
- [x] No scripts in the upstream skill folder; none imported
- [x] Connector and tool-integration material not imported: vendor tool tables, CLI tool lists, integration links and the product-marketing context lookup removed
- [x] Network access: none
- [x] Indirect sources: upstream SKILL.md links a Gainsight documentation page on measure weights, a PostHog integration guide and the upstream tools registry, and names retention vendors. These are links and product names, not copied licensed material; none were imported, so no NOTICE entry is needed. Reported to the parent for confirmation
- [x] File-system access: none
- [x] External dependencies: none

## 6. Risk label

Chosen label and reason: low. Instructions only; drafts and analysis for the user to review.

## 7. Record

- [x] `PROVENANCE.md` written, changes listed, MIT notice included
- [x] Attribution added to the root `NOTICE` file (2026-11-07)

## Notes

Upstream skill recommended fixed discount levels and time-pressure offer wording, and listed vendor tools. SkillOffice removed vendor and tool material, requires offers to come from the company's approved list as proposals, keeps cancellation easy with no dark patterns, and adds consumer protection flags for review.
