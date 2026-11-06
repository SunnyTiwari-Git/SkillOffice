---
name: qa-exploratory-testing
description: "Plans and runs exploratory testing: writes focused charters, runs time-boxed sessions, uses testing heuristics to find what scripted tests miss, and records notes, bugs and questions. Use when a feature is new or changing fast, when scripted tests pass but users still hit problems, before a release for a final hands-on check, or when asked to \"explore\", \"poke at\", \"bug bash\" or \"try to break\" something."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "11-quality-assurance"
---

# Exploratory Testing

Exploratory testing is learning, designing and testing at the same time. It is not random clicking: each session has a mission (a charter), a time box and written notes. It finds the bugs nobody thought to write a test for.

Load only the context this skill declares: `company.target_audience`, `technical.website_architecture`, `regional.output_language`.

## Inputs

- The product area to explore and how to reach it (local URL, build, device).
- What changed recently and what worries the team.
- Who the users are (`company.target_audience`), so you can test like them.

## Steps

1. **Write charters.** One line each: *Explore* {area} *with* {resources, data or technique} *to discover* {kind of information}. Example: "Explore the checkout with expired and declined test cards to discover how payment errors are explained." Prioritize charters by risk and by recent change. Templates: [references/charters-and-heuristics.md](references/charters-and-heuristics.md).
2. **Time-box each session**, for example 45 to 90 minutes, one charter per session. If you find something bigger than the charter, note it as a new charter rather than drifting.
3. **Use heuristics to generate ideas.** Two memory aids help:
   - **Product elements to vary:** structure, function, data, interfaces, platform, operations, time.
   - **Ways to judge whether behavior is a problem (consistency oracles):** is it consistent with the product's history, its own image and claims, similar products, what users reasonably expect, the stated requirements, the purpose, applicable standards and laws, and other parts of the same product?
   The reference file explains each with examples.
4. **Take notes as you go:** what you tried, what you saw, questions, ideas. Capture evidence (screenshots, console errors, exact inputs) for anything suspicious.
5. **Debrief.** After each session summarize: what was covered, bugs found, issues and questions (things that may not be bugs but need an answer), what was not covered, and suggested next charters.

Stay inside the user's own test environment. Use synthetic data only, and never try destructive actions (bulk delete, data resets, sending real messages) without explicit confirmation.

## Output

For each session, a session sheet:

- Charter, time box, tester, environment and build.
- Coverage notes: what was explored.
- Bugs: findings in the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 11-quality-assurance/qa-exploratory-testing`.
- Issues and questions for product or development.
- Not covered, and suggested next charters.

## In a managed run

When `qa-manager` runs this skill, return session sheets and findings; do not fix anything. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`), batching findings as `issue_opened` events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (charters run), Decisions (charters skipped and why), Changed files (none, or saved session notes), Tests and checks (sessions completed), Open issues (finding ids, open questions), Next (`qa-bug-report` for confirmed bugs).
