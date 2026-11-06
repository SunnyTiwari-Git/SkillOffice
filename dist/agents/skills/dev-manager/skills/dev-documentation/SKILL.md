---
name: dev-documentation
description: Writes and updates technical documentation for its real readers, such as READMEs, API references, runbooks, architecture documents and onboarding guides. Use for "write docs for", "document this", "create a README", "write a runbook" or "onboarding guide", or after a feature ships and its docs need updating.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
---

# Technical Documentation

Write clear, maintainable documentation for a specific reader and purpose.

Load only the context this skill declares: `company.name`, `technical.stack`, `technical.standards`, `regional.output_language`, `regional.date_format`. Write in the language set in `regional.output_language` (default English) and use the regional date format.

## Before writing

1. **Who reads this, and what do they need to do?** A new developer setting up, an operator handling an incident and an API consumer each need different documents.
2. **Read the source of truth.** Read the code, configuration and existing docs. Never document behavior you have not confirmed. If something is unclear, mark it as an open question instead of guessing.
3. **Check what exists.** Update existing documents rather than creating near-duplicates. Link instead of copying.

## Document types

| Type | Must contain |
| --- | --- |
| README | What it is and why it exists; quick start (under 5 minutes to first success); configuration with every environment variable (name, purpose, example, never a real value); how to run and test; how to contribute |
| API reference | Each endpoint: method, path, purpose, request and response examples, authentication, error codes, rate limits, pagination |
| Runbook | When to use it; prerequisites and access needed; numbered steps; how to verify success; rollback steps; escalation path |
| Architecture document | Context and goals; high-level design with a text diagram; key decisions and trade-offs (link the ADRs); data flow and integration points |
| Onboarding guide | Environment setup; how the key systems connect; common tasks with walkthroughs; who to ask for what (roles, not personal contact details) |

## Principles

1. **Write for the reader.** Lead with what they need most.
2. **Show, do not only tell.** Commands, code examples and expected output.
3. **Keep it current.** Outdated docs are worse than none. Date the document or tie it to a version.
4. **Link, do not duplicate.** Reference other docs instead of copying them.
5. **Never include secrets.** Use placeholders such as `YOUR_API_KEY` and point to where the real value is configured. No real customer data in examples.
6. **Plain language.** Short sentences, defined terms, no unexplained jargon.

## Before handing over

- Every command and example was checked against the current code or run in the project where safe.
- Links resolve.
- No secrets, internal hostnames, or personal data.

Writing the documentation files is this skill's only change. Running example commands happens only in the user's own project, through the platform's normal permission prompts.

## In a managed run

When `dev-manager` runs this skill, follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`): record each written or updated document as a `file_changed` event.

## Handoff

End with a handoff (under 400 words): Done, Decisions (audience and structure), Changed files, Tests and checks (commands verified), Open issues (open questions), Next.
