# Reply guide

## Tone by situation

| Situation | Tone | Characteristics |
| --- | --- | --- |
| Good news | Warm | Positive, tied to their goal, suggests a next step |
| Routine update | Professional | Clear, brief, friendly |
| Technical answer | Precise | Accurate, structured, patient |
| Delay | Accountable | Honest, sorry once, specific about what happens next |
| Bad news | Candid | Direct, empathetic, offers alternatives |
| Outage or incident | Urgent | Immediate, transparent, regular updates |
| Escalation | Composed | Takes ownership, presents a plan |
| Billing | Precise | Factual, empathetic, resolution-focused |

## Relationship stage

- **New customer**: more formal, more explanation, point to helpful resources.
- **Established**: warmer and more direct; refer to shared history only if the user supplied it.
- **Frustrated or escalated**: acknowledge first, shorter feedback loops, concrete plan.

## Writing rules

Do:

- Use active voice ("We are investigating", not "This is being investigated").
- Use "I" for personal commitments and "we" for team commitments.
- Use the customer's words for the problem, not internal terms.
- Give specific times when they are agreed, in `regional.date_format` and `regional.time_zone`.

Do not:

- Blame other teams, vendors or "the system".
- Hedge so much that the answer is lost.
- Use buzzwords or more than one exclamation mark.
- Copy people who do not need to be in the conversation.

## Situation approaches

- **Product question**: answer first, link the help article, offer more help. If unknown, say so and give an agreed time to follow up.
- **Bug or issue**: acknowledge impact, state what is known, offer a workaround, set an update rhythm.
- **Escalation**: acknowledge severity, own it, present the plan and the accountable owner (as supplied), offer a call if severity warrants.
- **Bad news** (delay, won't fix, end of a feature): say it plainly early, explain why honestly, acknowledge their impact, offer alternatives and a path forward.
- **Declining a request** (feature, discount, exception): acknowledge the reason behind it, be honest about the decision, explain without dismissing, offer alternatives, leave the door open.
- **Follow-up after silence**: remind them briefly what was sent and what is needed, make it easy to answer later.

## Escalation note format (internal, when a reply should not go out without a senior decision)

```text
ESCALATION: [account or customer reference] - [one-line summary]
Urgency: [critical / high / medium]
Customer impact: [what is broken for them]
History: [2 to 3 sentences]
Tried so far: [actions]
Decision needed: [specific ask]
Needed by: [time]
```
