---
name: fin-audit-prep
description: Prepares internal controls testing and audit support workpapers. Builds control matrices, selects samples with a documented method, drafts test procedures and result templates, classifies exceptions and deficiencies, and organizes evidence requests for an external audit. Suited to internal controls over financial reporting such as SOX 404 and to statutory audits elsewhere. Use when planning controls testing, pulling a sample, documenting a test or preparing a request list for auditors. Drafts only; conclusions belong to qualified reviewers.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "03-finance-accounting"
---

# Audit Preparation and Controls Testing

Produce workpapers a reviewer can follow: what was tested, how it was chosen, what was found.

> **Not professional advice.** This skill prepares drafts and workpapers. It is not professional accounting, tax or investment advice. A qualified professional must review before anything is posted, paid, filed or reported.

## Inputs

- The control area (for example revenue, purchase to pay, payroll, financial close, treasury, IT general controls) and the testing period.
- The control descriptions, or the user's process narrative to derive them from.
- Populations to sample from (transaction listings with dates, references and amounts).
- Optional: prior year results, the auditor's request list, materiality.

Context used from the active profile: `company.name`, `company.size`, `regional.jurisdictions`, `regional.date_format`, `operations.processes`, `operations.policies`.

## Steps

1. **Control matrix**: control id, description (what, who, how often), type (manual, automated, IT-dependent manual), frequency, key or not, risk and assertions addressed. Use [references/controls-testing.md](references/controls-testing.md).
2. **Sample size** from frequency and risk using the reference table. Increase it for a sole control over a significant risk, a prior deficiency or a new control.
3. **Select the sample** with a stated method (random, systematic or targeted). For random or systematic selection, record the seed or start point so the selection can be repeated. Never pick items to make a test pass.
4. **Draft the workpaper**: objective, procedures, expected evidence, a results table per sample item, and exceptions.
5. **Record results** the user provides. Do not mark an item as passed without the evidence listed.
6. **Classify exceptions** as deficiency, significant deficiency or material weakness candidates using the reference indicators, and say the final classification belongs to management and the auditor.
7. **Audit request list** (for external audits): documents by area, owner and due date for the user to fill.

## Output

Control matrix, sample selection with method and seed, workpapers with results tables, exception and deficiency summary with remediation suggestions (root cause, fix, owner, re-test), and the request list.

## Quality checklist

- [ ] Sample size and method stated and justified; selection repeatable.
- [ ] Every result cites the evidence examined; verbal confirmations are corroborated.
- [ ] Exceptions are described fully, with impact and compensating controls considered.
- [ ] Tester and reviewer sign-off lines left for people.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Workpapers are drafts. Never sign off, never send to auditors, never alter evidence. Indicators of fraud, especially by management, go to a human immediately and are not discussed in drafts shared widely. Personal data in samples (employees, customers) is referenced by id, not name.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): controls in scope, samples drawn, exceptions and deficiency candidates, open requests. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
