---
name: legal-compliance-check
description: "Checks a proposed action, product feature, campaign, data flow or vendor arrangement for compliance issues before it goes ahead: which laws, standards and internal policies may apply in the stated jurisdictions, which requirements are met or unknown, the risks, the approvals needed and what needs specialist review. Also tracks readiness for frameworks such as SOC 2, ISO 27001, GDPR, HIPAA and PCI DSS. Read-only. Use when someone asks 'can we do this', plans something touching personal or regulated data, or prepares for an audit."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "04-legal-risk-compliance"
---

# Compliance Check

Tell the business, before it acts, which rules may apply, what they require, what is still unknown and who must approve. This is a review skill: it reports findings. It does not approve the plan.

> **Not legal advice.** This is a first-pass screen. Laws change and depend on facts and jurisdiction. A qualified lawyer licensed in each relevant jurisdiction must review the result before the company relies on it.

Load only the context this skill declares: `company.name`, `company.industry`, `company.markets`, `company.products_and_services`, `operations.policies`, `regional.jurisdictions`.

## Inputs

- A specific description of what is planned: the activity, the people affected, the data involved (especially personal, health, financial, children's or biometric data), the countries involved, and the vendors.
- Optional: internal policies, existing controls, or a target framework for audit readiness.

## Steps

1. **Pin down the facts.** Restate the plan in two or three sentences. If the geography or the data involved is unclear, ask: those two facts drive most of the answer.
2. **State the jurisdictions assumed** from the plan and `regional.jurisdictions`.
3. **List what may apply:** laws, industry standards, contractual obligations and internal policies, each with one line on why. Starting points by name: [references/regulation-map.md](references/regulation-map.md). Say "may apply" and why; never assert applicability you have not reasoned through.
4. **Turn each into requirements** and mark each one met, not met or unknown, with the evidence or the question that would settle it.
5. **Rate the risks** (high, medium, low) with the mitigation for each.
6. **Name the approvals** needed (privacy, security, legal, finance, leadership) and what each approver needs to see.
7. **Mark what needs a specialist:** anything turning on local law detail, regulator expectations, enforcement history or a deadline.
8. **For audit readiness** (when a framework is named), list controls, owners, evidence needed, where evidence lives, gaps and a prioritized fix list. Do not promise an audit outcome.

## Output

Start with a one-line verdict: **proceed**, **proceed with conditions** (list them), or **needs further review** (say by whom). Then: applicable rules table, requirements table (met, not met, unknown), risks, approvals needed, specialist review needed, and the assumed jurisdictions.

Report each unmet or unknown requirement as a finding in the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 04-legal-risk-compliance/legal-compliance-check`, status `open`. Regulated data with no lawful basis or safeguards is `critical` or `high`.

## Rules

- Never invent a law, article number, threshold, fine or deadline. If you cite a specific obligation, say where it comes from; if unsure, write "confirm with counsel".
- Never say an activity is "compliant" or "legal". Say what is met, what is not, and what is unknown.
- Flag regulated data explicitly: health data (HIPAA where it applies), payment card data (PCI DSS), personal data under GDPR, the India DPDP Act, CCPA/CPRA and similar laws, children's data and biometrics.
- Plan details may be confidential: do not store them in memory beyond the run id and finding ids.

## In a managed run

When `legal-manager` runs this skill, return findings and the verdict only. Results may be reused only while the plan description, the policies and the context files are unchanged. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (plan checked, jurisdictions assumed), Decisions (assumptions), Changed files (none), Tests and checks (none), Open issues (finding ids, unknowns, approvals needed), Next (`legal-privacy-review` for a deeper data protection review, or counsel review of listed items).
