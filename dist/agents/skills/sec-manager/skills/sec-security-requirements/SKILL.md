---
name: sec-security-requirements
description: "Turns a threat model, feature spec or compliance need into specific, testable security requirements: functional requirements, constraints, security user stories with acceptance criteria and test ideas, each traced to the threat or obligation it addresses and prioritized. Use when asked to write security requirements or security user stories, define security acceptance criteria, translate threats into backlog items, or map requirements to a framework such as OWASP ASVS."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "14-cybersecurity"
---

# Security Requirements

Translate threats and obligations into requirements a developer can build and a tester can verify. "Be secure" is not a requirement; "Only the invoice owner or an account admin can download an invoice; every other request returns 404" is.

Load only the context this skill declares: `company.industry`, `company.markets`, `technical.stack`, `technical.standards`, `regional.jurisdictions`.

## Scope

Defensive work for the user's own systems. Compliance mappings are aids for planning, not legal conclusions: when a requirement depends on a law or certification (GDPR, DPDP, HIPAA, PCI DSS, SOC 2), mark it for confirmation by legal or the responsible compliance owner.

## Inputs

- A threat model (ideally from `sec-threat-model`), a feature spec or PRD, or a list of obligations.
- Optional: frameworks the company follows, and the user's risk appetite.

## Steps

1. **Collect the drivers.** List each threat (with its id and priority), business rule and obligation the requirements must address.
2. **Write requirements.** For each driver, write one or more requirements, each with:
   - an id (`SR-001` onward), a short title and a one-sentence statement using "must";
   - type: functional (what the system does), non-functional (how well, for example time limits or lockout thresholds), or constraint (approved libraries, data location);
   - domain: authentication, authorization, session, input validation, data protection, cryptography, logging and monitoring, error handling, availability, supply chain, privacy;
   - rationale: the threat id or obligation it traces to;
   - priority: must, should or could, based on the threat priority;
   - acceptance criteria: observable checks, including negative cases;
   - test ideas: how QA or automation verifies it.
3. **Write security user stories** where the team works in stories: "As a [role], I want [control], so that [threat is prevented]", with the acceptance criteria above. Group related stories into an epic per domain.
4. **Map to frameworks if asked.** Map each requirement to the relevant area of the framework the user names (for example an OWASP ASVS chapter). Check the current version of the framework before quoting control numbers, and say which version you used.
5. **Check quality.** Every requirement is specific, testable, traced and prioritized; no driver is left without a requirement; no requirement duplicates another.

Templates and worked examples: [references/requirement-templates.md](references/requirement-templates.md).

## Output

A requirements table, the security user stories, a traceability matrix (threat or obligation to requirement ids), and gaps: drivers with no requirement, and requirements marked for legal or compliance confirmation. For managed runs, missing coverage of critical and high threats is reported in the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 14-cybersecurity/sec-security-requirements`.

## In a managed run

When `sec-manager` runs this skill, return the requirements and any findings; changes happen in the manager's single correction cycle. Results are never cached. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (drivers covered), Decisions (priorities, frameworks and versions used), Changed files (none), Tests and checks (quality check result), Open issues (gaps, items for legal), Next (usually product management for backlog, QA for test design, or `sec-threat-mitigation`).
