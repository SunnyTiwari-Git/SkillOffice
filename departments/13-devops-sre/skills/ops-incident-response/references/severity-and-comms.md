# Severity and communication

## Severity levels

Adapt the response times to the company's own process (`operations.sops`) if it defines them.

| Level | Impact | Example | Response |
| --- | --- | --- | --- |
| SEV1 | Service down for most users, data loss or security breach | Checkout fails for everyone | Immediately, all hands, updates every 15 minutes |
| SEV2 | Major feature broken or heavy degradation | Search errors for 30% of users | Within 15 to 30 minutes, updates every 30 minutes |
| SEV3 | Minor feature affected, workaround exists | Export slow for some users | Within a few hours |
| SEV4 | Cosmetic or very low impact | Typo on an error page | Next business day |

When unsure, pick the higher severity; downgrading later is cheap.

## Roles

| Role | Job |
| --- | --- |
| Incident commander | Owns decisions and coordination; does not debug |
| Communicator | Writes and sends updates on the cadence |
| Responders | Investigate and carry out approved actions |
| Scribe (optional) | Keeps the timeline |

## Internal status update

```markdown
## Incident update: <short title>
Severity: SEV<n> | Status: Investigating / Identified / Monitoring / Resolved
Impact: <who and what is affected, how many>
Last updated: <time with time zone>

What we know: <facts only, marked Observed or Inferred>
What we are doing: <current action and who is doing it>
Next update: <time>
```

## Customer-facing update (draft for approval)

```markdown
We are investigating an issue affecting <feature>. Some customers may <symptom>.
Our team is working on a fix. Next update by <time and time zone>.
```

Plain language, no internal system names, no blame, no promised fix times unless the team is confident. A person approves and posts it.

## Timeline format

| Time (UTC) | Local time | Event | Who |
| --- | --- | --- | --- |
| 14:02 | 07:02 | High error rate alert fired | Monitoring |
| 14:05 | 07:05 | SEV2 declared, commander assigned | <role> |
| 14:11 | 07:11 | Rolled back release 2.4.1 (approved by commander) | <role> |
