# Review criteria

| Criterion | Pass when | Common failures |
| --- | --- | --- |
| Accuracy | Every claim matches the provided facts, policy or help article | Guessed cause, wrong steps, outdated article |
| Answers the question | The customer's real need is addressed in the first paragraph | Answers a different question, buries the answer |
| Resolution and next steps | Clear actions, owners and agreed times | "We'll look into it" with no follow-up time |
| Empathy and tone | Acknowledges impact; matches brand voice | Defensive, robotic, over-apologetic, blames the customer |
| Policy compliance | Commitments are within written policy or marked approved | Promised refund, credit, discount, fix date or SLA exception |
| Privacy and security | No unnecessary personal data, no secrets, no internal links | Full account number, card digits, other customers' details, password in text |
| Clarity | Plain words, scannable, right length for the channel | Jargon, wall of text, three questions in one line |

## Severity examples

- **Critical**: the reply includes a full card number, a password, another customer's data, or instructions that weaken the customer's security.
- **High**: "We will refund you in full" without an approved decision; a wrong cause stated as fact; a promised fix date.
- **Medium**: the question is not answered; no next step; the tone clashes with the brand voice.
- **Low**: wording polish, a long sentence, a missing greeting.
- **Info**: an optional improvement, such as linking a related article.

## Rewrite rules

- Keep the agent's intent and the facts; change only what the finding requires.
- Replace unapproved commitments with "[NEEDS APPROVAL: ...]" or a policy-safe alternative ("I have asked our billing team to review a refund and will update you by [agreed time]").
- Mask personal data: show at most the last four characters of an identifier when one is needed.
