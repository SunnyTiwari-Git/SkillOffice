# Architecture decision record template

```markdown
# ADR-[number]: [Title]

**Status:** Proposed | Accepted | Deprecated | Superseded
**Date:** [Date in the project's regional format]
**Deciders:** [Who needs to sign off]

## Context
[The situation and the forces at play: requirements, constraints, deadlines.]

## Decision
[The change being proposed or made.]

## Options considered

### Option A: [Name]
| Dimension | Assessment |
| --- | --- |
| Complexity | Low / Medium / High |
| Cost | [Assessment] |
| Scalability | [Assessment] |
| Team familiarity | [Assessment] |
| Security and data | [Assessment] |

**Pros:** [List]
**Cons:** [List]

### Option B: [Name]
[Same format]

## Trade-off analysis
[Key trade-offs between the options, with clear reasoning.]

## Consequences
- What becomes easier
- What becomes harder
- What we will need to revisit

## Action items
1. [ ] [Implementation step]
2. [ ] [Follow-up]
```

## Tips

1. State constraints up front: "ship in 2 weeks" or "must handle 10,000 requests per second" shapes the answer.
2. Name every option, even when you lean one way. Balanced analysis needs explicit alternatives.
3. Include non-functional requirements: latency, cost, team expertise and maintenance burden matter as much as features.
