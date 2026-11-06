# 0001. Record architecture decisions

Date: 2026-11-06
Status: Accepted

## Context

SkillOffice is owner-controlled and built in phases with approval gates. The owner needs a clear record of why each significant choice was made, and future maintainers need to understand past trade-offs.

## Decision

Record every significant decision as a short Architecture Decision Record (ADR) in `docs/decisions/`, numbered in order. Each ADR states the context, the decision, the consequences and the date. A decision changes only through a new ADR that supersedes the old one.

## Consequences

- Decisions stay traceable without reading old conversations.
- Each significant change takes a few extra minutes to document.
