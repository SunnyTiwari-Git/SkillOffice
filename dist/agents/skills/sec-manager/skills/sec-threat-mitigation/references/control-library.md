# Control library and plan template

## Control types

| Type | Purpose | Examples |
| --- | --- | --- |
| Preventive | Stop the attack | Input validation, authorization checks, MFA, network segmentation, least privilege |
| Detective | Notice the attack | Audit logs, alerts on unusual logins, error-rate alerts, file integrity monitoring |
| Corrective | Recover and limit damage | Backups with tested restore, incident runbooks, key rotation, account lockdown |

## Layers (defense in depth)

| Layer | Example controls |
| --- | --- |
| Network and edge | Firewall rules, web application firewall, DDoS protection, TLS |
| Identity | SSO, MFA, short sessions, access reviews |
| Application | Validation, encoding, authorization per object, rate limits, CSRF defense |
| Data | Encryption at rest and in transit, field-level access, masking, retention limits |
| Host and runtime | Patching, hardened images, container isolation, secrets manager |
| Process and people | Secure code review, security training, change approval, incident response drills |

A threat is well defended when at least two layers or two control types cover it.

## Common threat to control pairs

| Threat | Preventive | Detective | Corrective |
| --- | --- | --- | --- |
| Credential stuffing | MFA, rate limits, breached-password check | Alert on many failed logins | Forced reset, session revocation |
| Object-level access (IDOR) | Ownership check per request, random ids | Log and alert on 403 or 404 spikes per user | Revoke exposed links, notify affected users via legal |
| Injection | Parameterized queries, validation | Database error-rate alerts | Patch, restore from backup if data changed |
| Secret leak | Secrets manager, push protection | Secret scanning in CI and repository | Rotate secret, review access logs |
| Ransomware or data destruction | Least privilege, patching | Unusual file-change alerts | Offline backups with tested restore |
| Denial of service | Rate limits, body and query limits, timeouts | Latency and error alerts | Autoscaling, incident runbook |

## Remediation plan template

| Order | Control | Threats covered | Type and layer | Effort | Risk reduction | Verification | Bucket |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Ownership check in invoice handler | TM-003 | Preventive, application | Small | High | API test with two accounts | Now |
| 2 | MFA for admin accounts | TM-001, TM-005 | Preventive, identity | Medium | High | Login test; access review | Now |
| 3 | Alert on failed-login spikes | TM-001 | Detective, application | Small | Medium | Simulated attempts in test env | Next |

Buckets: **now** (critical and quick wins), **next** (high), **later** (medium and low, or large effort). No calendar dates; the team schedules buckets.

## Coverage summary

For each layer, count threats covered and list threats with only one control. Report the percentage of critical and high threats with at least two controls.
