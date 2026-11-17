---
name: legal-policy-drafting
description: "Drafts or updates company policies and public notices for counsel review: privacy notice, cookie notice outline, terms of service outline, acceptable use, data retention, records and legal hold, code of conduct sections, whistleblowing, anti-bribery, vendor code. Plain English, tailored to the company's context and jurisdictions, with gaps and assumptions marked. Use when asked to write, refresh or compare a policy or notice, or to turn a review's findings into updated wording."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.2.0"
  department: "04-legal-risk-compliance"
---

# Policy Drafting

Produce clear, practical policy and notice drafts that reflect how the company actually works, ready for counsel review.

> **Not legal advice.** These are drafts. A qualified lawyer licensed in each relevant jurisdiction must review and approve them before they are published, adopted or relied on.

Load only the context this skill declares: `company.name`, `company.description`, `company.markets`, `company.products_and_services`, `company.website`, `operations.policies`, `operations.tools`, `regional.jurisdictions`, `regional.output_language`.

## Inputs

- Which policy or notice, its audience (public, customers, employees, vendors), and the jurisdictions.
- The facts it must reflect: for a privacy notice, the data inventory (ideally from `legal-privacy-review`); for retention, the record types and legal holds; for acceptable use, the systems covered.
- Optional: the current version, findings to fix, a house style.

## Ask first

Ask these in one round before drafting, skipping any that the request, the facts provided or the listed context fields already answer. Missing facts the document must reflect go in the same message as a short checklist to fill, not as extra questions.

1. **Who is it for?** a) the public and customers, for example on the website; b) employees; c) vendors and partners; d) other.
2. **Which jurisdictions?** (skip if `regional.jurisdictions` is set) a) one country, which you name; b) several countries, with differences marked for counsel; c) other.
3. **What is the starting point?** (skip if `operations.policies` already shows this document) a) a new draft from your facts; b) an update to the current version you share, with a change list; c) new wording that fixes findings from a review; d) other.
4. **What style?** a) a short plain-English notice with a summary at the top; b) a full detailed policy with defined terms; c) other.
5. **Where do the facts come from?** a) a data inventory or record list you provide; b) the findings of `legal-privacy-review`; c) a short fact checklist I give you to fill in; d) other.

If they are not set, propose saving the jurisdictions as `regional.jurisdictions`, and save only after the person confirms. The other answers apply to this request only.

## Steps

1. **Confirm the facts first.** A notice that does not match what the company really does is worse than none. Run the [Ask first](#ask-first) questions, list the facts used, and ask for any that are missing in that same round rather than guessing.
2. **State the jurisdictions assumed.** Where rules differ by jurisdiction, mark the section and list the options for counsel instead of choosing.
3. **Draft in plain language:** short sections, headings people can scan, defined terms only where needed, written in `regional.output_language`.
4. **Use the standard structure** for the document type in [references/policy-outlines.md](references/policy-outlines.md).
5. **Mark every assumption** inline as `[CONFIRM: ...]` and every legal choice as `[COUNSEL: ...]`.
6. **When updating,** show what changed and why, mapped to the findings or facts that drove each change.

## Output

The draft, followed by: facts relied on, open `[CONFIRM]` and `[COUNSEL]` items, jurisdictions assumed, and the approvals needed before publishing (counsel, privacy owner, leadership). When the user asks to save the draft, it is saved by the manager's correction cycle or by the user, not by this skill.

## Rules

- Never present a draft as final, approved or legally compliant.
- Never copy another company's policy or notice text, and never imitate another brand.
- Never invent the company's practices, vendors, retention periods or contact details.
- Never cite a law, article or deadline you cannot support; leave a `[COUNSEL]` marker instead.
- Never publish, email or upload a policy.

## In a managed run

When `legal-manager` runs this skill, return the draft and its open items. Drafts are not reused between runs. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (document drafted or updated, jurisdictions assumed), Decisions (structure and assumptions), Changed files (none; the draft is in the response), Tests and checks (facts checked against inputs), Open issues (CONFIRM and COUNSEL items), Next (counsel review; `legal-privacy-review` if facts are missing).
