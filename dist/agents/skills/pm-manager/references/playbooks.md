# Product management playbooks

Each playbook lists inputs to confirm, the default skill order, when to skip a skill, and what the correction cycle usually fixes. Always follow the core orchestration protocol: plan first, run only what is needed, one correction cycle, one report.

## 1. Discovery to spec

**Confirm first**: the idea or customer ask, the user problem, available evidence (research, data, feedback), constraints and deadlines.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | pm-research-synthesis | No research material was provided, or a synthesis exists and its inputs are unchanged |
| 2 | pm-product-brainstorm | The direction is already decided |
| 3 | pm-competitive-brief | Competition does not shape this decision |
| 4 | pm-write-spec | Never skip in this playbook |
| 5 | pm-spec-review | Never skip if a spec was written |

Steps 1 to 3 inform step 4. Steps 2 and 3 can run in parallel where the platform supports it.

**Correction cycle usually fixes**: unmeasurable goals, missing acceptance criteria, missing non-goals, unaddressed privacy or accessibility requirements.

**Possible handoffs**: Design for exploration of the main flows; Software Development for feasibility and estimates.

## 2. Spec review

**Confirm first**: the spec, the evidence behind it, and what the review is for (ready to build, ready for design, stakeholder sign-off).

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | pm-spec-review | Never |

If the user asks for fixes, the correction cycle rewrites the flagged sections using the guidance in `pm-write-spec`. Re-run `pm-spec-review` once as verification.

## 3. Quarterly roadmap

**Confirm first**: the current roadmap, the period, goals or OKRs, capacity, what changed since the last update.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | pm-metrics-review | No metrics data was provided, or the latest review is still valid |
| 2 | pm-roadmap | Never |
| 3 | pm-stakeholder-update | The change does not need communicating yet |

**Correction cycle usually fixes**: over-commitment against capacity, items without a "why", unowned dependencies, customer-facing dates that need removing.

## 4. Sprint planning

**Confirm first**: team availability, sprint length, the prioritized backlog, carryover and blockers.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | pm-sprint-planning | Never |

Verification: the planned load is at or below 80 percent of capacity and every item has an owner and acceptance criteria.

## 5. Metrics review

**Confirm first**: the data, the period, targets and known events.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | pm-metrics-review | Never |
| 2 | pm-roadmap | The user does not want priorities adjusted |

**Correction cycle usually fixes**: missing comparisons, attribution stated too strongly, findings without actions.

## 6. Stakeholder update

**Confirm first**: audience, update type, channel and the facts.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | pm-stakeholder-update | Never |

Verification: status color matches the facts; no unconfirmed commitments; the user is told which statements need approval before sending.

## Caching notes

- `pm-spec-review` and `pm-metrics-review` are cacheable: their results can be reused while the spec or data file and the requirement files are unchanged.
- Generative skills (brainstorm, spec writing, roadmap, sprint planning, updates) are not cached; their output depends on the conversation.
