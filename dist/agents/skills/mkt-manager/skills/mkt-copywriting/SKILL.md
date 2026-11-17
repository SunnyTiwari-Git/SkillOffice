---
name: mkt-copywriting
description: Writes or rewrites marketing copy for web pages (homepage, landing, pricing, feature, about, product pages), headlines, taglines, value propositions and calls to action, in the company's brand voice, with supportable claims and no generic AI-sounding phrasing. Use when the user asks to write copy, improve or rewrite a page, fix a headline or CTA, describe a product, or says the copy is weak or sounds like AI. For editing existing copy line by line, use mkt-copy-editing. For emails, use mkt-email-sequence.
license: Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md
metadata:
  project: "SkillOffice"
  version: "0.2.0"
  department: "06-marketing-content-pr"
---

# Copywriting

Write marketing copy that is clear, specific and drives one action. Clarity beats cleverness. Every claim must be supportable.

## Inputs

- Page or asset type, and the ONE action the reader should take.
- Existing copy or a brief.
- Optional: traffic source, what readers already know, proof points (numbers, testimonials, case studies), a writing sample to match.

Context used from the active profile: `company.name`, `company.description`, `company.products_and_services`, `company.differentiators`, `brand.voice`, `brand.tone_dos`, `brand.tone_donts`, `marketing.ideal_customers`, `regional.output_language`, `regional.currency`.

## Ask first

Ask these in one round before writing, skipping any that the request or the listed context fields already answer. Skip this section for a point edit (situation C below).

1. **The one action.** (a) Book a call or consultation; (b) start a trial or sign up; (c) buy, or request pricing; (d) other.
2. **Who reads it** (skip if `marketing.ideal_customers` covers it). (a) Cold visitors from ads or search who do not know the company; (b) warm visitors who know the problem and are comparing options; (c) existing customers or returning visitors; (d) other.
3. **Tone** (skip if `brand.voice` is set). Instead of "professional" or "catchy": (a) plain and direct, short sentences, no jargon; (b) warm and conversational, like talking to a neighbor; (c) expert and precise, using the terms the audience uses; (d) other.
4. **Length.** (a) Headline, subhead and CTA options only; (b) a short page: hero and three sections; (c) a full page: hero, proof, benefits, how it works, FAQ and final CTA; (d) other.
5. **Proof available.** (a) Numbers or results you can share; (b) testimonials or reviews you have permission to use; (c) none yet, so lines that need proof are marked `[NEED: ...]`; (d) other. Never fabricate statistics or testimonials.

If `brand.voice` or `marketing.ideal_customers` was empty, propose saving the tone or audience answer there, and save only after the person confirms. All other answers apply to this request only.

## Steps

1. **Ask, then diagnose.** Run the Ask first questions (not needed for a point edit). Then state in one line which situation applies, with evidence:
   - **A. Blank or generic**: build the argument from the brief and context. Freedom on angle, none on facts.
   - **B. Real voice present**: keep the author's argument, vocabulary and emphasis; fix the buried point, vague lines and structure.
   - **C. Point edit**: change only what was asked, plus the minimum around it. Return the rest untouched.
2. **Read taste from the input (B and C).** Their word choices, where they spent words and what they left out are deliberate. If they give a writing sample, match its sentence length, punctuation and paragraph openings.
3. **Decompose and lock.** Break the page into units (headline, subhead, CTA, each section heading and body, proof lines). For each unit draft 2-3 candidates, keep the best, fix its worst flaw, lock it. Then read the whole page once for flow.
4. **Three-question gate** for every line:
   - Can the reader picture it?
   - Can it be proven true or false?
   - Could a competitor write the exact same sentence? If yes, rewrite it.
   If a line fails and the fact needed to fix it is missing, mark it `[NEED: ...]` instead of inventing one.
5. **Claims must be supportable.** If a requested claim is not supported, do not write it and do not drop it silently: name it, explain why, offer the closest supportable version and say what evidence would unlock it (a review export, a written guarantee, a certification, a citable study).
6. **Remove AI-sounding patterns.** Check against [references/writing-rules.md](references/writing-rules.md) before delivering.
7. **Leave-it-alone test.** For each change ask: measurably better, or just different? Revert changes you cannot justify.

## Page structure (situation A)

- **Hero**: headline (the single most important message, specific), subhead (1-2 sentences adding specificity), primary CTA (action + what they get, for example "Get the pricing guide", not "Submit").
- **Core sections**, as needed: social proof, problem, solution and 3-5 benefits, how it works in 3-4 steps, objections and FAQ, final CTA with risk reversal.
- Landing pages: one message, one CTA, headline matches the traffic source. Pricing pages: help the reader pick a plan. Feature pages: feature to benefit to outcome.

## Output

- **Point edit (C)**: only the changed lines, each with a one-line reason.
- **Page copy (A, B)**: copy organized by section; short annotations for key choices; 2-3 alternatives for headline and CTA with a rationale each; page title and meta description if the page is public.

Write in `regional.output_language`. Prices in `regional.currency`.

## Quality checklist

- [ ] Diagnosis stated before writing.
- [ ] One primary action per page.
- [ ] Every claim is supported or flagged with `[NEED: ...]`.
- [ ] Customer language over company language; benefits over features.
- [ ] Passes the AI-pattern check in the writing rules.
- [ ] Matches `brand.voice` and respects `brand.tone_donts`.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never fabricate statistics, testimonials, customer names or guarantees. Health, financial and legal claims need the user's confirmation that they are substantiated and approved. Do not publish copy anywhere.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words) and follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`). Usual next steps: mkt-copy-editing and mkt-brand-review.
