---
name: sup-churn-prevention
description: Designs or reviews ethical churn prevention. Covers early risk signals and proactive check-ins, a fair cancellation flow with an exit survey and offers matched to the reason, failed-payment recovery messages, and churn metrics, while keeping cancellation easy and free of dark patterns. Use when the user mentions churn, customers leaving, cancellations, retention, win-back, save offers, pausing subscriptions, failed payments or dunning, or wants a plan for at-risk accounts.
license: Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "07-customer-support-success"
---

# Churn Prevention

Keep customers by fixing the reason they want to leave, not by making leaving hard. Covers voluntary churn (customers choose to cancel) and involuntary churn (payments fail).

## Inputs

- The situation: churn rate if known, business model, how cancellation works today (required, ask if missing).
- Optional: cancellation reasons, usage data, billing setup, existing retention offers and the company's approved offer policy.

Context used from the active profile: `company.business_model`, `company.products_and_services`, `brand.voice`, `operations.policies`, `regional.currency`, `regional.jurisdictions`.

## Steps

1. **Size the problem** from the data provided: voluntary versus involuntary, and when in the customer lifetime cancellations happen. Never invent rates; ask, or label figures as illustrative.
2. **Proactive retention**: map risk signals (usage drop, key feature stopped, support spike then silence, seats removed, data export) to interventions (help offer, check-in, personal outreach for important accounts). If a health score exists or is needed, use sup-health-score.
3. **Cancellation flow** (if in scope), following [references/retention-playbook.md](references/retention-playbook.md):
   1. A one-question exit survey, framed as "help us improve".
   2. At most one offer and one fallback, matched to the stated reason, and only from the company's approved offers.
   3. A clear confirmation with the end date of access.
   4. An easy way to come back.
4. **Failed payments**: card-expiry reminders, a retry plan by decline type, a short reminder sequence (drafts), a grace period, then cancellation with a reactivation path.
5. **Metrics**: churn rate, revenue churn, save rate, offer acceptance, pause return rate, payment recovery rate, and whether "saved" customers stay.
6. **Compliance check** for `regional.jurisdictions`: easy online cancellation rules, renewal notices, and consumer protection on discounts and auto-renewal. Flag for legal review; this is not legal advice.

## Output

- Churn diagnosis with what the data does and does not show.
- Proactive retention plan (signals, thresholds as placeholders to validate, actions).
- Cancellation flow design and draft copy, and/or a payment recovery plan with draft messages, all marked "draft".
- Metrics plan and experiments, one variable at a time.
- Compliance flags.

## Quality checklist

- [ ] "Continue cancelling" is visible at every step; no guilt-trip copy, hidden buttons or extra hoops.
- [ ] Offers match the reason and come from the approved offer list; none is presented as approved without it.
- [ ] Discounts, credits and pauses are proposals for the team to approve, not commitments.
- [ ] Benchmarks are labeled as rough industry ranges, not targets for this company.
- [ ] Compliance flags for the relevant jurisdictions are included.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never change billing settings, apply discounts, pause or cancel accounts, or send messages. No dark patterns or manipulative retention tactics, even if asked: explain the risk and offer a fair alternative.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): diagnosis, recommended actions and items needing approval. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
