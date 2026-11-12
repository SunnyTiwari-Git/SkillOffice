# Security requirement templates

## From business need to control

```text
Business need          ->  Security requirement            ->  Technical control
"Protect customer data"    "Personal data must be encrypted      "Database encryption at rest with
                            at rest"                              managed keys, rotated yearly"
```

Requirements state what must be true. Controls state how. Keep controls as suggestions so engineering can choose.

## Requirement table

| Id | Title | Statement | Type | Domain | Traces to | Priority | Acceptance criteria | Test ideas |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SR-001 | Invoice ownership | Only the invoice owner or an account admin must be able to download an invoice. | Functional | Authorization | TM-003 | Must | Owner gets 200; admin of the same account gets 200; any other user gets 404; anonymous gets 401 | API test with two accounts; try sequential ids |
| SR-002 | Login throttling | Login must lock further attempts for 15 minutes after 10 failures for one account within 15 minutes, and must not reveal whether the account exists. | Non-functional | Authentication | TM-007 | Must | 11th attempt blocked; same message for unknown and known emails | Automated attempt loop in test environment |
| SR-003 | Approved crypto | Passwords must be hashed with Argon2id or bcrypt using the platform's maintained library. | Constraint | Cryptography | Policy | Must | Code review shows only the approved library | Static check for other hash calls |

## Security user story

```text
Epic: Authorization

Story SR-001: Invoice ownership
As an account owner, I want invoice downloads restricted to people in my account,
so that other customers cannot read my billing data.

Acceptance criteria
- Given I am the owner, when I download my invoice, then I get the PDF.
- Given I belong to another account, when I request this invoice id, then I get 404 and nothing is logged as a success.
- Given I am not signed in, when I request any invoice, then I get 401.

Risk if not built: disclosure of other customers' billing data (TM-003, high).
Dependencies: account membership model.
```

## Traceability matrix

| Threat or obligation | Requirement ids | Covered? |
| --- | --- | --- |
| TM-003 Invoice IDOR | SR-001 | Yes |
| TM-007 Credential stuffing | SR-002, SR-004 | Yes |
| GDPR Art. 32 security of processing (confirm with legal) | SR-005, SR-006 | Partly |

## Domains checklist

Authentication, authorization, session management, input validation, output encoding, data protection and privacy, cryptography, secrets management, logging and monitoring, error handling, availability and abuse limits, file handling, third-party and supply chain, administration interfaces.

## Writing rules

- One requirement, one testable statement.
- Include the negative case (what must not happen).
- Numbers where they matter (time limits, attempt counts, key lengths), agreed with the team.
- No product or vendor lock-in in the statement; put examples in the control suggestion.
