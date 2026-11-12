---
name: sec-dependency-review
description: "Reviews a project's third-party dependencies for supply-chain risk using its manifests, lockfiles and audit output the user provides: known vulnerabilities and whether they are reachable, missing or unpinned lockfiles, abandoned or single-maintainer packages, suspicious names that imitate popular packages, install scripts, risky licenses, and outdated runtimes. Read-only; returns prioritized findings and an upgrade plan. Use when asked to review dependencies, audit packages, check npm audit or pip-audit output, assess open-source risk, or prepare an SBOM review."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "14-cybersecurity"
---

# Dependency Review

Most code in a modern project is other people's code. This review finds the dependencies most likely to hurt the user, and sorts real risk from scanner noise.

Load only the context this skill declares: `technical.stack`, `technical.languages`, `technical.deployment_process`, `technical.standards`.

## Scope and safety

Read-only review of the user's own project files and of audit output the user provides or produces with their own tools. This skill does not install, upgrade or remove packages and does not run audit tools that contact package registries; if fresh audit data is needed, it tells the user which command to run (for example `npm audit --json`, `pip-audit`, `govulncheck`, or the platform's dependency scanner) and reviews the output. Upgrades happen in the manager's correction cycle with approval.

## Inputs

- Manifests and lockfiles (for example `package.json` and its lockfile, `requirements.txt` or `poetry.lock`, `go.mod` and `go.sum`, `pom.xml`, `Gemfile.lock`, `composer.lock`).
- Optional: audit tool output, an SBOM, CI configuration, license policy.

## Steps

1. **Inventory.** Count direct and transitive dependencies per ecosystem. Note which are used at runtime versus only in development or build.
2. **Lockfile hygiene.** Lockfiles exist, are committed and match the manifest; CI installs from the lockfile (for example `npm ci`); version ranges are not so wide that builds change silently.
3. **Known vulnerabilities.** From the audit output, list each advisory with package, installed and fixed versions, severity, and whether the vulnerable code is likely reachable (runtime versus dev-only, whether the affected function is used). Reachable runtime issues rank above dev-only ones.
4. **Package health.** Flag packages that are unmaintained (no releases for a long time, archived), have a single maintainer for a critical role, were recently transferred to a new owner, or are far behind the current major version.
5. **Imitation and confusion risks.** Flag names that look like typos of popular packages, internal package names that could be claimed on a public registry (dependency confusion), and unexpected registries or git URLs as sources.
6. **Install-time behavior.** Note packages with install or post-install scripts in the lockfile metadata, and recommend reviewing them or disabling scripts in CI where possible.
7. **Licenses.** Flag licenses that may conflict with the company's use (strong copyleft in distributed software, unknown or missing licenses, non-commercial terms). License questions go to legal; do not give legal conclusions.
8. **Runtime and base images.** Note an end-of-life language runtime or base container image.
9. **Upgrade plan.** Group fixes: safe patch and minor upgrades first, then major upgrades needing testing, then replacements for abandoned packages. Name the test suite or checks that must pass.

Checklist and severity guide: [references/dependency-checklist.md](references/dependency-checklist.md).

## Report findings

Use the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 14-cybersecurity/sec-dependency-review`, status `open`, with the manifest or lockfile as location. Include a coverage note: which ecosystems and files were reviewed, the date of the audit data, and that advisories are only as current as that data.

## In a managed run

When `sec-manager` runs this skill, return findings and the upgrade plan; upgrades happen in the manager's single correction cycle through software development, with tests. Results are never cached. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (ecosystems and files reviewed, audit data date), Decisions (reachability judgments), Changed files (none), Tests and checks (none run), Open issues (finding ids by severity), Next (upgrade plan through `sec-manager` and `dev-manager`; license questions to legal).
