# Sales playbooks

Each playbook lists inputs to confirm, the default skill order, when to skip a skill, and what the correction cycle usually fixes. Always follow the core orchestration protocol: plan first, run only what is needed, one correction cycle, one report. Every send, record update and commercial commitment is left for the user.

## 1. New account pursuit

**Confirm first**: the company or target segment, the contact or role, the goal (meeting, reply, introduction), and any existing relationship.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sls-account-research (one company) | A recent brief exists and its inputs have not changed |
| 1 | sls-prospecting (a list or segment) | The user named one company |
| 2 | sls-outreach | The user only asked for research |

Draft check: personalization is specific, one ask, consent and opt-out flagged, no pricing commitments.

**Correction cycle usually fixes**: generic openers, unsourced claims, a missing compliance line, too many asks.

**Possible handoff**: Marketing for a one-pager or case study to attach.

## 2. Meeting prep and follow-up

**Confirm first**: the meeting date and time, attendees, the deal, and whether the meeting has happened.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sls-call-prep | The meeting has already happened |
| 1 | sls-call-summary | The meeting has not happened yet, or no transcript or notes exist |

Draft check: every commitment in the transcript appears in the follow-up; discussed prices or dates are marked as needing approval; recipients come from the user.

**Correction cycle usually fixes**: missing commitments, unsupported stage changes in the update checklist, vague next steps.

## 3. Deal review

**Confirm first**: the deal record and notes, the target (next stage or close), and the target signature date if a close plan is wanted.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sls-deal-review | Never skip in this playbook |
| 2 | sls-objection-handling | No open objection in the review |
| 3 | sls-competitive-battlecard (in-deal) | No competitor in the deal |

sls-deal-review is cacheable: if the deal data and notes are unchanged since the last review, reuse its result.

**Correction cycle usually fixes**: close-plan dates that make the close impossible, business case points without customer evidence, unmarked pricing in drafts.

## 4. Pipeline and forecast review

**Confirm first**: the pipeline export, the period, the target or quota, and any prior snapshot.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sls-pipeline-forecast | Never skip in this playbook |
| 2 | sls-deal-review for the top 1 to 3 at-risk deals | The user did not ask for deal-level detail |

**Correction cycle usually fixes**: an unstated bucket mapping, a missing anchor date, a conclusion drawn from too few deals.

## 5. Competitive deal

**Confirm first**: the competitor, the deal, what the customer has said and when the next interaction is.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sls-competitive-battlecard (in-deal) | Never skip in this playbook |
| 2 | sls-objection-handling | No specific pushback yet |
| 3 | sls-outreach (written reply) | The response will be spoken, not written |

Draft check: competitor claims dated and sourced, their strengths stated honestly, no disparaging lines.

**Possible handoff**: Marketing for a public comparison page, which needs its review.

## 6. Win-loss and enablement

**Confirm first**: the closed-deals export for the period, notes for the largest wins and losses, and which materials need refreshing.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sls-win-loss-review | Never skip in this playbook |
| 2 | sls-competitive-battlecard (refresh) | No competitor patterns found |
| 3 | sls-sales-enablement | No asset changes recommended |

**Correction cycle usually fixes**: battlecards that ignore new loss patterns, collateral claims without evidence.

**Possible handoff**: Product Management for feature gaps raised in losses, when available.
