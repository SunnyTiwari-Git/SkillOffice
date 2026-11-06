# Design playbooks

Each playbook lists inputs to confirm, the default skill order, when to skip a skill, and what the correction cycle usually fixes. Always follow the core orchestration protocol: plan first, run only what is needed, one correction cycle, one report.

## 1. New website or app design

**Confirm first**: what is being built, for whom, the main goal (for example sign-ups or bookings), existing brand rules, pages or screens in scope, the tech stack if known.

| Order | Step | Skip when |
| --- | --- | --- |
| 1 | Understand requirements: restate goal, audience, scope; ask one question if unclear | Never |
| 2 | dsn-user-research (plan or synthesis) | Research already exists or the user declines; use what is known |
| 3 | dsn-site-structure | Single screen or the structure is already decided |
| 4 | dsn-visual-direction | An approved visual direction already exists |
| 5 | dsn-design-system (create) | A design system exists; use audit mode instead if it may be inconsistent |
| 6 | dsn-design-handoff, then handoff to Software Development (`dev-manager`) for implementation | The user only wants designs, not a build |
| 7 | dsn-design-critique | Never skip once a design or build exists |
| 8 | dsn-responsive-review | Never skip for web or app screens |
| 9 | dsn-accessibility-review | Never skip |
| 10 | dsn-ai-pattern-review | Never skip for new marketing or landing pages; optional for internal tools |
| 11 | Consolidate findings, one correction cycle, verify, report | Never |

Steps 7 to 10 review the same design; they can run in parallel where the platform supports it, but merge their findings before the correction cycle.

**Correction cycle usually fixes**: contrast and focus issues, inconsistent tokens, overflow on small screens, generic hero and card layouts, unclear calls to action.

**Possible handoffs**: Software Development for the build; Marketing for page copy beyond interface text; Quality Assurance for cross-browser testing when available.

## 2. Brand identity setup

**Confirm first**: what exists today (logo, colors, fonts, guide), whether this is documenting or rebranding, where the brand appears most.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | dsn-brand-identity | Never |
| 2 | dsn-accessibility-review (color pairs only) | Never skip if colors were proposed or changed |
| 3 | dsn-visual-direction | The user only wants the brand guide |
| 4 | dsn-design-system (create) | The user only wants the brand guide |

**Correction cycle usually fixes**: color pairs that fail contrast, unlicensed font choices, elements too close to a competitor's identity.

**Stop**: before writing brand profile values, get the user's confirmation. Never create or replace logo files.

## 3. Design review of an existing page

**Confirm first**: the page (code, screenshots or URL content the user provides), its purpose and audience, the stage.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | dsn-design-critique | Cached result still valid and the page is unchanged |
| 2 | dsn-responsive-review | Only one screen size was provided and the user does not want more; say so in the report |
| 3 | dsn-accessibility-review | Never skip |
| 4 | dsn-ai-pattern-review | The page is an internal tool and the user does not care about distinctiveness |
| 5 | dsn-ux-copy (review mode) | No interface copy issues found |

**Correction cycle usually fixes**: proposed changes as a design or code patch for the user's files only; never change a live site.

## 4. Accessibility audit only

**Confirm first**: scope (page, flow, component), material (code allows a deeper audit than screenshots), any legal requirement.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | dsn-accessibility-review | Never |

**Correction cycle**: only if the user asks for fixes; the report lists criteria, fixes and what needs testing with real assistive technology. Never claim full compliance.

## 5. Developer handoff

**Confirm first**: the final design, the tech stack, the design system in use.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | dsn-design-handoff | Never |
| 2 | dsn-accessibility-review | Already done for this exact design and cached result still valid |

**Correction cycle usually fixes**: missing states, raw values instead of tokens, unspecified breakpoints.

**Possible handoff**: Software Development (`dev-manager`) to build it.

## Merging findings across reviews

- Critique and accessibility often both report low contrast: one finding, keep the accessibility criterion in the title and the higher severity.
- Responsive and accessibility often both report small targets: one finding.
- AI-pattern and critique may both flag a weak hero: one finding, with the more specific recommendation.
