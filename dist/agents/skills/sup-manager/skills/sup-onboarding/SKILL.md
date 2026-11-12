---
name: sup-onboarding
description: Plans or reviews customer onboarding so new customers reach their first real value quickly. Defines the activation milestone, builds a time-boxed onboarding plan with success milestones, owners and check-ins for an account or a self-serve flow, and finds where customers stall. Use when the user asks for a customer onboarding plan, a kickoff or implementation plan, a 30-60-90 day success plan, activation or time-to-value improvements, onboarding checklists, or help with customers who sign up but never get going.
license: Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "07-customer-support-success"
---

# Customer Onboarding

Get each new customer to a real result as fast as possible, then build the habits that keep them. Works for a high-touch account (a plan with milestones and owners) or a self-serve product (a flow and checklist).

## Inputs

- The product or service and who the new customer is (required).
- Optional: the customer's goals from the sale, current onboarding steps, where customers stall, activation or retention data the user exports.

Context used from the active profile: `company.products_and_services`, `company.business_model`, `marketing.ideal_customers`, `operations.processes`, `brand.voice`, `regional.date_format`, `regional.time_zone`.

## Steps

1. **Define the activation milestone**: the first action that shows the customer got real value (for example "first report shared with the team"). If the user has usage data, treat candidate milestones as hypotheses to check against later retention, not proven causes. Details: [references/onboarding-methods.md](references/onboarding-methods.md).
2. **Map the minimum path to value**: list every step between signup or contract and the milestone, remove what is not essential, and order the rest so the first session has one clear goal.
3. **Choose the format**:
   - High-touch account: kickoff agenda, success plan with 3 to 5 milestones, owner on each side, check-in rhythm, risks.
   - Self-serve: first-run flow, a checklist of 3 to 7 value-ordered items, helpful empty states, trigger-based reminder messages (drafts only).
4. **Plan for stalls**: define "stalled" (for example no key action within an agreed number of days), and the response: helpful reminder, a session offer, or personal outreach for important accounts.
5. **Measurement**: activation rate, time to activation, onboarding completion, early retention. Recommend what to track; do not invent baselines.
6. **If reviewing an existing onboarding**, report problems as finding, impact, recommendation and priority.

## Output

- Onboarding plan: activation milestone, steps, milestones with target dates as placeholders for the team to confirm, owners by role, check-in rhythm, stall plan, metrics.
- Or a review: findings with impact, recommendation and priority.
- Draft customer-facing messages (welcome, kickoff, reminder), marked "draft, not sent".

## Quality checklist

- [ ] One clear activation milestone tied to customer value, not to our convenience.
- [ ] Every step earns its place; nothing traps the user (tours and checklists can be skipped).
- [ ] Dates, deliverables and service levels are placeholders unless the user confirmed them.
- [ ] Claims about what drives retention are labeled as hypotheses unless the data shows them.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never send messages, schedule meetings or change product settings. Do not commit to implementation dates, deliverables or services beyond what the contract and the team confirm.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): milestone, plan summary and items to confirm. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
