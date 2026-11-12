---
name: data-storytelling
description: Turns analysis results the user provides into a clear, honest narrative for a specific audience, such as an executive summary, business review, decision memo or slide outline, leading with the insight, supported by a few well-chosen numbers and charts, and ending with a specific recommendation or ask. Use when presenting analytics to leadership or non-technical readers, writing a data-driven report, preparing a quarterly business review or making a recommendation from data. Never adds numbers that are not in the analysis.
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "15-data-analytics-ai"
---

# Data Storytelling

Numbers persuade only when the reader knows why they matter. Lead with the "so what", show just enough evidence, and end with the decision you need.

## Inputs

- The analysis results: findings, tables, charts and their caveats (ideally from `data-analysis` and checked by `data-validation`).
- The audience, the decision they own and the format (one-page memo, email, slide outline, business review).
- Optional: the recommendation the user has in mind, constraints, the time the audience has.

Context used from the active profile: `company.name`, `company.description`, `brand.voice`, `regional.currency`, `regional.date_format`, `regional.output_language`.

## Steps

1. **Find the one message**: the single sentence the audience should remember, with its key number. If there are several, rank them and keep at most three.
2. **Choose the structure** from [references/story-structures.md](references/story-structures.md): problem and solution, trend and turning point, comparison of options, or a monthly review.
3. **Write the headline** as finding plus impact ("Early churn costs about 2.4 million a year; most of it happens in the first 90 days"), using only numbers from the analysis.
4. **Build the evidence**: context and baseline, the two or three numbers that prove the point, one chart per point (built with `data-visualization` rules), and the caveats that a skeptic would raise.
5. **Make the recommendation specific**: what to do, who decides, the cost or effort if known, and how success will be measured. Present impact as a range with the assumptions behind it. Mark estimates clearly as estimates.
6. **Match the audience**: executives get the conclusion first and detail on request; technical readers get the method sooner. Use plain words, the brand voice and `regional.output_language`.
7. **Check honesty**: every number traces to the analysis; correlation is not presented as causation; uncertainty is stated; nothing material is left out because it weakens the story.

## Output

1. The narrative in the requested format: headline, context, evidence with charts or chart suggestions, caveats, recommendation, the ask and next steps.
2. A source list mapping each number in the story to its place in the analysis.
3. Optional speaker notes or a one-paragraph summary for email.

## Quality checklist

- [ ] The headline states an insight, not a topic.
- [ ] Every number appears in the provided analysis; estimates are labeled.
- [ ] At most three main points.
- [ ] Caveats and uncertainty are visible, not buried.
- [ ] The ask is specific.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). The story is a draft: never send, post or present it on the user's behalf. Commitments to customers, investors or partners need the user's approval.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): the headline, the recommendation, the numbers used and their sources. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
