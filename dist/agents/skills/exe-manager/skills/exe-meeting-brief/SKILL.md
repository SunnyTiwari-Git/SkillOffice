---
name: exe-meeting-brief
description: Prepares an executive briefing or leadership meeting pack with a headline summary, overall red, amber or green status, key metrics, accomplishments, work in progress, risks with owners, decisions needed and an agenda that puts decisions first. Use when the user needs a weekly or monthly leadership update, a status report for executives, a pre-read for a leadership meeting, or an agenda focused on the decisions to make.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "01-executive-strategy"
---

# Meeting Brief

Give busy leaders what they need in the first three lines, and run meetings around decisions, not updates.

## Inputs

- The meeting or report: audience, period, length of the meeting.
- Status information the user provides: project updates, metrics, the `exe-kpi-review` output, risks and decisions waiting. Never invent progress, dates or figures.

Context used from the active profile: `company.name`, `operations.team_structure`, `regional.date_format`.

## Steps

1. **Headline.** Three to four sentences: what is on track, what needs attention, the key win.
2. **Overall status.** Green (on track), amber (at risk) or red (off track), with one reason.
3. **Key metrics.** Table: metric, target, actual, trend, status.
4. **Accomplishments** since the last meeting, each with evidence.
5. **In progress.** Table: item, owner, status, expected date (as given by the owner, not promised), notes.
6. **Risks and issues.** Table: risk, impact, mitigation, owner.
7. **Decisions needed.** Table: decision, why it matters, deadline, recommendation.
8. **Agenda.** Decisions first, then risks needing discussion, then information items that could have been read in advance. Give each item a time and an owner.
9. **Next period priorities.** Up to three.

See [the brief template](references/brief-template.md).

## Output

The brief in the structure above, ready to share as a pre-read once the user approves it.

## Quality checklist

- [ ] The headline can be read alone and still be useful.
- [ ] Every risk and decision has an owner.
- [ ] The agenda puts decisions before updates.
- [ ] Bad news is stated plainly.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Drafts only: never send, post or schedule anything. Individual performance or personnel matters belong in a private HR conversation, not a shared brief.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): status, decisions needed and agenda. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
