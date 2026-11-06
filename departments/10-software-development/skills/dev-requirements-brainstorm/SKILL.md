---
name: dev-requirements-brainstorm
description: Turns a software request into an agreed, written design before any code is written. Use when someone asks to build a feature, component, app, integration or behavior change and important details are missing, or when they ask to brainstorm, scope or design something. Finds out what they want and why, lays out two or three approaches, and gets the design approved.
license: Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md
metadata:
  project: "SkillOffice"
  version: "0.1.0"
---

# Requirements Brainstorm

You are good at building. You build what you believe the person wants, and that belief is usually thinner than it feels. This skill finds out what they actually want, and why, before anything gets built.

When you understand the why, you make the many small decisions they never mention the way they would have made them.

## First: what do you actually know?

- **Everything that matters is in the request** ("make the button blue"). This is a quick, clear task. Do it and say what you did. This skill is done.
- **Something important is missing.** Start the conversation below.

Before implementing, in order:

1. Lay out the approaches in a message of their own and have the person pick one.
2. Write the design document, short or full (see Size the work).
3. Get their approval of that document.
4. Hand off to `dev-implementation-plan`.

If nothing is open and there is one sensible way, steps 1 to 3 can happen in your first message (see Your first message).

## Look before you ask

In an existing project, or when they gave you context (a spec, a ticket, files, earlier conversation), read it first. Read the code or material it connects to until you can explain how the relevant parts work today and what this change would touch. Never ask what the project or their context already answers. Never reopen what they already decided.

Use the company context only for what this skill declares: `company.name`, `technical.stack`, `technical.languages` and `technical.standards`. If a field is empty and matters, ask once.

## Your first message

Move the work forward with one of these:

- **They already said what they want** (a spec or detailed request). Aim for about 200 words. Echo the request in your own words: what, who it is for, and why, as far as they said. Add what you found that bears on it. If you found a constraint, conflict or cheaper path they may not have considered, say so plainly. End with one line inviting corrections. If they did not say why, ask one open question about that. If they did, and something still open would change what gets built, ask about the one that matters most, with concrete options, trade-offs and your pick. If nothing is open, end with a short design and ask them to approve it.
- **They did not.** Ask one open question, in their own terms, about the biggest unsettled thing. Say what the answer would change. Example for "a website for my bakery": "If it is mostly for people deciding whether to stop by, I would lead with hours and today's items; taking orders is a different site. What do you want a visitor to do?"

If they did not ask for a brainstorm, end with a light offer: "Or if you would rather I just start, say so." If they take it, state any major choice (platform, language) in one line and proceed. This skill is done.

## The conversation

Ask a question only when the answer would change what gets built and neither the request nor the project answers it. Otherwise state your call and reason as a proposal they can correct. Ask one question at a time, in plain language, matching their vocabulary.

- **Get them describing.** Until you know why they want it, ask open questions with no example answers attached. Their words carry intent your options cannot.
- **How it gets made.** If they talk about outcomes, they are handing you the how: make those calls and state each in one line. If they ask about trade-offs, give options with your pick. Build on what the existing project already uses.
- **Ground to cover** (territory, not a script): what it is and what makes it special; why now and what success looks like; goals, non-goals and anti-goals; prior art they loved or hated; current state; details they care about.
- **Make every question specific** to their project, built on their last answer or something you found.
- **Do recon** when it would help: look deeper into the project or their files. Say what you looked for and found.
- **Show, do not tell.** When seeing would help more than reading, sketch it in text: a few lines of what they would see.
- **Spike when useful.** A quick throwaway build is often the cheapest way to learn. Offer one when it helps. A spike stays labeled throwaway; keeping it is a new request that comes back through this skill.

## Lay out the approaches

Once you understand what they want, and before writing anything up, send the ways of building it in a message of its own. Drop weak options, including any that work against why they want it. Sketch the two or three that remain concretely, grounded in the actual project, with trade-offs. Recommend one and say why, then ask which way to go. If there is genuinely one sensible way, say so and explain why the others do not fit.

## Play it back

As soon as you understand one part, describe it back in about 200 to 300 words, then continue with the next part. Only what they said goes in as theirs. Anything you filled in is your proposal, with your reason. End each chunk by asking what is wrong or missing.

## Size the work

Say how big the work is in plain words. They can override it.

| Size | Design document |
| --- | --- |
| A small change | Short: what you already agreed, written down |
| A project | Full written design (below) |

Both include an **Approaches** part: the options considered, trade-offs, which one they picked, and why. If the work grows mid-task, say so and step up a size. If it is really several independent projects, agree an order and brainstorm one at a time.

## The written design

Write a plain document a capable builder could plan from without asking the person again. Cover: intent and the why; goals, non-goals and anti-goals; constraints; approaches; the decisions they made, as they made them; what is left to the builder.

**Where it goes:** the location the project conventions in `technical.standards` name, if any, otherwise `docs/specs/YYYY-MM-DD-<topic>-design.md` in a software project. The person's preference overrides both. Writing this file is the only file change this skill makes.

**Builder check** (projects only): read the document as a builder who cannot talk to the author. If your platform supports subagents, give a fresh one the prompt in [references/builder-check.md](references/builder-check.md); otherwise do the check yourself. Sort the questions into three piles: already answered (add to the document), minor (decide it, mark it as your call), and theirs (only the person can answer, and it changes what gets built). Ask the "theirs" pile in one message, most important first. That is the only round of questions the check produces.

## Hard gate

Nothing gets built until the person approves the design document. Building includes writing product code, scaffolding, installing dependencies, creating projects and starting implementation. Reading and exploring are fine.

Exceptions: they opted out of the questions, or they approved a throwaway spike.

## Red flags

| Thought | Reality |
| --- | --- |
| "I will offer a menu of what they might want" | Options steer. Ask them to describe it first. |
| "I will fill in sensible defaults" | Good. Say them out loud. A default they never heard is one they could not reject. |
| "They said it sounds good" | Approval covers what you showed them. An unwritten design is not approved. |
| "The spike works, I will keep building on it" | Keeping it is a new request. Back through this skill. |

## In a managed run

When `dev-manager` runs this skill, follow the `skilloffice-core` protocols at `references/protocols/memory.md` and `references/protocols/safety.md`: log a `decision` event for the chosen approach and record the design document's path. On its own, the memory steps are optional.

## Handoff

End with a handoff (under 400 words) using the SkillOffice handoff template: Done (design written and approved), Decisions (chosen approach and why), Changed files (the design document), Tests and checks (none), Open issues, Next (`dev-implementation-plan`, or `dev-system-design` first if the design needs architecture work).
