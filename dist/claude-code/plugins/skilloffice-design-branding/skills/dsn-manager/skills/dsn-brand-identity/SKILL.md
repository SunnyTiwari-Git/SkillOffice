---
name: dsn-brand-identity
description: Builds or documents a company's brand foundations - positioning, personality, voice summary, color system, typography system and logo usage rules - from the company profile or a short interview, and proposes values for the brand context profile. Use when a business has no brand guide, needs to write down an existing look, is rebranding, or other design and marketing skills need brand rules that are missing.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.2.0"
  department: "09-design-branding"
---

# Brand Identity

Give the company a clear, written brand that every other skill can follow. This skill documents and proposes; it never invents a logo file and never borrows another company's identity.

## Inputs

- What exists today: logo files in `brand-assets/`, colors and fonts in use, any brand guide, example materials.
- Optional: a short interview with the user (see Ask first), competitor names, examples the user likes or dislikes.

Context used from the active profile: `company.name`, `company.description`, `company.industry`, `company.target_audience`, `company.differentiators`, `company.markets`, `marketing.competitors`, `brand.voice`, `brand.tone_dos`, `brand.tone_donts`, `brand.colors`, `brand.typography`, `brand.logos`, `brand.guidelines_document`, `brand.look_and_feel`.

## Ask first

This interview is the core of the skill, so it keeps six questions. Ask them in one round before proposing anything, skipping any the request, the brand assets or the listed context fields already answer.

1. **Who is the main customer, and what must they believe about you?** (skip the first part if `company.target_audience` is set)
   - That you are expert and reliable.
   - That you are affordable and easy to deal with.
   - That you are premium and worth paying more for.
   - That you are local and personal.
   - Other.
2. **Which three words should describe you, and which three never?** (skip if `brand.voice`, `brand.tone_dos` and `brand.tone_donts` are set)
   - Expert, calm, precise.
   - Warm, personal, welcoming.
   - Bold, energetic, playful.
   - Refined, quiet, premium.
   - Other, plus the words to avoid.
3. **What do you do differently from competitors?** (skip if `company.differentiators` is set)
   - Quality or craft.
   - Price or value.
   - Speed or convenience.
   - Service and relationships.
   - Other.
4. **Which brands, in any industry, feel right or wrong, and why?** (skip if `brand.look_and_feel` lists liked and disliked references)
   - Name one to three you like and what you like (colors, type, tone).
   - Name one you dislike and why.
   - No references; describe the feel in words instead.
5. **Where will the brand appear most?** (pick up to two)
   - Website or app.
   - Print and packaging.
   - Signage or a physical space.
   - Social media.
   - Other.
6. **Are there colors or fonts you must keep?** (skip if `brand.colors` and `brand.typography` are set)
   - Keep everything we use now.
   - Keep the logo colors only.
   - Open to new colors and fonts.
   - Other.

Propose saving the answers as `brand.voice`, `brand.tone_dos`, `brand.tone_donts`, `brand.colors`, `brand.typography`, `company.differentiators` and the references as `brand.look_and_feel` (`liked_references`, `disliked_references`), and save only after the person confirms (step 9).

## Steps

1. **Start from what exists.** Read the brand context and assets. If a brand already exists, document it faithfully; do not redesign it unless the user asks for a rebrand.
2. **Fill gaps with the Ask first interview.** Ask only what is missing, in one round, at most 6 questions.
3. **Positioning:** one sentence (for whom, what, how it is different) and 3 to 5 brand personality traits, each with "this, not that" (for example "confident, not arrogant").
4. **Voice summary:** how the brand writes, with do and do not examples. Detailed copy review belongs to the Marketing department.
5. **Color system:** primary, secondary, accent, neutrals and semantic colors with hex values and roles; check text and background pairs against WCAG 2.2 AA. Keep existing brand colors unless rebranding.
6. **Typography system:** heading and body families (readily licensed, for example open-source families), sizes and usage. Note the license of any font proposed.
7. **Logo usage rules** for the existing logo files: clear space, minimum size, approved color versions, backgrounds, and misuse examples (stretching, recoloring, effects). If there is no logo, write a logo brief for a human designer instead of creating one.
8. **Differentiation check.** Compare the proposal with `marketing.competitors`. If it looks like a competitor's or any well-known brand's identity, change it.
9. **Propose context values.** Show the proposed `brand.voice`, `brand.tone_dos`, `brand.tone_donts`, `brand.colors` and `brand.typography` values. Write them to the brand profile only after the user confirms, following the context protocol of the `skilloffice-core` skill (`references/protocols/context.md`).

## Output

1. Brand foundations document: positioning, personality, voice summary, color system, typography system, logo usage rules (or logo brief), imagery and iconography notes.
2. Proposed brand profile values for confirmation.
3. Open questions.

For a document outline see [references/brand-guide-outline.md](references/brand-guide-outline.md).

## Quality checklist

- [ ] Existing brand elements kept unless the user asked to rebrand.
- [ ] Every color pair used for text meets WCAG 2.2 AA.
- [ ] Proposed fonts are licensed for the intended use.
- [ ] Nothing resembles a competitor's or a well-known brand's identity.
- [ ] Brand profile changed only after user confirmation.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never copy or imitate another real company's name, logo, trademark, slogan or distinctive identity. Never generate or replace logo files; ask before changing any brand asset. Trademark clearance needs a qualified professional: say so when a new name or mark is involved.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (`references/templates/handoff.md`, under 400 words): confirmed brand values for `dsn-visual-direction` and `dsn-design-system`. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
