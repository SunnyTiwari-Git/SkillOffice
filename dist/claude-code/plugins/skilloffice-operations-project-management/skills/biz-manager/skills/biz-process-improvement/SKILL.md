---
name: biz-process-improvement
description: Analyzes a business process to find bottlenecks and waste such as waiting, rework, unnecessary handoffs, over-processing and avoidable manual work, then designs a better future state with measurable improvements, an implementation plan and the metrics to prove it worked. Use when the user says a process is slow, error-prone or has too many steps, wants to streamline a workflow, or asks how to improve how work gets done.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "16-operations-project-management"
---

# Process Improvement

Fix the process, not the people: measure where time and quality are lost, change the design, and prove the change worked.

## Inputs

- The current process (an SOP from `biz-process-documentation`, a description, or examples of recent cases).
- Any measurements: cycle time, waiting time, error or rework rate, volume, cost. Ask for them; if none exist, propose how to measure before changing much.
- The goal: faster, fewer errors, cheaper, better experience, or compliance.

Context used from the active profile: `operations.processes`, `operations.sops`, `operations.tools`, `operations.team_structure`, `regional.currency`.

## Steps

1. **Map the current state.** Steps, decision points, handoffs, who does each step, and for each step the working time and the waiting time where known.
2. **Find the bottleneck.** The step that limits throughput or holds the most waiting time. Improving anything else first rarely helps.
3. **Identify waste**, quoting the step:
   - Waiting: queues and approvals.
   - Rework: steps that fail and repeat, with the cause.
   - Handoffs: each one a chance of delay or loss.
   - Over-processing: steps or approvals that add no value or duplicate a control.
   - Avoidable manual work: copy-paste, re-keying, chasing.
4. **Root cause.** For each major problem, ask why until reaching something the team can change (policy, design, tool, training), not a person.
5. **Design the future state.** Remove, combine, simplify, parallelize independent steps, add checks early (catch errors at the source), and automate only what is stable and repeatable. Keep necessary controls (approvals for money, access and data); never remove a control without naming the risk and getting approval.
6. **Estimate impact.** For each change: expected effect on cycle time, error rate, cost or effort, with the arithmetic and assumptions. Label estimates as estimates.
7. **Implementation plan.** Quick wins first, then larger changes; owners, draft dates, what to pilot, and how to roll back.
8. **Measure.** Baseline, target and how the metric will be checked after the change.

## Output

1. Current-state map with the bottleneck and waste marked.
2. Before and after comparison table.
3. Recommended changes ranked by impact and effort, with estimated benefits and assumptions.
4. Implementation plan and measurement plan.

## Quality checklist

- [ ] The bottleneck is identified and addressed first.
- [ ] Root causes are design, policy, tool or training issues, not blame.
- [ ] Benefits show their arithmetic and are labeled as estimates.
- [ ] No control is removed without naming the risk and an approver.
- [ ] A baseline and target exist for the main metric.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Recommendations only: never change systems, permissions or live processes. Changes that affect people's roles or workload go to the process owner and HR (02); system changes go to IT Operations (12). Never recommend removing financial, access or data protection controls without a named approver.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): bottleneck, top three changes with estimated impact and the measurement plan. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
