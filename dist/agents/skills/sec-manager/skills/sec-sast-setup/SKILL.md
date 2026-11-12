---
name: sec-sast-setup
description: "Plans and configures static application security testing (SAST) for the user's own codebase: choosing a scanner that fits the languages and CI, a baseline scan, a rollout that blocks only on high-confidence critical issues, false-positive handling, custom rules for project-specific risks, and CI or pre-commit integration. Writes configuration files only after the user approves. Use when asked to set up code scanning, Semgrep, CodeQL, SonarQube or similar, add security checks to CI, or reduce noisy scanner results."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "14-cybersecurity"
---

# SAST Setup

Static scanning catches common code weaknesses on every change, but only if developers trust it. This skill sets up scanning that starts quiet, blocks only what matters, and improves over time.

Load only the context this skill declares: `technical.stack`, `technical.languages`, `technical.deployment_process`, `technical.standards`, `operations.tools`.

## Scope and safety

Configure scanning for code the user owns. Writing configuration files, installing tools and adding CI steps all change the user's project: describe the change first and write files only after the user approves. Installing new tools or dependencies, and any step that sends code to a third-party service (a hosted scanner or cloud dashboard), needs explicit approval. Scans run only on the user's own code, through the platform's normal permission prompts. Tool tokens for CI go in the CI system's secret store, never in files.

## Inputs

- The repository or its language and framework list.
- The CI system and how changes are reviewed (pull requests, protected branches).
- Optional: an existing scanner and its noise problems, compliance drivers.

## Steps

1. **Assess.** List languages, frameworks and generated or vendored code to exclude. Note the CI system and whether code may leave the company (affects hosted versus local tools).
2. **Choose a tool.** Compare options on language coverage, custom rules, CI fit, where the code is analyzed, and license or cost. Present two options with trade-offs; let the user choose. Comparison: [references/sast-playbook.md](references/sast-playbook.md).
3. **Baseline.** Plan a first scan on the main branch. Sort results by severity and confidence; record existing findings as a baseline so new code is judged on new issues only.
4. **Rollout in stages.**
   - Stage 1: report only, in pull requests, security-focused rules only.
   - Stage 2: block merges on new high-confidence critical and high findings.
   - Stage 3: add more rule sets and custom rules once noise is low.
5. **Tune.** Exclude tests, fixtures, generated and vendored code. Every suppression has a written reason and an owner; review suppressions periodically.
6. **Custom rules.** Add rules for project-specific risks found by threat modeling or past incidents (for example "queries must go through the repository layer", "no direct use of the raw HTML helper"). Each rule gets a message telling developers the safe alternative.
7. **Integrate.** Propose the CI job and, optionally, a pre-commit hook. Pin tool and action versions. Results go to the code review tool in a standard format (for example SARIF) where supported.
8. **Hand over.** Write a short "how to read and fix scanner findings" note for developers, and who owns triage.

## Output

A setup plan with the chosen tool and reasons, exact configuration and CI changes (as proposed diffs, applied only after approval), exclusions, the rollout stages, suppression policy and custom rules. Problems found in the current setup (for example a scanner that is installed but never blocks anything, or secrets in CI config) are reported in the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 14-cybersecurity/sec-sast-setup`, with secrets masked to their first 4 characters.

## In a managed run

When `sec-manager` runs this skill, configuration changes are applied in the manager's single correction cycle after approval. Results are never cached. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (tool chosen, files proposed or changed), Decisions (tool, blocking threshold, exclusions), Changed files (list, only if approved), Tests and checks (baseline scan result if run), Open issues (baseline findings to triage), Next (usually `sec-secure-code-review` for high findings, or devops for CI ownership).
