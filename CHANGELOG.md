# Changelog

All notable changes to SkillOffice are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project follows [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Phase 0: repository foundations, Apache-2.0 license, NOTICE, security policy, governance, contribution policy and a GitHub security checklist.
- Phase 1: shared core protocols (orchestration, memory, context, token budget, findings, safety).
- Front Desk router skill.
- Templates for department managers, skills, provenance, reports and handoffs.
- Company context templates, including regional settings.
- Department, source and skill registries, and the third-party security review template.
- `skilloffice` helper tool (preview): init, validate, scan, status, verify-file, cache, log, forget and catalog commands.
- Architecture decision records 0001 to 0005.
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
