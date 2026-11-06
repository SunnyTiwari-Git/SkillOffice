# Sequence templates and benchmarks

Starting frameworks. Adapt length and content to the goal and audience.

| Sequence | Length | Typical flow |
| --- | --- | --- |
| Welcome (after signup) | 5-7 emails over 12-14 days | Deliver what was promised; quick win; why we exist; social proof; handle an objection; key feature; conversion ask |
| Onboarding (product users) | 5-7 emails over 14-21 days | Welcome and first step; getting-started help; core feature; success story; check-in; advanced tip; upgrade or next step. Support in-product onboarding rather than duplicating it |
| Lead nurture (before sale) | 4-8 emails over 2-4 weeks | Deliver the resource; expand on the topic; problem deep dive; solution framework; case study; differentiation; objection handler; direct offer |
| Re-engagement | 3-4 emails over 10-14 days, after 30-60 days inactive | Genuine check-in; what is new; incentive; last chance to stay subscribed |
| Win-back (cancelled or lapsed) | 3-5 emails over about 30 days | Ask what went wrong; what is new since they left; offer; feedback request; goodbye with the door open |
| Product launch | 4-6 emails over 2-3 weeks | Teaser; launch details; feature spotlight; early results; limited-time bonus; reminder |
| Event follow-up | 3-4 emails over 7-10 days | Thanks with recording or takeaways; resource roundup; related next step; feedback survey |
| Upgrade or upsell | 3-5 emails over 2-3 weeks | Usage milestone; limit they are hitting; upgrade benefits with proof; incentive; plan comparison |
| Educational drip | 5-8 emails over 4-6 weeks | What they will learn; lessons 1-3; practical exercise; resource roundup; graduation and next step |

## Subject line shapes

- Question: "Still struggling with {problem}?"
- How-to: "How to {outcome} in {timeframe}"
- Number: "3 ways to {benefit}"
- Direct: "{First name}, your {thing} is ready"
- Story: "The mistake we made with {topic}"

## Rough benchmarks (vary widely by industry, list quality and privacy-related open tracking changes)

| Metric | Onboarding | Lead nurture | Re-engagement | Win-back |
| --- | --- | --- | --- | --- |
| Open rate | 50-70% | 20-30% | 15-25% | 15-20% |
| Click rate | 10-20% | 3-7% | 2-5% | 2-4% |
| Conversion rate | 15-30% | 2-5% | 3-8% | 1-3% |
| Unsubscribe rate | under 0.5% | under 0.5% | 1-2% | 1-3% |

## Flow diagram example

```text
[Trigger] --> Email 1 (day 0)
                |
          Clicked CTA? --yes--> [EXIT: converted]
                |
                no
                v
           Email 2 (day 3)
                |
          Opened, no click? --yes--> Email 2b softer ask (day 5)
                |                          |
                no                         v
                v                     Email 3 (day 7)
           Email 3 (day 7) ------------> [EXIT: sequence complete]
```

## Setup checklist for any email tool

1. Create the automation or flow.
2. Set the entry trigger.
3. Add each email with its delay.
4. Configure branches, exits and suppression.
5. Set up tracking for the chosen metrics.
6. Send test emails to internal addresses before turning the flow on.
