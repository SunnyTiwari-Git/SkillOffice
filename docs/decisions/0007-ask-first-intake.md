# 0007. Ask first: one round of questions before creative work

Date: 2026-11-17
Status: Accepted

## Context

A test run of the Design department built a landing page three times. The request said "warm and friendly"; the first two versions missed what the owner wanted (an editorial look with scroll storytelling), because nobody asked about style, motion or references before building. The same risk applies to any skill whose result depends on taste or purpose: copy, plans, specs, job descriptions, policies, presentations and reports.

## Decision

- A new core protocol, `core/protocols/intake.md`, says when to ask, how (one round, at most six multiple-choice questions, vague words turned into choices, nothing re-asked that is already known) and how to save lasting answers to the context profile after confirmation.
- Skills that benefit set `asks_first: true` in `skill.yaml` and carry a `## Ask first` section with up to five questions. The validator enforces the section; the catalog shows the flag.
- Managers collect the questions of every planned `asks_first` skill and ask them in one combined round before any skill runs (orchestration step 3a).
- Review and analysis skills do not ask first; they report findings instead.
- The brand profile gains `brand.look_and_feel` so design answers are reused.

## Consequences

- One short exchange at the start of creative runs, in return for fewer redesigns and rewrites.
- Answers that hold over time accumulate in the context profile, so later runs ask less.
- Skill versions with the new section moved up one minor version; all managers moved up one patch version.
