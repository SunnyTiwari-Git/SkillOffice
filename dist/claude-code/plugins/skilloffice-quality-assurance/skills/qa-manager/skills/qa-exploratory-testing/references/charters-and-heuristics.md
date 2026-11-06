# Charters and heuristics

## Charter template

Explore {target} with {resources} to discover {information}.

Good charters are narrow enough to finish in one session and say what kind of information you want.

| Weak | Better |
| --- | --- |
| Test the app | Explore account settings with a second browser session to discover how concurrent edits are handled |
| Check search | Explore product search with misspellings, very long queries and other languages to discover how relevance and errors behave |
| Try the API | Explore the orders API with missing and extra fields to discover what validation messages clients receive |

## Product elements to vary

Change one element at a time and watch what happens.

- **Structure:** what the product is made of: pages, components, files, configuration.
- **Function:** what it does: every feature, including error handling and hidden features such as undo or autosave.
- **Data:** what it processes: empty, huge, special characters, duplicates, many records, different languages and formats.
- **Interfaces:** how it connects: user interface, APIs, imports and exports, integrations.
- **Platform:** what it depends on: browsers, devices, operating systems, network speed, third-party services.
- **Operations:** how it is used in practice: typical journeys, power users, interrupted sessions, users with access needs.
- **Time:** when and how long: time zones, date boundaries, slow responses, timeouts, sessions left open overnight, two actions at once.

## Consistency oracles: is this a problem?

A behavior is suspicious when it is inconsistent with:

- **History:** how the product behaved before.
- **Image:** the quality the company wants to project.
- **Comparable products:** how similar products behave.
- **Claims:** what documentation, marketing or the UI itself says.
- **User expectations:** what a reasonable user would expect.
- **The product itself:** how other parts of the same product handle the same thing.
- **Purpose:** what the feature is for.
- **Standards and laws:** accessibility guidelines, data protection, industry rules.

When something feels wrong, name the oracle it violates. That turns "this seems off" into a clear bug report or question.

## Quick attacks for any form or flow

- Leave everything empty; fill everything with the maximum length.
- Paste text with emoji, right-to-left characters and leading or trailing spaces.
- Double click submit; press back after submit; refresh in the middle of a flow.
- Open the same record in two tabs and change both.
- Slow the network or go offline mid-action.
- Use only the keyboard.

## Session sheet

Charter · Time box · Environment and build · Start time

- Notes:
- Bugs:
- Issues and questions:
- Not covered:
- Next charters:
