# Customer support and success playbooks

Each playbook lists inputs to confirm, the default skill order, when to skip a skill, and what the correction cycle usually fixes. Always follow the core orchestration protocol: plan first, run only what is needed, one correction cycle, one report. Every send, ticket change, credit and commitment is left for the user.

## 1. Ticket queue triage

**Confirm first**: the tickets (pasted or exported), SLA targets if any, the team or queue names, a known issues list if available.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sup-ticket-triage | Never skip in this playbook |
| 2 | sup-escalation | No P1 ticket and no pattern of three or more tickets |

Manager check: priorities have reasons, security reports go straight to security, draft first replies promise nothing unapproved.

**Correction cycle usually fixes**: priority set by symptom instead of root cause, duplicate claims without a source, first replies with a fix date.

**Possible handoff**: Software Development for a confirmed defect pattern.

## 2. Reply with review

**Confirm first**: the customer message or thread, the goal of the reply, the facts the team has confirmed, the relevant policy.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sup-draft-response | The user supplied their own draft to check |
| 2 | sup-response-review | Never skip in this playbook |

sup-response-review is cacheable: if the reply, the facts and the policy are unchanged since the last review, reuse its result.

**Correction cycle usually fixes**: unapproved refunds or dates, answers buried at the end, off-brand tone, exposed identifiers.

## 3. Escalation

**Confirm first**: the issue, affected customers, SLA status, what has been tried, the decision needed.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sup-escalation | Never skip in this playbook |
| 2 | sup-draft-response (interim customer update) | The customer was updated recently and nothing changed |
| 3 | sup-response-review | No customer update was drafted |

**Correction cycle usually fixes**: vague impact, missing reproduction steps, no deadline on the ask, interim updates that promise a fix date.

**Possible handoff**: Software Development for engineering defects; Product Management for feature gaps.

## 4. Knowledge base article

**Confirm first**: the resolved issue or recurring question, the confirmed solution, the audience, existing related articles.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sup-customer-insights | The solution is confirmed and needs no research |
| 2 | sup-kb-article | Never skip in this playbook |

Manager check: customer language in the title and opening, complete steps, no customer data or internal details.

**Correction cycle usually fixes**: internal jargon in titles, missing expected results after steps, a known-issue article with an unapproved fix date.

## 5. Onboarding plan

**Confirm first**: the product or service, the customer and their goals, high-touch or self-serve, current onboarding steps and where customers stall.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sup-onboarding | Never skip in this playbook |

Manager check: one clear activation milestone, dates as placeholders to confirm, nothing that traps the user.

**Correction cycle usually fixes**: a milestone defined by our convenience rather than customer value, too many checklist items, committed implementation dates.

## 6. Churn risk review

**Confirm first**: the account export, the period, renewal dates, past renewal and churn outcomes if available, the approved retention offers.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sup-health-score | A recent score exists and its input data has not changed |
| 2 | sup-churn-prevention | The user only wants the scores |
| 3 | sup-business-review for the top 1 to 3 at-risk accounts | The user did not ask for account-level preparation |

**Correction cycle usually fixes**: mixed scales in the score, missing data treated as zero, unapproved discounts in save plans, retention tactics that make cancelling harder.

**Possible handoff**: Sales for expansion that serves a customer goal; Marketing for lifecycle messages.
