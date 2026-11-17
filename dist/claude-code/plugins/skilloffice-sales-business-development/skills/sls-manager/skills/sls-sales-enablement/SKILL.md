---
name: sls-sales-enablement
description: Creates sales collateral that sellers actually use, including pitch deck outlines, one-pagers and leave-behinds, objection handling documents, demo scripts and talk tracks, cold call scripts, ROI calculator designs, sales case study briefs, proposal templates, sales playbooks and buyer persona cards. Every claim is one a seller can defend. Use when the user asks for a sales deck, one-pager, objection doc, demo script, talk track, call script, proposal template, sales playbook, persona card or any material to help a sales team close deals.
license: Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md
metadata:
  project: "SkillOffice"
  version: "0.2.0"
  department: "05-sales-business-development"
---

# Sales Enablement

Make collateral that is specific to a situation, scannable in seconds and built on claims a buyer cannot disprove in a minute.

## Inputs

- The asset, its user, the sales stage and the target persona (required; see Ask first).
- Optional: existing collateral, what sellers ask for most, proof points, case studies and common objections.

Context used from the active profile: `company.name`, `company.description`, `company.products_and_services`, `company.differentiators`, `company.target_audience`, `marketing.ideal_customers`, `marketing.competitors`, `brand.voice`, `regional.currency`.

## Ask first

Ask these in one round before drafting, skipping any that the request or the listed context fields already answer. Also invite the person to paste any collateral that exists today.

1. **Asset and stage.** (a) Prospecting material, such as a one-pager or cold call script; (b) discovery or demo material, such as a pitch deck, demo script or talk track; (c) closing material, such as a proposal template, objection document or ROI calculator; (d) other.
2. **Who uses it.** (a) A seller, live on a call, so it is scannable talk tracks; (b) a champion inside the customer, so it stands alone and avoids jargon; (c) the prospect directly, as a polished leave-behind; (d) other.
3. **Target persona** (skip if `marketing.ideal_customers` names one). (a) A technical lead, who cares how it works, integration and risk; (b) a finance or budget owner, who cares about cost, return and payback; (c) an operations or line manager, who cares about daily workflow and time saved; (d) other.
4. **Proof available.** (a) Customer results you may name, with permission; (b) anonymized results or internal data; (c) none yet, so advantages are written as hypotheses to test; (d) other.
5. **Top objections** (pick up to three). (a) Price or budget; (b) "we already have something" or doing nothing; (c) switching risk or implementation effort; (d) other.

If `marketing.ideal_customers` was empty, propose saving the persona there, and save only after the person confirms. All other answers apply to this request only.

## Principles

- **Sellers use what they trust.** Use their language, not marketing's. Test drafts with the best sellers first.
- **Situation-specific.** A deck for a technical lead differs from one for a finance lead.
- **Scannable.** Bold headers, short bullets, clear hierarchy. If a seller cannot find the answer during a call, the document has failed.
- **Tie claims to outcomes**: revenue, efficiency or risk reduction.
- **Claims sellers can defend.** "Why we win" needs evidence; without it, write advantages as hypotheses and say what would confirm them. Include where the company is not the best fit.

## Assets

Structures for each asset are in [references/asset-structures.md](references/asset-structures.md):

| Asset | Deliverable |
| --- | --- |
| Pitch deck | 10 to 12 slide outline: headline, body and speaker notes per slide |
| One-pager | Full copy with layout guidance |
| Objection document | Table: objection, real concern, response, proof point, follow-up question |
| Demo script | Scene by scene with timing, talk track and interaction points |
| Cold call script | Opener, reason for calling, one question, handling the first pushback, voicemail |
| ROI calculator | Inputs, formulas and outputs, with clearly labeled sample data |
| Case study brief | Profile, challenge, solution, three before-and-after results, quote, tags |
| Proposal template | Sections with customization notes; pricing as placeholders |
| Sales playbook | Contents and sections |
| Persona card | One card per persona |

## Steps

1. Run the Ask first questions to confirm the asset, user, stage and persona.
2. Draft it with the structure from the reference file, in `brand.voice`, using only proof the user provided or that is publicly verifiable with a source.
3. Mark every number, customer name and quote that needs confirmation. Never invent a statistic, logo, customer or quote.
4. Check it against the quality checklist below.

## Quality checklist

- [ ] Every claim has evidence or is labeled as a hypothesis.
- [ ] Pricing, discounts, contract terms and delivery dates appear only as placeholders, "[to be confirmed by the team]".
- [ ] Competitor statements are dated, sourced and fair.
- [ ] Scannable: a seller finds any answer in seconds.
- [ ] Money in `regional.currency`.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Drafts only: this skill never publishes, sends or uploads collateral. Pricing and commercial terms require approval from the team. Customer names, logos and quotes need the customer's permission before external use; flag this. Visual design is a handoff to the design department; brand checks to the Marketing, Content and PR department.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): assets produced, items needing confirmation and suggested reviews. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
