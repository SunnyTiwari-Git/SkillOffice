---
name: legal-vendor-terms-check
description: "Builds a consolidated view of the agreements the company has with one vendor from documents and records the user provides: what is signed (NDA, MSA, SOW, DPA, SLA, insurance certificate), key terms, renewal and notice dates, surviving obligations, and gaps such as a missing DPA when the vendor handles personal data. Use when onboarding or renewing a vendor, before a vendor gets access to data, or when asked what agreements are in place with a supplier."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "04-legal-risk-compliance"
---

# Vendor Terms Check

Give a clear picture of the legal relationship with one vendor: what is in place, what it says, what is due soon and what is missing.

> **Not legal advice.** This is a status summary built from the documents provided. It must be checked against the signed originals, and a qualified lawyer licensed in the relevant jurisdiction must review any gap or obligation before the company relies on it.

Load only the context this skill declares: `company.name`, `operations.policies`, `operations.tools`, `regional.jurisdictions`, `regional.date_format`.

## Inputs

- The vendor's name, and which legal entity if the vendor is part of a group.
- The agreements and records the user provides: signed contracts, amendments, order forms, DPA, SLA, insurance certificates, or an export from the company's contract system.
- What the vendor does for the company and whether it handles personal, health, payment or other regulated data.

## Steps

1. **Confirm the entity.** Match trade names and legal names; ask if the vendor is ambiguous or part of a group.
2. **List each agreement found:** type, status (active, expired, in negotiation, unsigned), effective date, end or renewal date, auto-renewal and its notice window, key terms (liability cap, governing law, termination rights), amendments, and where the copy came from.
3. **Check coverage against the relationship.** Typical set: NDA, master agreement, statements of work, data processing agreement if the vendor processes personal data for the company, service levels for critical services, and evidence of required insurance. Mark each as present, missing or not applicable, with the reason.
4. **Flag dates and survivals.** Renewal notice windows and end dates within the next 90 days, and expired agreements with obligations that survive (confidentiality, indemnities, data deletion).
5. **State completeness.** Say exactly which documents and sources were reviewed and which were not; never imply the list is complete when it may not be.

## Output

```
Vendor: [legal entity] (trade name)
Relationship: [what they do; regulated data: yes or no, which]
Sources reviewed: [list]   Not reviewed: [list]

Agreements
- [Type]: [status], effective [date], ends or renews [date], notice window [n days, deadline date], key terms [...]

Coverage
- [Type]: present / missing (why it matters) / not applicable

Upcoming actions
- [date]: [action]

Gaps for counsel
- [gap and why]
```

Dates use `regional.date_format`. Missing agreements that matter (for example no DPA while the vendor processes personal data) are reported as findings in the SkillOffice findings format, `source_skill: 04-legal-risk-compliance/legal-vendor-terms-check`.

## Rules

- Work only from what the user provides; never search mailboxes, chats or systems on your own.
- Never invent dates, terms or agreements. If a document is unreadable or missing, say so.
- Never sign, renew, terminate or send notices. Notices are drafts for the user and counsel.
- Keep vendor contact details and contract text out of memory; store the vendor name, file names and gap ids only.

## In a managed run

When `legal-manager` runs this skill, return the status view and gap findings only. Results are not reused between runs because contract records change often. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (vendor, sources reviewed), Decisions (entity chosen), Changed files (none), Tests and checks (none), Open issues (gaps and upcoming deadlines), Next (`legal-contract-review` for new terms, or `legal-privacy-review` if data protection terms are missing).
