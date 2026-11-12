# Triage rules

## Categories

| Category | Meaning | Signal words |
| --- | --- | --- |
| Bug | The product behaves incorrectly | error, broken, crash, not working, wrong |
| How-to | The customer needs guidance | how do I, where is, set up, configure |
| Feature request | A capability that does not exist | would be great if, any plans to, wish |
| Billing | Payment, invoice, subscription | charge, invoice, refund, upgrade, downgrade |
| Account | Access, permissions, settings | login, password, locked out, SSO, access |
| Integration | Connections to other tools or APIs | API, webhook, sync, OAuth, connect |
| Security | Possible exposure or compliance concern | breach, unauthorized, vulnerability, GDPR |
| Data | Data quality, import, export | missing data, import, export, duplicates |
| Performance | Speed or availability | slow, timeout, down, degraded |

Tie-break rules:

- A bug and a feature request together: bug is primary.
- Cannot log in because of a bug: bug, not account. Root cause decides.
- "It used to work and now it does not": bug.
- "I want it to work differently": feature request.
- When unsure between bug and something else, choose bug. Investigating costs less than dismissing.

## Priority

| Priority | Criteria | Default response target |
| --- | --- | --- |
| P1 Critical | Product unusable, data lost or exposed, security incident, most users affected, getting worse | 1 hour, continuous work, updates every 1 to 2 hours |
| P2 High | Core workflow broken, many users or a key account affected, no workaround, time-sensitive work blocked | 4 hours, same-day investigation |
| P3 Medium | Feature partly broken, workaround exists, one user or small team | 1 business day, update within 3 business days |
| P4 Low | Cosmetic issue, question, feature request, documented answer | 2 business days |

These targets are defaults. Use the company's own SLAs from `operations.policies` when they exist, and say which you used.

Raise priority when: the SLA is already exceeded, several customers report the same issue, the customer escalates or mentions executives, a workaround stops working, or the scope grows.

## Routing

| Route to | When |
| --- | --- |
| Frontline support | How-to, documented known issues, simple billing questions, password resets |
| Senior support | Bugs needing investigation, complex configuration, integrations, account issues |
| Engineering | Confirmed bugs needing a code fix, infrastructure or performance problems |
| Product | Feature requests with real demand, workflow gaps |
| Security | Data access concerns, vulnerability reports, compliance questions. Skip tiers: route immediately. |
| Billing or finance | Refunds, disputes, billing adjustments |

## Duplicate check

Compare against the material the user provided: the same error text, the same customer with an open ticket, the same product area recently, or a documented known issue. If a duplicate is found, recommend linking the tickets and adding any new detail to the existing one.

## First-reply templates

Fill the brackets; keep the tone of `brand.voice`. Never insert a date, refund or credit the team has not approved.

**Bug**: Thank you for reporting this. I can see how [specific impact] gets in the way of your work. We are investigating it as a [priority] issue. [If a workaround exists: In the meantime, you can (workaround).] We will update you by [agreed update time].

**How-to**: [Direct answer or link to the help article.] [Steps if short.] Tell us if anything is unclear.

**Feature request**: Thank you for the suggestion. I can see why [capability] would help with [their goal]. I have shared it with our product team. I cannot promise a timeline, but requests like this shape our priorities. [If an alternative exists: (alternative) may help in the meantime.]

**Billing**: Billing questions need quick answers, so I am looking into your account now. [Explanation if straightforward.] [Otherwise: I will come back to you by (agreed time).]

**Security**: Thank you for telling us. We take security reports seriously and have passed this to our security team. [If a protective step is known: We recommend (step) in the meantime.] We will follow up by [agreed time].
