---
name: legal-risk-assessment
description: "Assesses legal, compliance and operational risks with a severity-by-likelihood matrix, keeps an enterprise risk register (owner, mitigation, status, review date) and recommends when to escalate to senior leadership or outside counsel. Use when asked 'what are the risks', to score a deal, contract, vendor, dispute or new initiative, to build or update a risk register, or to prepare a risk memo for leadership or the board."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "04-legal-risk-compliance"
---

# Risk Assessment

Score risks consistently, decide what needs attention now, and keep a register people can act on.

> **Not legal advice.** Risk scores are a structured judgment to support decisions. A qualified lawyer licensed in the relevant jurisdiction must review legal risks before the company relies on them, and anything rated high or critical goes to counsel and leadership.

Load only the context this skill declares: `company.name`, `company.size`, `company.industry`, `operations.policies`, `operations.team_structure`, `regional.jurisdictions`, `regional.currency`.

## Inputs

- The matter: a deal, contract, vendor, dispute, regulatory development, project or decision, with the facts known so far.
- Optional: the existing risk register, the company's risk appetite, deal or contract value.

## Steps

1. **Describe each risk** as cause, event and consequence in one sentence ("Because X, Y may happen, leading to Z").
2. **Categorize:** contract, regulatory, litigation, intellectual property, data and privacy, employment, operational, financial, strategic, reputational, security.
3. **Score severity and likelihood** from 1 to 5 using [references/risk-matrix.md](references/risk-matrix.md), with a one-line reason for each. Severity is the impact if it happens; likelihood is the chance it happens in the review period. Use exposure in `regional.currency` only when the user provides the figures.
4. **Compute the level:** score equals severity times likelihood; 1 to 4 low, 5 to 9 medium, 10 to 15 high, 16 to 25 critical.
5. **Recommend the response** for each risk: accept, mitigate, transfer (insurance, contract terms) or avoid, with a named owner role, a review date and the trigger that would change the rating.
6. **Escalate** per the matrix: high goes to senior leadership with a mitigation plan; critical goes to leadership and outside counsel immediately. Active or threatened litigation, regulator or government contact, possible criminal exposure, data breaches of regulated data and personal injury claims always go to counsel.
7. **Update the register** when one is provided: keep existing ids, change ratings only with a reason, and close risks only with evidence.

## Output

A risk register table (id, description, category, severity, likelihood, score, level, owner, response, status, review date, trigger), followed by a short memo for any high or critical risk: description, background, analysis, mitigation options, recommended approach, residual risk, monitoring plan and next steps. Use `regional.date_format` style dates.

## Rules

- Never present a score as certain; show the reasoning so others can challenge it.
- Never invent precedents, case outcomes, fines or statistics.
- Never decide on behalf of leadership whether to accept a high or critical risk; recommend and route.
- Mark memos about disputes or legal advice "Confidential, prepared for counsel review" and keep their content out of memory; store only risk ids and levels.

## In a managed run

When `legal-manager` runs this skill, return the register and memos. Results are not reused between runs because the facts behind risks change. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (risks assessed), Decisions (ratings and reasons), Changed files (none; the register is returned in the response for the user to save), Tests and checks (none), Open issues (high and critical risk ids, escalations needed), Next (counsel briefing, `legal-matter-brief` for leadership).
