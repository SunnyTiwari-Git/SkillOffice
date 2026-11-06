---
name: mkt-email-sequence
description: Designs and drafts automated multi-email sequences (welcome, onboarding, lead nurture, re-engagement, win-back, product launch, event follow-up, upsell, educational drip) with full copy, subject lines, timing, branching, exit and suppression rules, a flow diagram, test ideas and metrics. Use when the user asks for an email sequence, drip campaign, nurture flow, welcome or onboarding emails, lifecycle emails, email automation or email cadence. Not for one-to-one cold outreach.
license: Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "06-marketing-content-pr"
---

# Email Sequence

Design a complete automated email sequence: the strategy, every email's copy, the timing and the logic that decides who gets what.

## Inputs

- Sequence type and goal (for example "activate new trial users", "convert webinar leads").
- Audience and trigger: who enters, what event starts the sequence, what they already know.
- Optional: number of emails, cadence preference, offers, links and assets to use, other emails the audience already receives.

Context used from the active profile: `company.name`, `company.products_and_services`, `company.differentiators`, `brand.voice`, `brand.tone_donts`, `marketing.ideal_customers`, `regional.output_language`, `regional.time_zone`, `regional.jurisdictions`.

## Principles

- **One email, one job**: one purpose and one primary call to action per email.
- **Value before the ask**: earn the right to sell.
- **Relevance over volume**: fewer, better emails; segment where it matters.
- **Clear next step**: every email moves the reader somewhere specific.

## Steps

1. **Strategy.** Define the narrative arc across the sequence, map each email to a journey stage, decide how intensity builds, and define the conversion event that ends the sequence.
2. **Choose length and timing.** Start from the templates in [references/sequence-templates.md](references/sequence-templates.md). First email immediately after the trigger; early emails 1-2 days apart; nurture 2-4 days apart. Send in the recipient's local time; for business audiences avoid weekends.
3. **Draft each email:**
   - 2-3 subject line options (clear over clever, about 40-60 characters, no fake "Re:" or "Fwd:").
   - Preview text that adds to the subject rather than repeating it.
   - One-sentence purpose.
   - Body: hook, why it matters to them, the value, the CTA, a human sign-off. Short paragraphs, mobile first. Length: about 50-125 words transactional, 150-300 educational, 300-500 story-led.
   - Primary CTA: button text (action + outcome) and destination.
   - Timing and send conditions.
4. **Sequence logic.** Branching (for example "opened but did not click: send a softer re-ask"), exit conditions (converted, unsubscribed), re-entry rules and suppression (already in another sequence, recently contacted support, unsubscribed from marketing).
5. **Metrics and tests.** Primary conversion metric, per-email open, click and unsubscribe rates, drop-off points, and 2-3 A/B test ideas. Benchmarks in the reference file are rough; prefer the company's own history.
6. **Compliance check.** Every marketing email needs a working unsubscribe link and a physical or registered business address where the law requires it. Note consent requirements for the audience's region (`regional.jurisdictions`) and flag them for the user to confirm.

Avoid AI-sounding patterns: "It's not X, it's Y", "No X, no Y, no Z", "I hope this email finds you well", "Just checking in", "Feel free to reach out". Open with the reason you are writing.

## Output

1. Sequence overview: name, trigger, goal, number of emails, timing, exit conditions.
2. Overview table: number, subject, purpose, timing, primary CTA, condition.
3. Full drafts for every email.
4. Text flow diagram showing branches and exits.
5. Branching, exit and suppression rules list.
6. A/B test ideas and metrics plan with review cadence.
7. Compliance notes for the user to confirm.

## Quality checklist

- [ ] Every email has one job and one primary CTA.
- [ ] Exit conditions defined, so converted people stop receiving the sequence.
- [ ] Copy matches `brand.voice`; no fabricated testimonials or results.
- [ ] Unsubscribe and consent requirements noted.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). This skill drafts only. Loading emails into a sending tool or sending anything requires the user's explicit confirmation. Never request or store email platform credentials or subscriber lists; use placeholders such as `{{first_name}}`.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words) and follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`). Usual next steps: mkt-copy-editing and mkt-brand-review on the drafts.
