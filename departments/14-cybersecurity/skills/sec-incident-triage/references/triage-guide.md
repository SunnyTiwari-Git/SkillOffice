# Incident triage guide

## Severity levels

| Level | Signs | Response |
| --- | --- | --- |
| SEV-1 critical | Confirmed access to sensitive or regulated data, ransomware, attacker still active, core service down, payment or health data involved | Incident lead now, leadership and legal informed immediately, containment within hours |
| SEV-2 high | Compromised account with access to important systems, exposed production secret, malware on a work device, suspected but unconfirmed data access | Incident lead now, legal informed if personal data may be involved |
| SEV-3 medium | Phishing email clicked but no credentials entered, exposed non-production secret, blocked attack with no impact | Handle within the working day, record it |
| SEV-4 low | Suspicious activity with no evidence of impact, policy violation without exposure | Record, review, learn |

Raise one level when personal data of many people, children's data, health data or payment data may be involved, or when the attacker may still be active.

## First questions

1. What did you see, where, and when did it start (best guess)?
2. Who else knows? Has anything been changed or deleted already?
3. Which accounts, systems or data could be involved?
4. Is it still happening?
5. Does it involve personal data, customer data, payment data or credentials?

## Evidence to preserve first

- Identity provider sign-in logs and audit logs (exports, with time range).
- Cloud provider audit logs and access logs for affected resources.
- Application and server logs for the time window.
- Email message headers for phishing (forward as attachment, do not just screenshot).
- A list of affected devices; keep them on and isolated where possible.
- The incident log itself, kept outside possibly compromised systems.

## Common containment actions and trade-offs

| Action | When | Trade-off |
| --- | --- | --- |
| Revoke sessions and reset password, enforce MFA | Compromised account | Attacker may notice; do it with evidence already saved |
| Rotate or revoke an exposed key | Leaked secret | Services using the key need the new value; plan the swap |
| Isolate a device from the network | Malware or ransomware | Keep it powered on to preserve memory evidence if possible |
| Block an IP or domain | Known attacker infrastructure | Easy to evade; not sufficient on its own |
| Disable an integration or app | Compromised third-party connection | Business process interruption |
| Take a service offline | Active data exfiltration or destruction | Downtime; leadership decision |

## Notification questions for legal (examples, confirm current rules)

- GDPR (EU and UK GDPR): notification to the supervisory authority without undue delay and, where feasible, within 72 hours of becoming aware of a personal data breach that poses a risk; notifying affected people when the risk is high.
- India DPDP: notification duties to the Data Protection Board and affected people under the Act and its rules.
- United States: state breach notification laws with different triggers and deadlines; sector rules for health and financial data.
- Contracts: customer agreements often require notice within a set time.
- Payment card data: duties to the payment provider and card brands.

Record when the organization became aware; many deadlines count from that moment. Legal decides whether and how to notify.

## Post-incident review agenda

Timeline, detection (how and how fast), response (what worked, what slowed us), root cause and contributing factors, what we will change (owner per action), what we tell customers (if anything, approved by legal).
