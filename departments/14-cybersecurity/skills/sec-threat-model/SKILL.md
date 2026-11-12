---
name: sec-threat-model
description: "Builds an evidence-based threat model for a system, feature or code repository the user owns: components, data flows, trust boundaries, assets, realistic attacker capabilities, STRIDE threats, abuse paths and attack trees, prioritized by likelihood and impact with concrete mitigations. Defensive use only. Use when asked to \"threat model\" a product, feature, service or codebase, to map abuse paths or trust boundaries, or before building something that handles sensitive data, payments, authentication or uploads."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "14-cybersecurity"
---

# Threat Model

Produce a threat model that is specific to this system, not a generic checklist. Every claim about a component, flow or control rests on evidence (a file path, a config value, a design document, or something the user said). Anything unknown is written down as an assumption, never invented.

Load only the context this skill declares: `company.name`, `company.industry`, `company.markets`, `technical.stack`, `technical.languages`, `technical.website_architecture`, `technical.hosting`, `regional.jurisdictions`.

## Scope and ethics

Defensive security only, for systems the user owns or is explicitly authorized to assess. Confirm that once before starting. A threat model describes how a system could be attacked so it can be defended; it never includes working exploit code, malware, or steps aimed at someone else's system. If a request goes beyond that, decline that part and offer the defensive alternative (for example a mitigation plan or a detection idea). If you come across a secret, show only its first 4 characters followed by `****` and note where it is.

## Inputs

- What to model: a repository or path, a design document, an architecture description, or a feature spec.
- Known context: intended users, deployment model, internet exposure, authentication expectations, data sensitivity, multi-tenancy. Mark anything not given as an assumption.

## Steps

1. **Scope.** Name what is in and out of scope. Separate the running system from build and CI tooling and from tests and examples.
2. **System model.** List the main components, data stores and outside integrations, and how the system runs (web service, worker, CLI, library). Describe data flows as arrows (for example `Internet -> API`). For each trust boundary note the data crossing it, the channel, and the protections present (authentication, encryption, validation, rate limits). Add one small Mermaid flowchart if it helps.
3. **Assets.** List what an attacker would want or could damage: personal data, credentials and sessions, authorization state, secrets and keys, payment data, integrity-critical records, audit logs, availability-critical services, build artifacts. Say why each matters (confidentiality, integrity or availability).
4. **Attacker model.** Describe realistic attacker capabilities given the exposure, and explicitly what attackers cannot plausibly do. This keeps severity honest.
5. **Threats.** Walk every component and boundary through STRIDE: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege. Prefer short abuse paths (goal, steps, impact) over one-line generic threats. For the two or three most important attacker goals, draw an attack tree with AND and OR nodes. Guide: [references/stride-and-attack-trees.md](references/stride-and-attack-trees.md).
6. **Prioritize.** Rate likelihood and impact as low, medium or high with one sentence each, then set priority (critical, high, medium, low), adjusted for controls that already exist. Say which assumptions most change the ranking.
7. **Check assumptions with the user.** Before the final model, list the three to six assumptions that matter most and ask one to three focused questions (environment, users, exposure, data sensitivity, tenancy). If the user cannot answer, continue and mark the affected conclusions as conditional.
8. **Mitigations.** For each critical and high threat: existing controls (with evidence), gaps, recommended mitigations tied to a concrete location, and a detection idea (log, metric or alert). Phrase mitigations specifically, for example "require an authorization check for invoice download in the billing service", not "improve security".
9. **Focus paths.** List the files or areas that most deserve manual security review, each with a one-line reason.
10. **Quality check.** Confirm every entry point is covered, every trust boundary appears in at least one threat, runtime and CI are separated, and assumptions and open questions are explicit.

Output layout and the threat table columns: [references/output-format.md](references/output-format.md).

## Output

A threat model with: summary, scope and assumptions, system model, assets, attacker model, entry points, top abuse paths, threat table (ids `TM-001` and up), criticality calibration for this system, focus paths, and coverage limits (what was not examined). For managed runs, critical and high threats are also reported in the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 14-cybersecurity/sec-threat-model`.

Where personal data crosses borders or regulated data is involved (health, payment, children's data), note which `regional.jurisdictions` may apply and hand the question to legal; do not state legal conclusions.

## In a managed run

When `sec-manager` runs this skill, return the model and findings only; fixes belong to the manager's single correction cycle. Security results are never cached: run fresh every time. Batch memory events at the end of the stage, per `references/protocols/memory.md` in `skilloffice-core`.

## Handoff

End with a handoff (under 400 words): Done (what was modeled), Decisions (key assumptions and how they were confirmed), Changed files (none), Tests and checks (quality check result), Open issues (critical and high threat ids), Next (usually `sec-security-requirements` or `sec-threat-mitigation`).
