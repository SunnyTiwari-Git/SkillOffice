# UI/UX, Graphic Design and Branding

Status: **pilot, not yet platform-tested.** Planned test platforms: Claude Code and Antigravity.

This department helps a business plan, design and check its websites, apps and brand. It works for any kind of company: software firms, agencies, shops, clinics, manufacturers or freelancers. Your company details (name, audience, brand voice, colors, fonts, logos) come from your SkillOffice context profile, so you only enter them once.

The skills plan, design, specify and review. They never publish or deploy anything, never create logo files, and never copy another company's brand. Building the designed pages is handed to the Software Development department.

## How to use it

Ask the **design manager** (`dsn-manager`) for what you need, in plain words. For example:

- "Design a new website for our clinic and prepare it for our developers."
- "Review our pricing page. Here is the HTML."
- "We have a logo and colors but no brand guide. Write one."
- "Is our signup form accessible?"
- "Our landing page looks generic. What would make it ours?"

The manager picks only the skills your request needs, runs them in order, has the review skills check the work, fixes problems once, and gives you one report with anything left for you to decide.

## Skills

| Skill | What it does | Type |
| --- | --- | --- |
| dsn-user-research | Plans user research and turns research notes into themes and recommendations | Creates |
| dsn-site-structure | Sitemap, navigation, user flows and what each page must say | Creates |
| dsn-visual-direction | A distinctive look: colors, fonts, layout concept, design principles | Creates |
| dsn-design-system | Reusable design tokens and components; also audits existing systems | Creates and reviews |
| dsn-brand-identity | Brand guide: positioning, voice, colors, fonts, logo rules | Creates |
| dsn-ux-copy | Button labels, error messages, empty states, onboarding text | Creates and reviews |
| dsn-design-critique | Usability, visual hierarchy and consistency feedback | Reviews |
| dsn-accessibility-review | Accessibility audit against WCAG 2.2 AA | Reviews |
| dsn-responsive-review | How the design works on phones, tablets and desktops | Reviews |
| dsn-ai-pattern-review | Spots generic, template-like patterns and suggests specific alternatives | Reviews |
| dsn-design-handoff | Build specifications for developers | Creates |

## Playbooks

| Playbook | Skills, in order |
| --- | --- |
| New website or app design | Requirements, site structure, visual direction, design system, handoff to development, then critique, responsive, accessibility and AI-pattern reviews |
| Brand identity setup | Brand identity, color accessibility check, then visual direction and design system if wanted |
| Design review of an existing page | Critique, responsive, accessibility, AI-pattern reviews, and UX copy review if needed |
| Accessibility audit only | Accessibility review |
| Developer handoff | Design handoff, accessibility review if not done yet |

A design is never marked ready while a critical accessibility problem is open.

## Context it uses

Company description, industry, audience and markets; brand voice, colors, fonts, logos and brand guide; marketing keywords and competitors; technical stack and standards; regional language and jurisdictions. Missing details are requested only when a skill needs them.

## Where the skills come from

Seven skills are adapted from two open-source collections by Anthropic, both Apache-2.0: [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) (user research, design system, UX copy, design critique, accessibility review, design handoff) and [anthropics/skills](https://github.com/anthropics/skills) (visual direction, from frontend-design). Site structure, brand identity, responsive review, AI-pattern review and the manager are original SkillOffice work. Each skill's `PROVENANCE.md` lists the exact source version, what changed and the license notice. Each adapted skill has a security review in `registry/security-reviews/`. No scripts or service connectors were imported.

## Limits

- An accessibility review finds problems but cannot certify legal compliance. Test with real assistive technology too.
- AI-pattern signals are quality indicators, never proof of how a design was made.
- Trademark and logo clearance needs a qualified professional.
- Reviews are only as complete as the material you share: code allows deeper checks than screenshots.
