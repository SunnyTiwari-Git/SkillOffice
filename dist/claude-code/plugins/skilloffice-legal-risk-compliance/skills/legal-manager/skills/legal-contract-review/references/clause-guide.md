# Clause guide for contract review

What to check in each common clause. The right answer depends on which side the user is on, the deal size and local law; use this as a checklist, not as rules. Mark anything that turns on local law as "confirm with counsel".

## Money and scope

- **Payment terms:** due date (for example net 30 versus net 60 or longer), what triggers payment (invoice, acceptance, milestone), acceptance periods that can delay payment indefinitely, late fees, taxes, price increase mechanism on renewals, invoicing rules (purchase order numbers, formats) that can delay payment on technicalities.
- **Scope and change control:** clear description of what is delivered, a written change process, acceptance criteria that are objective rather than "to the customer's satisfaction", and whether delays caused by the other side are handled fairly.

## Risk allocation

- **Limitation of liability:** the cap (fixed amount, multiple of fees, period of fees), whether it is mutual, what is carved out of the cap, whether indirect and consequential losses are excluded for both sides, and whether the cap is per claim or in aggregate. Watch for carve-outs so broad they remove the cap in practice, and caps so small (a few months of fees) that they do not cover realistic losses such as a data incident.
- **Indemnities:** who indemnifies whom and for what (IP infringement, data breaches, injury, breach of law), whether indemnities sit inside or outside the cap, the defense and settlement procedure, and indemnities for "any breach", which can turn a capped contract into an uncapped one.
- **Warranties and disclaimers:** what is promised, how long, and what is disclaimed.
- **Insurance:** required cover types and limits, and whether the company can actually obtain them.

## Intellectual property and data

- **IP ownership:** each side keeps what it owned before; who owns what is created; work-for-hire wording; carve-outs for the provider's existing tools and know-how; licence scope, territory and duration.
- **Feedback clauses:** perpetual, irrevocable rights over suggestions.
- **Use of the customer's data:** limits on using customer data for the provider's own purposes, such as "product improvement" or training models.
- **Confidentiality:** scope, exceptions, duration (two to five years is common; perpetual only for trade secrets), return or destruction with a retention exception for legal and backup copies.
- **Data protection:** whether a data processing agreement is needed (personal data processed on the customer's behalf), controller and processor roles, sub-processor notice and objection rights, breach notice to the customer fast enough for the customer to meet its own legal deadlines, transfers between countries and the mechanism used, deletion or return at the end, security commitments and audit rights. Name the laws that may apply for the stated jurisdictions (for example GDPR, the India DPDP Act, CCPA/CPRA, HIPAA for health data, PCI DSS for card data) and mark specifics for counsel.

## Term and exit

- **Term and renewal:** initial term, automatic renewal, and the notice window to stop renewal. Missed renewal windows are a common, expensive mistake; list the exact date.
- **Termination:** for convenience (is it mutual, what notice, what fees), for cause (cure period, definition of material breach), payment for work in progress, transition help, and survival clauses that keep obligations alive indefinitely.

## Restrictions

- **Non-compete, exclusivity, most-favoured pricing:** scope, duration and the definition of competitor. These are rarely appropriate in ordinary supply contracts.
- **Non-solicitation:** a narrow employee non-solicit is common; broad industry restrictions are not.
- **Assignment and change of control:** whether the contract survives a sale of either company.

## Disputes

- **Governing law, venue and dispute process:** which law, which courts or arbitration and under what rules, whether there is an escalation step first, jury or class action waivers, and who pays legal costs.

## Rating guide

| Rating | Meaning | Action |
| --- | --- | --- |
| Green | Matches or beats the baseline | Note briefly, or skip plain boilerplate |
| Yellow | Commonly negotiated, outside the preferred position | Redline plus fallback |
| Red | Material risk or escalation trigger (for example uncapped liability, transfer of existing IP, personal data with no protection terms, broad non-compete) | Explain the risk and exposure; route to counsel and a business decision-maker |

## Redline format

```
Clause: [section number and name]
Current language: "[exact quote]"
Proposed redline: "[replacement language]"
Rationale: [one or two sentences suitable to share with the other side]
Priority: [must-have / should-have / nice-to-have]
Fallback: [acceptable compromise if the first ask is refused]
```
