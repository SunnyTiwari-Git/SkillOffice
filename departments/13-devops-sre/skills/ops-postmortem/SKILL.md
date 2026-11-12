---
name: ops-postmortem
description: "Writes a blameless postmortem after an incident: summary, impact, timeline, root cause and contributing factors (5 whys or similar), what went well and badly, and action items with owners and priorities, plus a quick format for minor incidents and a meeting agenda. Use after an outage or near miss, when asked to \"write the postmortem\", \"incident review\", \"RCA\", or to find patterns across past incidents."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "13-devops-sre"
---

# Postmortem

A postmortem turns an incident into lasting improvement. It asks what conditions allowed the failure, never who to blame. It ends with a small number of concrete, owned actions.

Load only the context this skill declares: `company.name`, `technical.stack`, `technical.deployment_process`, `operations.team_structure`, `operations.processes`, `regional.time_zone`, `regional.date_format`.

## When a postmortem is needed

SEV1 or SEV2 incidents, customer-facing outages longer than an agreed threshold, any data loss or security involvement, near misses that could have been severe, and novel failure modes. Minor incidents use the quick format.

## Inputs

- The incident record: timeline, actions, status updates (from `ops-incident-response` if it ran).
- Metrics, logs and alerts around the incident window.
- Changes made before the incident (deploys, configuration).
- Notes from people involved, if available.

Never invent timeline entries or causes. Mark gaps as unknown and list them as questions.

## Steps

1. **Rebuild the timeline** in UTC with local time alongside: first trigger, detection, declaration, each action, mitigation, resolution. Note detection delay and time to mitigate.
2. **State the impact** in numbers where known: duration, users or requests affected, data affected, business impact. Say "unknown" rather than estimate silently.
3. **Find causes, plural.** Use 5 whys or a contributing-factors list. Stop at system and process conditions (missing test, unsafe default, unclear runbook), not at a person. "Human error" is never a root cause; ask why the system allowed it.
4. **What went well, what went badly, where we got lucky.** Luck reveals risks that will return.
5. **Actions.** Few and specific, each with an owner role, priority (P0 to P2) and a type: prevent, detect, mitigate or process. Dates are proposed for the team to confirm, not committed. Link each action to a cause.
6. **Blameless language check.** Replace names with roles; replace "X forgot" with "the process did not require"; remove speculation about intent.
7. **Patterns.** If earlier postmortems exist, note repeat causes.

Templates and the meeting agenda: [references/templates.md](references/templates.md).

## Rules

- Draft only. The team reviews and publishes it.
- No customer personal data, secrets or credentials in the document. For security incidents, coordinate with the Cybersecurity department and the company's legal contact before sharing widely.

## Output

The postmortem document (full or quick format) plus open questions for the review meeting.

## In a managed run

Return the document. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`); record action items as `issue_opened` events with their owner role.

## Handoff

End with a handoff (under 400 words): Done, Decisions (causes agreed in draft), Changed files (postmortem document), Tests and checks (none), Open issues (timeline gaps, unconfirmed causes), Next (action items routed to software development, QA or this department).
