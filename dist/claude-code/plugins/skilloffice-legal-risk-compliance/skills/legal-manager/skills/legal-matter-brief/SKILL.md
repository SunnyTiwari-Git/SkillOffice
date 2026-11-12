---
name: legal-matter-brief
description: "Writes a plain-English brief for executives or a meeting: what a contract, dispute, compliance issue or legal incident is about, where it stands, the key risks, the decisions needed and the open questions, from the documents and notes the user provides. Also prepares legal meeting briefs (negotiations, board or committee sessions, regulator meetings) and tracks the resulting action items. Use when someone needs to understand a legal matter quickly or prepare for a meeting with legal content."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "04-legal-risk-compliance"
---

# Matter Brief

Explain a legal matter so a busy decision-maker understands it in two minutes, and prepare people for meetings where legal points will come up.

> **Not legal advice.** A brief summarizes the material provided. A qualified lawyer licensed in the relevant jurisdiction must review it before anyone relies on it for a decision.

Load only the context this skill declares: `company.name`, `operations.team_structure`, `regional.jurisdictions`, `regional.date_format`, `regional.time_zone`.

## Modes

1. **Matter brief:** one contract, dispute, compliance issue or incident.
2. **Meeting brief:** preparation for a negotiation, board or committee meeting, vendor call or regulator meeting.
3. **Action items:** a clean list of owners and dates after a meeting.

## Steps

1. **Work only from what is provided:** documents, notes, findings from other legal skills, and the user's account. List the sources used and anything missing.
2. **Matter brief:** summary (three sentences), background, current status, key terms or facts, risks (with ratings from `legal-risk-assessment` if available), decisions needed with options, open questions, recommended next steps, and gaps in the information.
3. **Meeting brief:** meeting purpose and the user's role, participants and what they care about (only from information provided), agenda, background, open issues, talking points, questions to raise, decisions needed, positions not to concede in a negotiation, and preparation gaps. For regulator or dispute meetings, add a note that counsel should attend or approve the talking points, and that nothing should be admitted or promised in the meeting.
4. **Incidents:** if the matter is a developing incident (data breach, threatened claim, regulator inquiry), put urgent actions first: preserve evidence, involve counsel, check notification questions with counsel, and flag that some legal deadlines can be short.
5. **Action items:** each item specific, with exactly one owner, a date in `regional.date_format` and its type (legal, business, external, follow-up meeting).

## Rules

- Never fill gaps with assumptions about people, motives or facts; mark them as gaps.
- Never invent laws, case outcomes, deadlines or market comparisons.
- Mark briefs on disputes or legal advice "Confidential, prepared for counsel review".
- Never send, circulate or schedule anything; the user does.
- Keep matter details and personal information out of memory; store only the run id and the brief's title.

## In a managed run

When `legal-manager` runs this skill, return the brief or action list. Briefs are not reused between runs. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (mode, sources used), Decisions (framing choices), Changed files (none), Tests and checks (facts checked against sources), Open issues (gaps, decisions needed), Next (counsel review, the meeting, or follow-up skills).
