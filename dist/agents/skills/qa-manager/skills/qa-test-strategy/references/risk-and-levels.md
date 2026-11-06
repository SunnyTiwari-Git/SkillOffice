# Risk scoring and test level selection

## Risk grid

Score each area 1 to 3 on likelihood and impact. Risk = likelihood x impact (1 to 9).

| Likelihood signal | Score |
| --- | --- |
| Simple, stable, well covered, rarely changed | 1 |
| Moderate complexity or occasional changes | 2 |
| Complex logic, new technology, frequent changes, history of bugs, many integrations | 3 |

| Impact signal | Score |
| --- | --- |
| Cosmetic, easy workaround, few users | 1 |
| Feature broken for some users, moderate cost to fix | 2 |
| Money, personal data, safety, legal exposure, or most users blocked | 3 |

Risk 7 to 9: test at several levels, automate the regression, include negative and boundary cases, review before release.
Risk 4 to 6: automated tests at the lowest effective level plus a short exploratory session.
Risk 1 to 3: light coverage; accept the residual risk and say so.

## Picking the lowest effective level

| Failure type | Lowest level that catches it |
| --- | --- |
| Wrong calculation or rule | Unit |
| Wrong query, mapping or serialization | Integration |
| Two services disagree on a message or API shape | Contract |
| A user journey breaks across screens or services | End-to-end |
| Slow under load, leaks memory | Performance |
| Unauthorized access, injection | Security tests plus code review |
| Unusable with a keyboard or screen reader | Accessibility checks plus manual testing |

## Signs the strategy is off

- Many end-to-end tests and few unit tests: slow, flaky suite ("ice-cream cone").
- High coverage numbers but bugs keep escaping in the same area: tests assert too little.
- Every test needs a full environment: missing seams for isolation.
- Nobody can say which tests protect the top three risks.
