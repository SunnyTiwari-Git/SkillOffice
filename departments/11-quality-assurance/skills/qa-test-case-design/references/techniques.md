# Test design techniques with examples

## Equivalence partitioning

Split each input into groups the system should treat the same way, then test one value from each group.

Example: "Quantity must be a whole number from 1 to 99."

| Partition | Example value | Expected |
| --- | --- | --- |
| Valid 1 to 99 | 10 | Accepted |
| Below range | 0 | Rejected with message |
| Above range | 150 | Rejected with message |
| Not a number | "abc" | Rejected with message |
| Decimal | 2.5 | Rejected with message |
| Empty | (blank) | Rejected with message |

## Boundary value analysis

Bugs cluster at edges. For each boundary test just below, on and just above.

Same example: 0, 1, 2 and 98, 99, 100. For text length limits: max minus 1, max, max plus 1. For dates: the first and last day of a month, 29 February, the day a rule starts and ends, midnight in the user's time zone.

## Decision tables

List conditions as rows and every meaningful combination as columns, then the expected action.

Example: free shipping if the order total is at least the threshold OR the customer is a member, but never for oversized items.

| Condition | R1 | R2 | R3 | R4 | R5 |
| --- | --- | --- | --- | --- | --- |
| Total at or above threshold | Y | Y | N | N | Y |
| Member | N | Y | Y | N | Y |
| Oversized item | N | N | N | N | Y |
| Free shipping | Y | Y | Y | N | N |

Each column becomes one test case. Collapse columns whose outcome does not depend on a condition.

## State transition testing

Draw the states and the allowed moves, then test every allowed move once and the most likely illegal moves.

Example order states: Draft, Placed, Paid, Shipped, Delivered, Cancelled.

- Valid: Draft to Placed, Placed to Paid, Paid to Shipped, Shipped to Delivered, Placed to Cancelled.
- Invalid to try: Delivered to Cancelled, Draft to Shipped, Paid to Draft. Each should be refused with a clear message, and nothing should change.

## Pairwise combinations

When many options interact, testing every combination explodes (4 browsers x 3 plans x 3 roles x 2 languages = 72). Pairwise picks a small set in which every pair of values appears at least once, usually 10 to 15 cases here. Use a pairwise tool if the project has one, or build the set by hand for small cases. Add extra cases for combinations known to be risky.

## Scenario testing

Write end-to-end stories of a real user goal: "A returning customer adds two items, applies a code, changes the address and pays." Scenarios catch failures between steps that single-field tests miss. Keep a few per critical journey.

## Negative and security-minded cases to include by default

- Required fields missing; wrong types; very long input; special characters and emoji; leading and trailing spaces.
- A user acting on another user's record (authorization).
- Double submission and browser back after submit.
- Session expiry in the middle of a flow.
