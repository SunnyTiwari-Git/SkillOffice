---
name: mkt-marketing-plan
description: Builds a marketing plan or campaign brief tailored to the company's real budget, team, stage and audience, structured by funnel stage (acquisition, activation, retention, referral, revenue) with a 90-day roadmap, channel strategy, content calendar and success metrics. Use when the user asks for a marketing plan, growth plan, go-to-market (GTM) plan, campaign plan, launch plan, 90-day or 12-month marketing roadmap, or wants to turn a marketing goal into an executable plan.
license: Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md
metadata:
  project: "SkillOffice"
  version: "0.2.0"
  department: "06-marketing-content-pr"
---

# Marketing Plan

Produce a marketing plan that the company can actually execute with its current budget, people and tools. Two sizes:

- **Campaign brief**: one campaign (a launch, a lead push, an awareness or re-engagement campaign) over weeks.
- **Full plan**: the whole marketing program over 90 days to 12 months.

If it is not obvious which one the user wants, ask (see Ask first). Default to a campaign brief for a single goal with a date, and a full plan for "what should our marketing be".

## Inputs

- Goal: what the plan must achieve, ideally with a number and a date.
- Scope: campaign brief or full plan.
- Budget, team and timeline: what exists today, and what changes if more budget arrives.
- Optional: past results, current channels, work already done or in progress.

Context used from the active profile: `company.name`, `company.description`, `company.products_and_services`, `company.business_model`, `company.markets`, `company.differentiators`, `brand.voice`, `marketing.ideal_customers`, `marketing.channels`, `marketing.campaign_preferences`, `marketing.competitors`, `regional.currency`, `regional.date_format`. Ask only for what is missing and needed.

## Ask first

Ask these in one round before planning, skipping any that the request or the listed context fields already answer:

1. **Scope.** (a) A campaign brief: one campaign over a few weeks; (b) a full plan: 90-day roadmap plus an outlook to 12 months; (c) other.
2. **Goal.** (a) More leads or sales conversations; (b) more revenue or new customers; (c) awareness or sign-ups for a launch; (d) other. Ask for a number and a date if they have one.
3. **Budget** (in `regional.currency`). (a) No paid budget; (b) a small monthly budget (say how much); (c) a dedicated campaign budget (say how much); (d) not known yet, recorded as an open decision.
4. **Team.** (a) One person, part time; (b) a small team of 2 or 3; (c) a team plus an agency or freelancers; (d) other.
5. **What is tracked today.** (a) Leads and sales by channel; (b) a few numbers, such as website visits; (c) nothing yet, so the plan starts by setting up basic measurement; (d) other.

Answers apply to this request only. Unknowns become open decisions; never invent them.

## Steps

1. **Intake.** Run the Ask first questions to confirm the goal, scope and constraints. If budget, team size or current results are unknown, do not invent them. Record each unknown as an open decision.
2. **Strategic frame.** State in a few lines: who the ideal customer is, the problem the product solves, why customers choose this company over alternatives (including doing nothing), and the brand voice rules that apply.
3. **Problem check.** Rate the core problem on size (how painful) and frequency (how often felt). Large and frequent problems reward steady, compounding marketing. Small or rare problems constrain budget and channel choices; say so plainly instead of hiding it.
4. **Current state.** List what is working, what is not, what is in flight and what is stuck, by channel. Acknowledge work the team has already done.
5. **Funnel plan.** For each stage, write specific moves with a mechanism and a leading indicator:
   - Acquisition: how strangers become aware.
   - Activation: how a new lead or user reaches a first valued experience.
   - Retention: how customers stay and deepen.
   - Referral: how happy customers bring others.
   - Revenue: pricing, packaging, upsell and expansion.
   Brand and content serve every stage; they are not a stage of their own.
6. **Channels.** Pick channels where the audience already spends time, not where the team is most comfortable. Use the owned, earned and paid guide in [references/campaign-reference.md](references/campaign-reference.md). For each channel give: why it fits, formats, effort (low, medium, high) and budget share if a budget exists.
7. **Roadmap.**
   - Campaign brief: a week-by-week calendar with dependencies (for example "landing page live before paid ads start").
   - Full plan: a 90-day roadmap in four blocks (weeks 1-2 unblock, 3-4 foundation, 5-8 velocity, 9-12 compound), each move tagged with its funnel stage and an owner, then a quarterly outlook for months 4-12.
8. **Budget.** If a budget exists, split it by channel or activity, separate production from distribution costs, and keep 10-20% for experiments and contingency. If not, write the plan channel-agnostic and show where money would change the plan.
9. **Measurement.** One primary metric with a target, 3-5 supporting metrics, how each is tracked and how often it is reviewed. Rates must compare matching, completed time windows.
10. **Risks and open decisions.** 2-4 risks with mitigations, and every unknown from intake listed as a decision for the user.

## Output

A single Markdown document. Headings in this order:

1. Executive summary: 3 big bets, 90-day priorities, expected outcome. Readable in one minute.
2. Strategic frame
3. Current state (full plan only)
4. Funnel plan (or, for a campaign brief: objective, audience, key messages, channel strategy)
5. Calendar or roadmap (table: week, item, channel, owner, dependency, status)
6. Assets needed (name, type, priority must-have or nice-to-have, due date)
7. Budget (if any), in `regional.currency`
8. Success metrics
9. Risks, open decisions and next steps

Dates use `regional.date_format`. Keep campaign briefs to 2-4 pages; full plans can be longer but every section must be specific. If a section has nothing to say, write that in one line.

## Quality checklist

- [ ] Every move names its funnel stage, mechanism and leading indicator.
- [ ] Nothing assumes budget, people or tools the company does not have.
- [ ] No invented numbers, customers or results. Unknowns appear as open decisions.
- [ ] Channels match where the ideal customer actually is.
- [ ] The roadmap has owners and dependencies, not just actions.
- [ ] The plan respects the brand voice and any `marketing.campaign_preferences`.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). This skill only plans. Spending money, booking media or publishing anything needs the user's explicit confirmation. Plans for regulated industries (health, finance, legal services) must flag claims that need legal review.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words) and log progress as described in the `skilloffice-core` memory protocol (`references/protocols/memory.md`). Used on its own, deliver the plan and offer to draft specific assets from the calendar.
