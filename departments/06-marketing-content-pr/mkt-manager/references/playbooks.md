# Marketing playbooks

Each playbook lists inputs to confirm, the default skill order, when to skip a skill, and what the correction cycle usually fixes. Always follow the core orchestration protocol: plan first, run only what is needed, one correction cycle, one report.

## 1. Campaign launch

**Confirm first**: goal with a number and date, audience, budget, launch date, which assets are wanted.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | mkt-marketing-plan (campaign brief) | A brief already exists and its inputs have not changed |
| 2 | mkt-copywriting (landing page, ads) | No page or ad copy requested |
| 3 | mkt-email-sequence (launch emails) | Email is not a chosen channel |
| 4 | mkt-social-content (launch posts) | Social is not a chosen channel |
| 5 | mkt-public-relations (pitch or release) | No real news hook |
| 6 | mkt-copy-editing (review all drafts) | Never skip if drafts were produced |
| 7 | mkt-brand-review (final review) | Never skip if drafts were produced |

Steps 2-5 have no dependency on each other and can run in parallel where the platform supports it. All depend on the brief from step 1.

**Correction cycle usually fixes**: off-voice lines, unsupported claims, inconsistent messages across channels, missing CTAs.

**Possible handoff**: Design for visuals and ad creatives.

## 2. Content piece (blog post, guide, web page)

**Confirm first**: topic or goal, audience, target keyword if any, length, where it will be published.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | mkt-content-strategy | The topic and angle are already decided |
| 2 | mkt-copywriting | Never for a new piece; for an existing piece use mkt-copy-editing only |
| 3 | mkt-copy-editing | Never skip |
| 4 | mkt-seo-audit (page scope) | Not public web content |
| 5 | mkt-brand-review | Never skip |

**Correction cycle usually fixes**: weak intro, unsupported claims, title and description length, heading structure, voice.

## 3. SEO review of a page or site

**Confirm first**: URLs or files, scope, priority keywords, any exports (Search Console, crawler).

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | mkt-seo-audit | Cached result still valid and pages unchanged |
| 2 | mkt-copywriting (titles, descriptions, headings) | No on-page copy findings |
| 3 | mkt-brand-review | No copy was rewritten |

**Correction cycle usually fixes**: on-page copy only. Technical fixes (redirects, sitemaps, speed) are listed for the user or handed to Software Development; never change a live site directly.

## 4. Email nurture

**Confirm first**: sequence type, trigger, goal, audience, number of emails, region for consent rules.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | mkt-email-sequence | Never |
| 2 | mkt-copy-editing | Never |
| 3 | mkt-brand-review | Never |

**Correction cycle usually fixes**: subject lines, AI-sounding phrasing, CTA clarity, missing exit conditions, compliance notes.

**Possible handoff**: Legal, Risk and Compliance when consent rules are unclear.

## 5. Monthly performance review

**Confirm first**: period, comparison period, data exports, targets.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | mkt-performance-report | Never; if no data is provided, stop and ask |
| 2 | mkt-marketing-plan (adjust next period) | The user only wants the report |

No review skills by default; the correction cycle fixes calculation or data-labeling errors found during verification (re-check every number against the source data).

## Verification checklist (step 7 of the orchestration protocol)

- Every number in the deliverables traces to user data or is labeled an estimate.
- Each fixed finding is re-checked in the changed text.
- Regional currency, date format and language applied.
- Nothing was published, sent or scheduled.
