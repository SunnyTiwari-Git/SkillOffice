---
name: dev-system-design
description: Designs systems, services, APIs and data models, and records architecture decisions with trade-offs. Use when asked to "design a system for", "how should we architect", choose between technologies, define service boundaries or data models, review a design proposal, or write an architecture decision record (ADR).
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
---

# System Design

Design systems and evaluate architectural decisions. Make every trade-off explicit.

## Before you start

- Read the agreed design or requirements if one exists (often from `dev-requirements-brainstorm`).
- Load only the context this skill declares: `technical.stack`, `technical.hosting`, `technical.website_architecture`, `technical.standards`, `company.size`. Build on what the project already uses unless there is a clear reason not to.
- If scale, budget or deadline is unknown and changes the answer, ask once. Otherwise state your assumption.

## Modes

| Mode | Example request | Output |
| --- | --- | --- |
| Design | "Design the notification system for our app" | Design document |
| Decide | "Should we use a queue or direct calls for this?" | Architecture decision record |
| Evaluate | "Review this microservices proposal" | Findings in the shared format plus a summary |

## Framework

1. **Requirements.** Functional (what it does), non-functional (scale, latency, availability, cost, security, privacy), and constraints (team size, timeline, existing stack, regulations).
2. **High-level design.** Components, data flow, API contracts, storage choices. Draw a simple text diagram.
3. **Deep dive.** Data model, API design (REST, GraphQL, RPC), caching, queues or events, error handling and retries, idempotency.
4. **Scale and reliability.** Load estimate, scaling approach, failover and redundancy, monitoring and alerting.
5. **Security and data.** Authentication and authorization, input validation at boundaries, secrets handling (environment or secret manager, never in code), personal or regulated data. Flag HIPAA, GDPR, DPDP or PCI DSS scope and hand off to Legal when it applies.
6. **Trade-off analysis.** Complexity, cost, team familiarity, time to market, maintainability. Say what you would revisit as the system grows.

Prefer the simplest design that meets the requirements. Do not design for scale nobody needs (YAGNI).

## Architecture decision record format

Use the ADR template in [references/adr-template.md](references/adr-template.md). Save ADRs where the project keeps them (see `technical.standards`), otherwise `docs/decisions/NNNN-<title>.md`.

## Evaluating a design

When reviewing a proposal, report problems as findings in the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill): id, severity, title, location (document and section), evidence, recommendation, `source_skill: 10-software-development/dev-system-design`, status. Also list what is well designed.

## Output

A clear design document or ADR with: explicit assumptions, a text diagram, the options considered, trade-offs, risks, and what to revisit later. Keep it as short as the decision allows.

## In a managed run

When `dev-manager` runs this skill, follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`): log each architecture decision as a `decision` event and record the files you wrote.

## Handoff

End with a handoff (under 400 words): Done, Decisions (the chosen design and why), Changed files (design document or ADR), Tests and checks (none), Open issues (risks, unanswered questions), Next (usually `dev-implementation-plan`).
