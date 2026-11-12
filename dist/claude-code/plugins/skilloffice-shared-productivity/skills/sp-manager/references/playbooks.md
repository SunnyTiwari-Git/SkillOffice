# Shared Productivity playbooks

Each playbook lists inputs to confirm, the default skill order, when to skip a skill, and what the correction cycle usually fixes. Always follow the core orchestration protocol: plan first, run only what is needed, one correction cycle, one report. Nothing is sent, scheduled or shared; outputs are drafts.

## 1. Meeting to follow-up

**Confirm first**: the meeting date (needed to turn "by Thursday" into a date), the attendee list if available, and who the follow-up goes to.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sp-meeting-notes | Never |
| 2 | sp-task-planning | The user only wants minutes |
| 3 | sp-email-draft | No follow-up message was requested |

**Correction cycle usually fixes**: an action item dated without a known meeting date, a suggestion recorded as a decision, a follow-up email that omits unowned actions.

**Report includes**: decisions, action items with and without owners, open questions, the follow-up draft and the gaps the user must fill before sending.

## 2. Research brief

**Confirm first**: the question, the material to use, and whether the platform's own search may be used.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sp-research-brief | Never |
| 2 | sp-summarize | The brief is already short enough |

**Correction cycle usually fixes**: a claim without a source, a conflict presented as settled, confidence stated too high for an old or informal source.

## 3. Document with review

**Confirm first**: document type, reader, purpose, source facts and length.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sp-document-drafting | Never |
| 2 | sp-writing-review | The user asked for an outline only |

**Correction cycle usually fixes**: the main point buried, jargon, missing `[TO CONFIRM]` markers, tone off for the reader.

## 4. Presentation outline

**Confirm first**: goal, audience, time available, source material.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sp-presentation-outline | Never |
| 2 | sp-writing-review | The user wants a rough outline only |

**Correction cycle usually fixes**: topic titles instead of assertion titles, too many messages on one slide, figures without a source.

## 5. Translation with review

**Confirm first**: target language and region, glossary, whether the text is legal, medical or safety related.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sp-translate-localize | Never |
| 2 | sp-writing-review | The target language is one the platform cannot review reliably; say so |

**Correction cycle usually fixes**: an ambiguous date, a unit converted without the original, a product name translated by mistake.

## 6. Weekly task planning

**Confirm first**: time available, fixed deadlines, whether a `TASKS.md` file should be kept.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | sp-task-planning | Never |
| 2 | sp-email-draft | No follow-ups for stale waiting items were requested |

**Correction cycle usually fixes**: an overloaded week with no trade-offs named, a commitment to someone dropped silently, a task with no next step.

## Routing reminders

Before running any playbook, check whether the request belongs to a specialist department (see the handoff table in `SKILL.md`). A meeting about a contract still gets clean notes here, but drafting the contract reply goes to Legal (04).
