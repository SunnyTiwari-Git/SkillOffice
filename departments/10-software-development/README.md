# Software Development and Engineering

**Status:** pilot. Passed a full workflow test on Claude Code. Other AI tools that read Agent Skills may work but are not tested.

This department helps you build software the careful way: agree what to build, design it, plan it, write it test-first, review it, and prove it works before anyone calls it done. It works with any programming language or framework. Your project details (stack, testing tools, coding standards) come from your SkillOffice company context, so the skills fit your project instead of a generic one.

## How it works

You talk to the **Software Development manager** (`dev-manager`). It picks only the skills your request needs, runs them in order, collects any problems found, fixes them in **one** correction round, checks the result with fresh evidence, and gives you one report. If problems remain after that round, it stops and asks you what to do.

It always asks you before risky steps: deleting things, deploying, database migrations, anything involving passwords or keys, or pushing and publishing.

## Skills

| Skill | What it does | Changes files? |
| --- | --- | --- |
| `dev-requirements-brainstorm` | Asks the right questions, lays out options and writes a design you approve before any code | Writes the design document |
| `dev-system-design` | Designs systems, APIs and data, and records decisions with trade-offs | Writes design documents |
| `dev-implementation-plan` | Breaks an approved design into small, test-first tasks and carries them out | Yes |
| `dev-test-driven-development` | Writes a failing test first, then the minimum code, then cleans up | Yes |
| `dev-systematic-debugging` | Finds the real cause of a bug before fixing it, and adds a test so it stays fixed | Yes |
| `dev-code-review` | Reviews changes for bugs, security, performance and readability; also handles review feedback | Only in feedback mode |
| `dev-documentation` | Writes READMEs, API docs, runbooks and onboarding guides | Writes documents |
| `dev-tech-debt` | Finds and ranks technical debt and suggests a phased plan | No |
| `dev-verification` | Runs the tests and checks fresh before anything is called "done" | No |

## Playbooks

| You ask for | The manager runs |
| --- | --- |
| A new feature | brainstorm, design (if needed), plan, test-first build, code review, one fix round, verification |
| A bug fix | debugging with a regression test, code review, one fix round, verification |
| A code review | code review, then fixes only if you ask |
| Documentation | documentation, then a check of commands and links |
| A tech debt check | tech debt report; a remediation plan only if you approve |

## Context it uses

Fill these in your company context (`.skilloffice/context/<profile>/`): `technical.stack`, `technical.languages`, `technical.testing`, `technical.standards`, `technical.hosting`, `technical.deployment_process`, and `regional.output_language` and `regional.date_format` for documents.

## Where the skills come from

Most skills are adapted from two open-source collections, reviewed line by line, with all scripts and connector settings removed:

- [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) (Apache-2.0)
- [obra/superpowers](https://github.com/obra/superpowers) (MIT, Copyright (c) 2025 Jesse Vincent)

Each skill's `PROVENANCE.md` lists the exact upstream version and every change. Security reviews are in `registry/security-reviews/`.

## Not professional advice

These skills assist developers. Review generated code, designs and documents before relying on them, especially for security, payments, personal data or regulated systems.
