# Legal, Risk and Compliance playbooks

Each playbook is a default order. Adjust it to the request: drop skills the request does not need. Every output carries the not-legal-advice notice and the assumed jurisdiction. Urgent matters (litigation, regulators, police, personal injury, data breaches) skip the playbooks: counsel first, then a holding draft and an urgent brief.

## 1. Contract review to redlines

| Step | Skill | Skip when |
| --- | --- | --- |
| 1 | `legal-contract-review` | Never for this playbook |
| 2 | `legal-privacy-review` | No personal data is processed under the contract |
| 3 | Correction cycle | Tighten redlines and fallbacks against the findings |
| 4 | `legal-matter-brief` | Leadership does not need a summary |

Example: "We are the customer on this SaaS agreement; review before signing." The review rates the three-month liability cap and the vendor's right to use customer data as red, the 60-day renewal window as yellow, and the missing DPA as red. The correction cycle checks every red item has a redline and a fallback. The report lists the items worth counsel's time and the renewal notice date.

## 2. NDA triage

| Step | Skill | Notes |
| --- | --- | --- |
| 1 | `legal-nda-triage` | Uses the company's NDA standards, or defaults (and says so) |
| 2 | `legal-contract-review` | Only if the document contains commercial terms beyond confidentiality |

Green NDAs are recommended for signature under the company's normal authority; the signer decides.

## 3. Vendor onboarding check

| Step | Skill | Skip when |
| --- | --- | --- |
| 1 | `legal-vendor-terms-check` | Never |
| 2 | `legal-contract-review` | No new or changed terms to review |
| 3 | `legal-privacy-review` | The vendor handles no personal data |

## 4. Privacy compliance review

| Step | Skill | Skip when |
| --- | --- | --- |
| 1 | `legal-compliance-check` | The request is only about personal data and the laws are already known |
| 2 | `legal-privacy-review` | No personal data involved |
| 3 | `legal-policy-drafting` | The notice already matches the practices |
| 4 | Correction cycle | Align the notice draft with the inventory |

## 5. Risk register update

| Step | Skill | Notes |
| --- | --- | --- |
| 1 | `legal-risk-assessment` | Keep existing ids; re-rate only with reasons |
| 2 | `legal-matter-brief` | For high and critical risks, or board preparation |

## 6. Legal inquiry response

| Step | Skill | Notes |
| --- | --- | --- |
| 1 | `legal-response-draft` | Escalation check first; demand letters, legal process and regulators always go to counsel |
| 2 | `legal-matter-brief` | When escalated, brief counsel and leadership with urgent actions |

## Skip rules for reuse

Review skills (`legal-contract-review`, `legal-nda-triage`, `legal-compliance-check`, `legal-privacy-review`) may be skipped only when the cached result is still valid: the same document, the same standards or policies, the same context files and the same skill version. Drafts, briefs, registers and responses always run fresh.
