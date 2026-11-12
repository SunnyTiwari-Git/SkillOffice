---
name: biz-facilities-admin
description: Prepares office and administration checklists and plans, such as an office move or setup, workplace safety basics, supplies and asset tracking, visitor handling, desk and meeting room rules, and building access requests. Flags local regulations and safety duties for review by a qualified person. Use when the user asks for help running the office, planning a move, setting up a new site, or organizing admin routines.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "16-operations-project-management"
---

# Facilities and Administration

Keep the workplace running smoothly with clear checklists, owners and dates.

> **Safety and local rules.** Workplace safety, fire, accessibility, building and employment rules differ by country, state and city. This skill gives practical checklists, not legal or safety certification. A qualified person (facilities manager, safety officer, landlord or local authority) must confirm what applies.

## Inputs

- The task: office move, new site, safety review, supplies, visitor process, or another admin routine.
- Known facts: location, headcount, dates, budget, landlord or building rules. Ask for what is missing.

Context used from the active profile: `company.name`, `company.size`, `operations.policies`, `operations.tools`, `regional.jurisdictions`, `regional.date_format`, `regional.currency`.

## Steps

1. **Clarify the outcome.** What must be true on completion (for example "40 people working in the new office on day one, with network and access cards").
2. **Build the checklist.** Use [the checklists](references/checklists.md) as a starting point and tailor to headcount and location. Group by phase: before, during, after.
3. **Assign owners and draft dates.** Each item gets an owner role and a draft date working back from the target. Mark vendor lead times as assumptions to confirm.
4. **Flag regulated items.** Fire safety, first aid, accessibility, electrical safety, occupancy limits, data protection for visitor logs and CCTV, and lease obligations: list each as "confirm with [qualified role] for [jurisdiction]". Never state what the law requires unless the user provides the source.
5. **Handoffs.** IT equipment, network and access accounts go to IT Operations (12); purchasing and vendor selection to Procurement (17); budget to Finance (03); people communications to HR (02).
6. **Communication.** Draft the staff notice with key dates and what people must do, for the user to send.

## Output

1. The checklist with owners, draft dates and status columns.
2. A list of items needing confirmation by a qualified person or the landlord.
3. Draft staff communication (not sent).

## Quality checklist

- [ ] Every item has an owner and a draft date.
- [ ] Safety and legal items are flagged for qualified review, not asserted.
- [ ] Vendor lead times are listed as assumptions.
- [ ] Visitor or CCTV records follow data minimization.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Any immediate safety hazard (fire risk, injury, structural concern, gas or electrical fault) is escalated to a human straight away with advice to contact the relevant emergency or building service; do not continue with routine planning first. Never place orders, sign leases or send notices.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): checklist status, items for qualified review and handoffs to other departments. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
