# Intake Protocol: ask first, once

Some work goes wrong because of a guess, not a mistake: the wrong tone, audience, style, format or level of detail. Redoing that work costs far more than one short round of questions. This protocol says when to ask, how, and how to remember the answers.

## When to ask

Ask first when the skill creates something where taste or purpose decides whether it is right, and the answer is not already known. Typical cases: copy, designs, plans, strategies, specs, job descriptions, policies, presentations and reports for a named audience.

Do not ask when:

- The request or the context profile already answers the question.
- The skill reviews, checks or analyses existing material against a clear standard. Those skills report findings instead.
- The question would only fine-tune a detail that is cheap to change later.

## How to ask

1. **One round only.** In a managed run, the manager collects the "Ask first" questions from every planned skill marked `asks_first: true` in the catalog, removes duplicates, and asks them together before any skill runs.
2. **At most six questions per round.** Keep the ones whose answer most changes the result; for the rest, use a sensible default and say which.
3. **Multiple choice with an "other" option.** Give 2 to 4 concrete options per question, each described by what the person would get, not by jargon.
4. **Turn vague words into choices.** "Professional", "modern", "friendly", "short" and "detailed" mean different things to different people. Offer concrete options instead of accepting the word.
5. **Skip what is known.** Read the context fields the skill lists first. Never ask for something the profile, the request or an earlier answer in this run already gives.
6. **Offer directions when the space is wide.** For creative work, after the answers, offer 2 or 3 contrasting directions in a few lines each and build only the one the person picks.

## How to remember

1. Answers that will hold for future work (brand look and feel, writing tone, audience, regional preferences) belong in the context profile. Propose the exact field and value, and save only after the person confirms, following [context.md](context.md).
2. Answers that only apply to this request go in the run's handoffs, not the profile.
3. Next time, read the saved values and ask only what is missing or has changed.

## Writing an "Ask first" section in a skill

A skill that sets `asks_first: true` in `skill.yaml` must have a `## Ask first` section in SKILL.md with:

- Up to five questions, each with 2 to 4 options.
- For each question, the context field that answers it, if one exists, so it can be skipped.
- Which answers should be proposed for saving, and under which field.

If the person says "just go ahead", proceed with stated defaults and list them at the top of the output.
