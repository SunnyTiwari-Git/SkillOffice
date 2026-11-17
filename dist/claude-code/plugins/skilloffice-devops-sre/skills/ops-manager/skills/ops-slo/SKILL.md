---
name: ops-slo
description: "Defines service level indicators (SLIs), service level objectives (SLOs) and error budgets for a service, with burn-rate alerts, an error budget policy and an SLO dashboard. Keeps internal SLOs separate from customer SLAs. Use when asked to set reliability targets, \"how reliable should we be\", create SLOs or error budgets, replace noisy threshold alerts with SLO alerts, or decide whether to slow releases because of reliability."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.2.0"
  department: "13-devops-sre"
---

# Service Level Objectives

An SLO says how reliable a service must be from the user's point of view. The error budget (what is left over) decides how much risk the team can take. Burn-rate alerts page only when the budget is being spent too fast.

Load only the context this skill declares: `company.name`, `company.business_model`, `technical.stack`, `technical.website_architecture`, `operations.tools`, `operations.team_structure`.

## Inputs

- The service and its most important user journeys.
- Metrics available today (from `ops-observability`), and recent performance if known.
- Existing customer commitments (SLAs) and who owns them.
- How much the business is willing to invest in reliability.

## Ask first

Before defining anything, ask these in one round, skipping any that the request or the listed context fields already answer:

1. **Who uses the service?** (a) Customers through a website or app: availability and page speed; (b) other systems or partners through an API: success rate and response time; (c) a batch or data pipeline: data freshness and correctness; (d) staff through an internal tool; or other. (Skip if `technical.website_architecture` describes the service.)
2. **Are there customer commitments?** (a) Yes, an SLA exists, so share it; (b) no SLA; (c) one is being planned, which is a business and legal decision to flag; or other.
3. **Speed or reliability?** (a) Ship fast: a looser target and more room for risk; (b) balanced; (c) reliability first: a stricter target and slower releases when the budget runs low; or other.
4. **Where do metrics live?** (a) Prometheus or a compatible system; (b) your cloud provider's monitoring; (c) a hosted monitoring service; (d) nowhere yet, so start with `ops-observability`; or other. (Skip if `operations.tools` or `technical.stack` names it.)
5. **Who gets paged?** (a) An on-call rotation around the clock; (b) business hours only, so fast burns become urgent tickets; (c) no on-call yet; or other. (Skip if `operations.team_structure` describes on-call.)

If the person says "just go ahead", use a balanced target from current performance, a 30-day window and business-hours alerting, and list these defaults at the top. Propose saving the monitoring tool to `operations.tools` and the on-call setup to `operations.team_structure` if they are not set, and save only after the person confirms. All other answers apply to this request only.

## Steps

1. **Pick journeys, then SLIs.** Run the [Ask first](#ask-first) questions first. Then, for each critical journey, a ratio of good events to all events: availability (successful requests / all requests), latency (requests faster than a threshold / all requests), and where relevant freshness, correctness or durability. Measure as close to the user as possible.
2. **Set targets.** Start from current performance and user expectations, not from "five nines". Every extra nine costs a lot more. Use the downtime table in [references/slo-math.md](references/slo-math.md). Use a rolling window, commonly 28 or 30 days.
3. **Keep SLOs and SLAs apart.** Internal SLOs must be stricter than any customer SLA, so the team reacts before contracts are breached. Changing an SLA is a business and legal decision: flag it, never set it.
4. **Compute the error budget.** Error budget = 1 minus the SLO target. For 99.9 percent over 30 days, the budget is 0.1 percent, about 43 minutes of full unavailability.
5. **Burn-rate alerts.** Use multi-window, multi-burn-rate alerts: a fast burn (for example 14.4 times the sustainable rate over 1 hour, confirmed over 5 minutes) pages; a slow burn (for example 6 times over 6 hours, confirmed over 30 minutes) creates a ticket. Rules: [references/slo-math.md](references/slo-math.md).
6. **Error budget policy.** Agree in advance what happens as the budget is used: normal releases while healthy, extra review for risky changes when half is spent, focus on reliability work when it is exhausted. The policy is a team agreement the user owns.
7. **Dashboard.** Current compliance against target, budget remaining, burn rate, SLI trend over the window.

## Rules

- Targets and policies are proposals for the user's team to agree, not commitments made on their behalf.
- Write rule and dashboard files in the user's project only; do not change live alert routing without approval.

## Output

An SLO document (journeys, SLIs with exact queries, targets, windows, error budgets, alert rules, error budget policy, dashboard layout, open questions) and the rule files.

## In a managed run

Return the document and files. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`); record agreed targets as `decision` events once the user confirms them.

## Handoff

End with a handoff (under 400 words): Done, Decisions (SLIs, targets, windows), Changed files, Tests and checks (rule syntax checks, if run), Open issues (targets awaiting team agreement, missing metrics), Next (`ops-observability` to add missing metrics; `ops-incident-response` to link runbooks to the new alerts).
