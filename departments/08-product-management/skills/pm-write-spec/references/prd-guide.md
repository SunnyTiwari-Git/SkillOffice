# PRD writing guide

## Sections

- **Problem statement**: who has the problem, how often, the cost of not solving it (user pain, business impact, competitive risk), grounded in evidence.
- **Goals**: 3 to 5 outcomes answering "how will we know this succeeded?". Separate user goals from business goals. Outcomes, not outputs: "reduce time to first value by 50%", not "build an onboarding wizard".
- **Non-goals**: adjacent capabilities that are out of scope for this version, each with a reason (low impact, too complex, separate initiative, premature).
- **Requirements**: P0 means the feature does not solve the core problem without it. P1 significantly improves it but the core works without it. P2 is out of scope now but should shape design so it stays possible later.
- **Open questions**: blocking (answer before starting) versus non-blocking; each with an owner.
- **Timeline**: hard deadlines (contracts, events, compliance dates), dependencies, phasing.

## User stories

Format: "As a [specific user type], I want [capability] so that [benefit]."

Good stories are independent, negotiable, valuable, estimable, small and testable.

| Mistake | Example | Fix |
| --- | --- | --- |
| Too vague | "I want it faster" | Name what should be faster and by how much |
| Prescribes the UI | "I want a dropdown" | Describe the need |
| No benefit | "I want to click a button" | Say what it achieves |
| Too large | "I want to manage my team" | Split into specific capabilities |
| Internal task | "We want to refactor the database" | That is a task, not a user story |

Include error states, empty states and boundary conditions, and every user type the feature serves.

## Prioritization (MoSCoW)

Must have (not viable without), Should have (important, fast follow), Could have (if time permits), Won't have this time (explicitly out). Challenge every must-have: "would we really not ship without this?"

## Success metrics

Leading (days to weeks): adoption rate, activation rate, task completion rate, time to complete, error rate, usage frequency.
Lagging (weeks to months): retention, revenue, satisfaction (NPS or CSAT), support ticket reduction, competitive win rate.
Targets are specific ("50% of eligible users within 30 days"), based on baselines, comparable features or explicit hypotheses, with a success threshold and a stretch target, a measurement method and an evaluation date.

## Acceptance criteria

Given [context], when [action], then [result]. Or a checklist. Cover happy path, errors, edge cases and negative cases (what must not happen). Each criterion must be independently testable.

## Scope creep

Signs: requirements added after approval, small additions piling up, "while we're at it" features, launch dates moving without re-scoping.
Defenses: explicit non-goals, every addition paired with a removal or a timeline change, clear v1 versus v2, review against the original problem, time-boxed investigations, a parking lot for good ideas.
