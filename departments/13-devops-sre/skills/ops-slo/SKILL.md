---
name: ops-slo
description: "Defines service level indicators (SLIs), service level objectives (SLOs) and error budgets for a service, with burn-rate alerts, an error budget policy and an SLO dashboard. Keeps internal SLOs separate from customer SLAs. Use when asked to set reliability targets, \"how reliable should we be\", create SLOs or error budgets, replace noisy threshold alerts with SLO alerts, or decide whether to slow releases because of reliability."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
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

## Steps

1. **Pick journeys, then SLIs.** For each critical journey, a ratio of good events to all events: availability (successful requests / all requests), latency (requests faster than a threshold / all requests), and where relevant freshness, correctness or durability. Measure as close to the user as possible.
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
