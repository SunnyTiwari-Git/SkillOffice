# Policy catalog

## Core set for small and mid-sized companies

| Policy | Key rules to cover |
| --- | --- |
| Information security overview | Who owns security, how policies are approved and reviewed, how to report a concern |
| Access control and MFA | Least privilege, MFA on email, code hosting, cloud and finance tools, joiner-mover-leaver process, quarterly access review, shared accounts avoided |
| Passwords | Password manager for everyone, unique passwords, minimum length over complexity rules, no password sharing over chat or email |
| Acceptable use | Allowed and forbidden uses of company systems and data, personal devices, AI tools and what data may be pasted into them |
| Device and remote work | Disk encryption, screen lock, automatic updates, approved software, lost-device reporting, public Wi-Fi guidance |
| Data classification and handling | Classes (public, internal, confidential, restricted), handling rules per class, where each class may be stored and shared, retention and deletion |
| Incident response | What counts as an incident, how to report it, roles, first steps, evidence handling, communication approvals, post-incident review |
| Vendor and third-party security | Assessment before purchase scaled by data access, contract terms, offboarding, list of critical vendors |
| Backup and recovery | What is backed up, how often, where, encryption, restore testing schedule, recovery targets |
| Secure development | Code review, dependency management, secrets handling, security testing, release approval, separation of environments |
| Logging and monitoring | What is logged, retention, who reviews alerts, protection of logs |

## Add when a driver requires it

Business continuity, cryptography and key management, physical security, change management, mobile device management, privacy and data subject requests (with legal), payment card handling (with the payment provider and a qualified assessor), clinical or health data handling (with legal).

## Standard policy structure

```markdown
# <Policy name>

Version: 0.1 (draft) · Owner: <role> · Approved by: <role> · Review: every 12 months

## Purpose
One or two sentences.

## Scope
Who and what it covers.

## Rules
1. <Rule written as an action people can take> (must)
2. ...

## Exceptions
How to request one, who approves, how long it lasts.

## Enforcement
What happens if rules are not followed, in proportion.

## Related documents
Links to other policies and procedures.

## Version history
| Version | Change | Approved by |
```

## Review checklist

- Each policy has an owner, an approver and a review cadence.
- Rules match how the company actually works, or are marked as new commitments.
- No contradictions between policies (for example retention periods).
- Tools named in policies are the tools in use.
- Staff can find the policies and know how to report incidents.
- Statements about laws or certifications are marked for legal review.
