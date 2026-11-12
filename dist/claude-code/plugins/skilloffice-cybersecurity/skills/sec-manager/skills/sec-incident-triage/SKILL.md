---
name: sec-incident-triage
description: "Guides first response to a suspected security incident at the user's own organization: confirm what happened, contain without destroying evidence, preserve logs and timelines, assess scope and affected data, decide severity, and organize communication. Flags breach-notification deadlines under GDPR, DPDP and other laws as questions for legal, never as legal conclusions, and hands off to legal and devops. Use when the user reports a possible breach, leaked credential, compromised account, ransomware, suspicious login, malware alert or data exposure."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "14-cybersecurity"
---

# Incident Triage

The first hours of an incident decide how bad it gets. This skill helps the user stay calm and methodical: understand, contain, preserve, assess, communicate. It guides people; it does not act on systems by itself.

Load only the context this skill declares: `company.name`, `company.size`, `company.markets`, `technical.hosting`, `technical.stack`, `operations.team_structure`, `operations.tools`, `operations.policies`, `regional.jurisdictions`, `regional.time_zone`.

## Scope and safety

For incidents affecting the user's own organization. Defensive actions only: no "hacking back", no accessing attacker infrastructure, no contacting the attacker or paying ransom without leadership and legal involvement. Every containment action that changes systems (disabling accounts, rotating keys, isolating machines, taking services offline) is a recommendation for the user to carry out or explicitly approve, because it can destroy evidence or disrupt the business. Secrets seen in logs are shown masked to their first 4 characters. Notification to regulators, customers or the public is decided by humans with legal advice.

## Steps

1. **Stabilize and record.** Start an incident log right away: who reported what, when (in `regional.time_zone`, with UTC), and every action taken. Name an incident lead. Recommend a separate communication channel if the normal one may be compromised.
2. **Understand.** What was observed, where, since when, and how it was detected. Separate facts from assumptions. Ask only the questions needed to decide the next step.
3. **Classify severity** using the guide in [references/triage-guide.md](references/triage-guide.md): data exposure, systems affected, ongoing activity, regulated or personal data, business impact.
4. **Preserve evidence before changing things.** Export or snapshot the relevant logs (identity provider, cloud audit logs, application, email), note hashes or timestamps, keep affected machines powered on but isolated from the network when possible, and avoid wiping or reimaging until evidence is saved.
5. **Contain.** Recommend the smallest effective actions: revoke sessions and reset credentials for affected accounts, rotate exposed keys, block indicators, isolate affected hosts, disable a compromised integration. Note the trade-off for each (evidence, downtime, tipping off an active attacker).
6. **Scope.** What systems, accounts and data could the attacker reach? Which data subjects and customers? Since when? Use the incident log and preserved evidence; mark unknowns.
7. **Notification questions for legal.** If personal data may be affected, list for legal review: the jurisdictions involved (from `regional.jurisdictions` and where affected people live), what is known about the data, and the notification deadlines that may apply (for example GDPR's 72-hour regulator notification, DPDP rules in India, US state breach laws, contractual duties to customers). Present these as questions with the clock start time, never as legal conclusions.
8. **Communicate.** Draft internal updates and holding statements for approval; nothing goes to customers, regulators, press or the public without leadership and legal sign-off.
9. **Recover and learn.** After containment: restore from known-good sources, monitor for recurrence, then schedule a blameless post-incident review (timeline, root cause, what worked, actions with owners).

## Output

An incident record: summary, timeline, severity with reasoning, evidence preserved, containment recommendations (done, pending approval, not recommended), scope and affected data, notification questions for legal with clock start times, communication drafts for approval, and next steps. Security weaknesses that enabled the incident are reported in the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 14-cybersecurity/sec-incident-triage`.

## In a managed run

When `sec-manager` runs this skill, the incident record goes into the report. Containment and fixes are human actions or approved changes in the manager's single correction cycle. Results are never cached. Memory entries record what happened, not sensitive details: no secrets, no personal data of affected people. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (triage steps completed), Decisions (severity, containment chosen), Changed files (none), Tests and checks (evidence preserved and where), Open issues (unknowns, actions pending approval, legal questions), Next (legal for notification decisions, devops for recovery, `sec-threat-mitigation` for lasting fixes).
