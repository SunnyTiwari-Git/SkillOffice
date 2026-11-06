# Provenance: dsn-visual-direction

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-skills |
| Upstream repository | https://github.com/anthropics/skills |
| Upstream path | skills/frontend-design/SKILL.md |
| Upstream commit | ca45fc496a3436251f191354091d557da31c15b5 |
| Upstream license | Apache-2.0 (skills/frontend-design/LICENSE.txt) |
| Security review | registry/security-reviews/09-design-branding--dsn-visual-direction.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Rewrote as a numbered process with a design plan, a self-review against the brief, a "one bold element" step, a quality floor and implementation notes.
- Added an explicit order of priority: the user's brief, then the company's brand rules from the SkillOffice context profile (`brand.colors`, `brand.typography`, `brand.logos`, guidelines document), then free choices.
- Moved the list of common generated-design defaults into `references/generic-defaults.md` and reworded it; the reference to a specific product's accent color is kept as a description without naming the product.
- Added a safety rule against copying or imitating another real company's brand or distinctive look.
- Implementation notes recommend tokens as CSS variables; contrast is stated against WCAG 2.2 AA.
- Shortened the writing guidance and pointed detailed interface copy to `dsn-ux-copy`.
- Removed the instruction to take screenshots of one's own work, since not every platform supports it; critique is done in the review step and by `dsn-design-critique`.
- Added inputs, output, quality checklist, safety and handoff sections.

## Files not imported

- `skills/frontend-design/LICENSE.txt`: license text kept centrally in `registry/licenses/anthropics-skills.txt`, not copied into the skill.

## Attribution

Derived from anthropics/skills (frontend-design), Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The skill-level license file is the Apache License, Version 2.0; the repository's THIRD_PARTY_NOTICES.md covers other skills, not this one. This file was modified as listed above.

The upstream text refers to "The Elements of Typographic Style" (a typography book) and a well-known piece of fashion advice; these are general references, not adapted works.
