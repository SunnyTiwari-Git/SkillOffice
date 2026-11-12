---
name: ops-incident-response
description: "Guides a live technical incident from detection to resolution: severity, roles (incident commander, communications, responders), evidence-based triage that separates observed facts from inferences, safe mitigation proposals, status update drafts, timeline and on-call handoff. Also writes runbooks and on-call handoff documents ahead of time. Use when \"production is down\", an alert fires, a service is slow or unreachable, a status update is needed mid-incident, or a team wants runbooks or a handoff template."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "13-devops-sre"
---

# Incident Response

Restore service first, understand it fully later. Keep a timeline from the first minute, communicate on a fixed cadence, change one thing at a time, and never let a guess pass as a fact.

Load only the context this skill declares: `company.name`, `technical.stack`, `technical.hosting`, `technical.deployment_process`, `operations.team_structure`, `operations.tools`, `operations.sops`, `regional.time_zone`.

## Modes

- **Live incident:** triage, mitigate, communicate, hand off.
- **Runbook:** write or improve a runbook for a known failure.
- **On-call handoff:** write a shift or mid-incident handoff.

Ask which mode if it is not clear. In a live incident, start the timeline immediately and ask questions as you go.

## Live incident steps

1. **Declare and classify.** Severity from impact (see [references/severity-and-comms.md](references/severity-and-comms.md)): SEV1 full outage or data loss, SEV2 major degradation, SEV3 minor impact, SEV4 negligible. Name an incident commander and a communicator. Record start time in `regional.time_zone` and UTC.
2. **Stabilize first.** Ask what changed recently (deploys, configuration, traffic, dependencies). The fastest safe mitigation is often a rollback, a feature flag off, or failing over. Propose it; the responder decides and runs it.
3. **Triage with evidence.** Narrow the fault domain: user's device or network, DNS, network path, load balancer, application, dependency (database, queue, third party). Use read-only, bounded diagnostics (see [references/triage.md](references/triage.md)). Label every conclusion **Observed**, **Inferred** or **Unknown**. One failed probe is not a root cause.
4. **One change at a time.** For each action: what, why, expected effect, how to undo, who approved, time. Log it in the timeline.
5. **Communicate on a cadence.** Internal update every 15 to 30 minutes for SEV1 and SEV2, even when nothing changed: status, impact, what is being done, next update time. Draft customer-facing messages for the user to approve; never post them yourself.
6. **Confirm resolution.** Metrics back to normal for an agreed period, key user journeys verified, follow-up risk noted. Move to monitoring, then resolved.
7. **Hand off and follow up.** Use the handoff template if responders change. Schedule a postmortem (`ops-postmortem`) for SEV1, SEV2, data loss, security involvement and near misses.

## Rules

- Propose commands; do not run anything that changes production (restarts, rollbacks, scaling, configuration, DNS, firewall, VPN) without the responder's explicit approval for that specific command.
- Diagnostics are read-only and bounded (fixed counts and timeouts). Never send state-changing requests to services while diagnosing.
- If the incident may involve a security breach or personal data exposure, say so immediately, preserve evidence, and bring in the Cybersecurity department and the company's legal contact; breach notification deadlines may apply.
- Never put secrets, customer personal data or credentials in updates, timelines or memory.

## Runbook and handoff modes

Runbooks follow the structure in [references/runbooks-and-handoffs.md](references/runbooks-and-handoffs.md): quick checklist at the top, written for someone tired at 3 AM, each command with a precondition, expected output and what to do if it fails, destructive steps marked with a dry run first, owner and last-verified date. Handoffs list active incidents, ongoing investigations, recent changes, known issues and upcoming events, with "none" written explicitly when empty.

## Output

Live: severity, current status, timeline, actions taken, proposed next action with its undo, drafted updates. Runbook or handoff: the document.

## In a managed run

Return the incident record or document. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`), batching timeline events at milestones. This skill is never served from cache.

## Handoff

End with a handoff (under 400 words): Done, Decisions (severity, mitigations chosen), Changed files (runbook or incident notes), Tests and checks (diagnostics run and results), Open issues, Next (`ops-postmortem`).
