# IT Operations playbooks

Each playbook lists inputs to confirm, the default skill order, when to skip a skill, and what the correction cycle usually fixes. Always follow the core orchestration protocol: plan first, run only what is needed, one correction cycle, one report. Nothing is changed on a real system; outputs are tickets, checklists and drafts for an IT admin.

## 1. New joiner

**Confirm first**: start date and time from HR, role or code, team, location or remote, and the systems in use.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | it-joiner-mover-leaver | Never |
| 2 | it-access-request | The role baseline covers everything requested |

**Correction cycle usually fixes**: admin or "same as" access, missing MFA from first sign-in, device not enrolled or encrypted.

**Possible handoffs**: HR (02) for dates; Procurement (17) for devices and seats.

## 2. Leaver

**Confirm first**: last day and time from HR, planned or immediate, data-retention rules, and who takes over files and accounts.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | it-joiner-mover-leaver | Never |
| 2 | it-saas-management | No paid seats to cancel or reuse |

**Correction cycle usually fixes**: sessions and tokens not revoked, shared secrets not rotated, no named owner for files, wipe planned before data is preserved, a request to hand the leaver's password to a manager (refused; documented HR or legal approval route offered).

**Possible handoffs**: HR (02) and Legal (04) for retention and approval to access data; Cybersecurity (14) if data theft is suspected.

## 3. Access request

**Confirm first**: who, what system, what tasks, how long, and the requester's verified identity.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | it-access-request | Never |

**Correction cycle usually fixes**: excessive access, missing expiry, missing approver for high-risk access.

## 4. Ticket queue triage

**Confirm first**: service levels and support hours if they exist.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | it-helpdesk-triage | Never |
| 2 | The skill each ticket routes to (access, joiner or leaver, troubleshooting) | The user only wants the triage |

**Correction cycle usually fixes**: a security incident buried in the queue, replies asking for passwords, missing identity checks.

**Possible handoffs**: Cybersecurity (14) for incidents; DevOps (13) for product systems.

## 5. SaaS review

**Confirm first**: app list with seats, activity, cost, renewal and owner.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | it-saas-management | Never |
| 2 | it-asset-inventory | Software licenses are not in scope |

**Correction cycle usually fixes**: invented prices, apps holding customer data without SSO or MFA not flagged, renewals without notice dates.

**Possible handoffs**: Procurement (17) for renewals; Cybersecurity (14) for risky apps.

## 6. Backup and recovery review

**Confirm first**: critical systems and data, backup setup, last restore test, recovery targets.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | it-backup-recovery-review | Never |

**Correction cycle usually fixes**: SaaS data or laptops left out, restore testing assumed rather than checked, retention not checked against law.

**Possible handoffs**: Cybersecurity (14) for ransomware readiness; Legal (04) for retention.
