---
name: legal-privacy-review
description: "Reviews how a product, process or vendor handles personal data against the privacy laws named for the company's jurisdictions (for example GDPR, the India DPDP Act, CCPA/CPRA, HIPAA for health data, PCI DSS for card data): data inventory, purpose and lawful basis, notice and consent, retention, sharing and processors, cross-border transfers, individuals' rights, security and breach readiness. Read-only; returns findings and questions for counsel. Use for a privacy review, a data protection impact assessment draft, a privacy readiness check or before launching something that uses personal data."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "04-legal-risk-compliance"
---

# Privacy Review

Map the personal data, test each use against the privacy themes that matter in the stated jurisdictions, and report gaps with practical fixes. This is a review skill: it reads what the user provides and reports findings.

> **Not legal advice.** Privacy obligations depend on the facts and the exact law in force. A qualified lawyer licensed in the relevant jurisdiction, or the company's privacy or data protection officer, must review the result before the company relies on it.

Load only the context this skill declares: `company.name`, `company.markets`, `company.products_and_services`, `operations.policies`, `operations.tools`, `technical.hosting`, `regional.jurisdictions`.

## Inputs

- A description of the product, process or vendor arrangement, and any available material: data flow notes, database fields, forms, privacy notice, consent text, retention policy, vendor list, DPA.
- Who the individuals are (customers, employees, children, patients) and where they live.

## Steps

1. **State the jurisdictions assumed** from where the individuals live, where the company operates and `regional.jurisdictions`. Name the laws that may apply and why (see the regulation map in `legal-compliance-check` if it is installed). If where people live is unknown, ask.
2. **Build a data inventory:** each category of personal data, its source, purpose, where it is stored, who can access it, which vendors process it, which countries it goes to, and how long it is kept. Mark sensitive categories (health, financial, biometric, children's, government identifiers, precise location).
3. **Review each theme** in [references/privacy-checklist.md](references/privacy-checklist.md): purpose and lawful basis or consent, transparency, minimization, retention and deletion, processors and sharing, cross-border transfers, individuals' rights, security, breach readiness, children, automated decisions.
4. **Decide whether a formal impact assessment is likely needed** (for example large-scale sensitive data, monitoring, new technology, profiling with significant effects) and say who should own it.
5. **Write fixes** that are practical: change the form, shorten retention, add a processor clause, update the notice, add a consent step, restrict access.

## Report findings

Use the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 04-legal-risk-compliance/legal-privacy-review`, status `open`. Sensitive data with no lawful basis, consent or safeguards is `critical` or `high`; missing notice items or long retention are usually `medium`. Location is the system, form, document section or data flow step. Evidence is what the material shows, without copying real personal data.

Also include: the data inventory table, the assumed jurisdictions, whether an impact assessment is recommended, open questions for counsel and coverage limits.

## Rules

- Never copy real personal data into the report or memory. Use field names and counts, not values.
- Never invent laws, article numbers, deadlines, thresholds or regulator positions; mark specifics "confirm with counsel".
- Never declare a system "compliant". Report what is in place, what is missing and what is unknown.
- Never contact individuals, regulators or vendors; drafts only.

## In a managed run

When `legal-manager` runs this skill, return findings, the inventory and open questions. Results may be reused only while the provided materials, policies and context files are unchanged. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (scope, jurisdictions assumed), Decisions (assumptions), Changed files (none), Tests and checks (none), Open issues (finding ids, impact assessment needed or not, questions for counsel), Next (`legal-policy-drafting` for notice updates, `legal-contract-review` for processor terms, cybersecurity for security gaps).
