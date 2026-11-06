---
name: mkt-public-relations
description: Plans and drafts public relations and earned media work, including story angles, journalist pitches, press releases, responses to reporter requests, newsjacking angles, press page and media kit checklists, podcast guest prep, and holding statements for a crisis such as an outage, data incident or public complaint. Use when the user asks about PR, press coverage, a press release, pitching a journalist, a media list, a media kit, getting featured, thought leadership placements, podcast guest prep, or how to respond publicly when something goes wrong.
license: Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "06-marketing-content-pr"
---

# Public Relations

Help the company earn coverage from journalists, podcasts and newsletters, and respond well when something goes wrong. PR multiplies distribution; it rarely drives sales directly. Its value is credibility, links, relationships and material for sales conversations.

Not legal advice: anything involving a data incident, injury, lawsuit, regulator or admission of fault must be reviewed by qualified legal counsel before publication.

## Inputs

- The task: story angle, pitch, press release, reporter request response, press page, podcast prep, or crisis statement.
- The facts: news, data, milestone, customer result, or what happened (for a crisis).
- Optional: target outlets or journalists, embargo or exclusive plans, spokesperson.

Context used from the active profile: `company.name`, `company.description`, `company.website`, `company.markets`, `company.differentiators`, `brand.voice`, `marketing.ideal_customers`, `regional.output_language`, `regional.date_format`, `regional.jurisdictions`.

## Steps

1. **Decide whether PR fits.** PR works when there is a real story (data, strong opinion, milestone with a narrative, a customer's sharp before and after, a fresh angle on a trend), a spokesperson with time, and a destination page. If not, say so and suggest what would create a story.
2. **Find the angle.** The story is the trend, the data, the conflict or the human; the product is the evidence. Common angles: founding story, small player against an established way of doing things, a broken system the company fights (never attack a named competitor). See [references/pr-playbook.md](references/pr-playbook.md).
3. **Choose the mode(s).** Reactive (comment on news fast), proactive (pitch original stories), inbound (answer reporter requests), owned (press page and media kit). Most teams should run at least three.
4. **Draft.**
   - Pitch: under 150 words, a subject line that predicts the headline, the hook, the evidence, a clear ask (interview, exclusive, embargo, quote).
   - Press release: headline, date line, lead paragraph answering who, what, when, where, why, a quote, supporting facts, company boilerplate, media contact.
   - Reporter request response: under about 200 words, directly answering the question, with credentials.
   - Podcast prep: show research, recurring themes, the guest's stories mapped to them, 3 key messages.
5. **Check the pitch quality bar** in the reference before anything goes out.
6. **Crisis response** (if something went wrong): assign a severity, confirm the facts, name one spokesperson, draft a holding statement (what is known, what is being done, when the next update comes), set the update time. Loop in legal counsel for data incidents, injuries, lawsuits or regulators. Templates in the reference.

## Output

The requested drafts plus: target outlet or journalist criteria (not invented contact details), a short send plan, what to measure (coverage count, authority of placements, referral traffic, brand search lift, sales conversations citing coverage), and open questions.

Dates use `regional.date_format`.

## Quality checklist

- [ ] There is a genuine news hook.
- [ ] Every fact, number and quote is real and approved by the user; quotes are clearly marked as drafts for the named person to approve.
- [ ] No buzzwords such as "revolutionary", "game-changing", "disruptive".
- [ ] Crisis statements are factual, take responsibility where appropriate, and were flagged for legal review.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never send pitches, releases or statements; the user sends them after review. Never invent journalist names, email addresses, coverage or quotes. Do not disclose confidential information, unannounced financials or personal data about customers or staff.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words) and follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`). Usual next steps: mkt-brand-review and, for crisis statements, the legal department.
