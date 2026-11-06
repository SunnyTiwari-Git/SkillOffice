---
name: dev-tech-debt
description: Identifies, categorizes and prioritizes technical debt in a codebase, and produces a phased remediation plan that fits alongside feature work. Use for "tech debt", "technical debt audit", "what should we refactor", "code health", or questions about refactoring priorities and maintenance backlog.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
---

# Tech Debt Assessment

Find, categorize and prioritize technical debt, with evidence. This is a review skill: it reports, it does not refactor.

Load only the context this skill declares: `technical.stack`, `technical.standards`, `technical.hosting`, `company.size`.

## Scope first

Agree the scope: the whole repository, one service, or one area. For large codebases, sample the most changed and most depended-on parts first. Use version history to find hot spots (files that change often and break often).

## Categories

| Type | Examples | Risk if ignored |
| --- | --- | --- |
| Code debt | Duplicated logic, poor abstractions, magic numbers, very long functions | Bugs, slow development |
| Architecture debt | Tangled modules, a monolith that should be split, wrong data store | Scaling limits, costly changes |
| Test debt | Low coverage on critical paths, flaky tests, missing integration tests | Regressions ship |
| Dependency debt | Outdated or unmaintained libraries, known vulnerabilities | Security incidents |
| Documentation debt | Missing runbooks, outdated READMEs, knowledge held by one person | Slow onboarding, incident delays |
| Infrastructure debt | Manual deploys, no monitoring, no infrastructure as code | Incidents, slow recovery |
| Security debt | Secrets in code, missing input validation, outdated authentication | Breaches |

## Prioritization

Score each item from 1 to 5 on:

- **Impact:** how much it slows the team down
- **Risk:** what happens if it is not fixed
- **Effort:** how hard the fix is

```
Priority = (Impact + Risk) x (6 - Effort)
```

Map the score to a severity for the findings format: 40 or more is high, 20 to 39 is medium, under 20 is low. Anything that is an active security exposure (for example a secret committed to the repository, or a dependency with a known exploited vulnerability) is **critical** regardless of score, and is reported immediately.

## Output

1. **Findings** in the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill): id, severity, title, location, evidence (what you saw, with file paths), recommendation, `source_skill: 10-software-development/dev-tech-debt`, status `open`. Add the category and the Impact, Risk and Effort scores in the evidence.
2. **Prioritized table:** item, category, score, estimated effort (in relative terms, not dates), and business justification in plain language.
3. **Phased remediation plan:** quick wins first, then items that unblock planned features, then larger structural work. Each phase small enough to run alongside feature work.

Do not commit to dates or costs. The team estimates those.

## In a managed run

When `dev-manager` runs this skill, return findings only; do not refactor. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`): log critical and high items as `issue_opened` events.

## Handoff

End with a handoff (under 400 words): Done (scope assessed), Decisions, Changed files (none, or the report file), Tests and checks, Open issues (top findings), Next (`dev-implementation-plan` for the first remediation phase, if the person approves).
