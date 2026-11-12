# STRIDE and attack trees

## STRIDE: one question per category

| Category | Question to ask of each component and boundary | Usual control family |
| --- | --- | --- |
| Spoofing | Can someone pretend to be another user, service or device? | Authentication |
| Tampering | Can someone change data in transit, at rest, or in a request? | Integrity checks, validation |
| Repudiation | Can someone deny doing something because nothing proves it? | Audit logging |
| Information disclosure | Can someone read data they should not see? | Authorization, encryption, redaction |
| Denial of service | Can someone make the system slow or unavailable? | Rate limits, quotas, timeouts |
| Elevation of privilege | Can someone gain rights they should not have? | Authorization, least privilege |

Typical examples to test the questions against (use only those the evidence supports):

- Spoofing: stolen or fixated sessions, forged tokens, credential stuffing on login, unauthenticated internal service calls.
- Tampering: SQL or NoSQL injection, mass assignment of fields, changing ids or prices in requests, unsigned webhooks, upload content that does not match its type.
- Repudiation: no record of who changed a payment, deleted a record or changed a role; logs that users can edit.
- Information disclosure: objects reachable by guessing ids (IDOR), verbose errors, secrets in logs, data sent without encryption, overly broad API responses.
- Denial of service: unbounded request bodies or queries, expensive endpoints without limits, missing timeouts on outbound calls.
- Elevation of privilege: missing server-side role checks, trusting role claims from the client, admin functions reachable by normal users.

## Abuse path format

```text
AP-01  Goal: read another customer's invoices
  1. Sign up as a normal user.
  2. Open own invoice; note the numeric id in the URL.
  3. Change the id; the server returns the invoice without an ownership check.
  Impact: disclosure of other customers' billing data (personal data).
  Related: TM-003. Mitigation: ownership check in the invoice handler; random ids as defense in depth.
```

## Attack trees

Root = attacker goal. Children are ways to reach it.

- **OR** node: any one child is enough.
- **AND** node: all children are needed.
- **Leaf**: one concrete step.

Rate each leaf on effort (low, medium, high), skill needed (low, medium, high) and chance of being detected (low, medium, high). The cheapest path through the tree is where defense should start. Attach the mitigation that breaks each path to the node it breaks.

```text
Goal: take over an administrator account (OR)
  - Reuse leaked password (AND)
      - Admin reuses a password found in a public breach
      - No MFA on admin login
  - Phish the admin (OR)
      - Credential phishing page
      - Approve-fatigue on push MFA
  - Abuse password reset
      - Reset token is predictable or does not expire
Mitigations: MFA with phishing-resistant method for admins (breaks the first two branches), short-lived random reset tokens (breaks the third).
```

Attack trees are for planning defenses. Keep leaves at the level of "what weakness is used", never step-by-step instructions for exploiting a specific live system.

## Likelihood x impact

| | Impact low | Impact medium | Impact high |
| --- | --- | --- | --- |
| Likelihood high | medium | high | critical |
| Likelihood medium | low | medium | high |
| Likelihood low | low | low | medium |

Adjust one level down when a strong existing control is proven by evidence, and one level up for regulated or children's data.
