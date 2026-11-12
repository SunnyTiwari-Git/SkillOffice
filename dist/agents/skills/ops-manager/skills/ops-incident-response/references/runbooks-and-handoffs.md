# Runbooks and handoffs

## Runbook template

```markdown
# Runbook: <failure, for example "Checkout API returning 5xx">

| Field | Value |
| --- | --- |
| Service | <service> |
| Owner | <team> |
| Last verified | <date> |
| Review | After every SEV1 or SEV2 involving this service |

## Quick checklist
- [ ] 1. Declare severity and open the incident channel
- [ ] 2. Check service health dashboard (section 3)
- [ ] 3. Check recent deploys and flags (section 3)
- [ ] 4. Roll back if a recent change is suspect (section 4)
- [ ] 5. Send first update
- [ ] 6. Escalate if not mitigated within <n> minutes

## 1. Impact
What users see; which journeys break; business impact.

## 2. Detection
Alerts that fire, dashboards to open (links).

## 3. Triage
Each step: command, precondition, expected output, if it fails.

## 4. Mitigation
Each option with when to use it, the exact steps, how to verify, how to undo.
Destructive steps: dry run first, expected counts, approval required.

## 5. Escalation
Who to call next, how, and after how long.

## 6. Communication
Update templates and cadence.

## 7. After the incident
Postmortem criteria; where to record the timeline.
```

## Writing for a tired responder

- Numbered steps, one action each.
- Copy-ready commands with placeholders clearly marked.
- State what "good" output looks like.
- Say what to do when a step fails.
- Put warnings before destructive commands, with a read-only check first.
- Link dashboards and logs directly.

## Shift handoff template

```markdown
# On-call handoff: <date and time with time zone>
Outgoing: <role or name> | Incoming: <role or name>

## Active incidents
<each: severity, status, next action, links> or "None"

## Ongoing investigations
<each: what, current theory, next step> or "None"

## Recent changes
<deploys, configuration changes in the last 24 to 48 hours> or "None"

## Known issues and workarounds
<each> or "None"

## Upcoming events
<maintenance windows, launches, expected traffic peaks> or "None"

## Checks before outgoing leaves
- [ ] Incoming received a test alert
- [ ] Incoming has access to dashboards and runbooks
- [ ] Questions answered
```

## Mid-incident handoff

Add: current severity and commander, the latest status update, actions taken with times, actions in progress, the leading theory and evidence, and the next decision point. The outgoing responder stays reachable for at least 15 minutes.
