# 0004. Manager-only install by default

Date: 2026-11-06
Status: Accepted

## Context

The Agent Skills standard loads every installed skill's name and description, about 100 tokens each, at the start of every session. A full install of all departments could hold 200 or more skills, costing 20,000 tokens or more before any work begins and making wrong skill selection more likely.

## Decision

By default, install only the core skills and the chosen department managers as top-level skills (about 20 entries). Each manager's specialist skills ship inside its own installed package as reference files that the manager opens only when its run plan needs them. Users can still install any specialist skill as a top-level skill on its own.

The adapters generate this layout. The canonical skill folders in the repository do not change.

## Consequences

- Startup context stays small, roughly 2,000 tokens for a typical install.
- Skill selection is more reliable because the AI chooses among a few managers.
- Specialist skills are not directly invocable unless installed individually.
- Adapter generation is slightly more complex.
