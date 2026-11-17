# Changelog

All notable changes to SkillOffice are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project follows [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Design: a look-and-feel intake in `dsn-visual-direction` (0.2.0). Before any new design it asks about style, experience, motion, imagery, density and reference sites, offers 2 or 3 directions, and saves the answers as `brand.look_and_feel` so they are not asked again. The Design manager (0.1.1) stops to run it when the look is unknown.

### Fixed

- The OpenSSF Scorecard workflow could not read the repository and failed on every run.
- Release notes for 0.1.0 use full links so they work on the GitHub release page.

### Changed

- Dependabot no longer proposes major `@types/node` updates ahead of the Node version CI runs.

## [0.1.0] - 2026-11-16

First preview release.

### Added

- Phase 0: repository foundations, Apache-2.0 license, NOTICE, security policy, governance, contribution policy and a GitHub security checklist.
- Phase 1: shared core protocols (orchestration, memory, context, token budget, findings, safety).
- Front Desk router skill.
- Templates for department managers, skills, provenance, reports and handoffs.
- Company context templates, including regional settings.
- Department, source and skill registries, and the third-party security review template.
- `skilloffice` helper tool (preview): init, validate, scan, status, verify-file, cache, log, forget and catalog commands.
- Architecture decision records 0001 to 0006.
- 18 departments, each with a manager and specialist skills (168 in total, 114 adapted from 7 pinned open-source sources and 54 original): Shared Productivity, Executive Strategy, HR, Finance, Legal, Sales, Marketing, Customer Support, Product, Design, Software Development, QA, IT Operations, DevOps and SRE, Cybersecurity, Data and AI, Business Operations and PM, Procurement.
- Security reviews, provenance records and evals for every adapted skill; third-party license texts in `registry/licenses/` and attributions in NOTICE.
- `skilloffice-core` skill bundling the shared rules and report templates.
- Packaging: `skilloffice build` produces one Claude Code plugin per department, a plugin marketplace, `.agents/skills` packages (manager-only layout) and the generated department guide `docs/departments.md`.
- Helper commands: `install` and `uninstall` (Claude Code and `.agents/skills` platforms), `log --batch`, `evidence`, `upstream-check`.
- Workflow test fixtures for all 18 departments and a Claude Code measurement script; every department passed one Claude Code run.
- Maintenance guide `docs/maintenance.md` and a monthly upstream check workflow.

### Changed

- Risk labels follow one rule from side effects, enforced by the validator.
- Managers save reusable results with their fingerprints before corrections and write memory in batches.
- Testing and support are Claude Code only (decision 0006). The `.agents/skills` install option stays, labelled untested.

[Unreleased]: https://github.com/SunnyTiwari-Git/SkillOffice/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/SunnyTiwari-Git/SkillOffice/releases/tag/v0.1.0
