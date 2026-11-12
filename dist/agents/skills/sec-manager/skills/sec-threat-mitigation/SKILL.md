---
name: sec-threat-mitigation
description: "Maps identified threats or findings to security controls and produces a prioritized remediation plan: preventive, detective and corrective controls across layers, defense-in-depth coverage, gaps where a threat has no or only one control, effort and impact estimates, and how to test that each control works. Use when asked to plan mitigations, build a remediation roadmap, prioritize security work, check control coverage, or decide what to fix first after a threat model or security review."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "14-cybersecurity"
---

# Threat Mitigation Mapping

Every threat should be met by controls, ideally more than one kind. This skill connects threats to controls, finds the gaps, and turns them into an ordered plan the team can act on.

Load only the context this skill declares: `company.size`, `company.industry`, `technical.stack`, `technical.hosting`, `technical.deployment_process`, `operations.tools`.

## Scope

Defensive planning for the user's own systems. Effort and cost estimates are rough relative sizes (small, medium, large), never quotes or committed delivery dates; dates are set by the team.

## Inputs

- Threats or findings with priorities (from `sec-threat-model`, `sec-secure-code-review`, `sec-dependency-review` or `sec-secrets-exposure-review`).
- Optional: controls already in place, team capacity, constraints.

## Steps

1. **List existing controls** with evidence. Classify each as preventive (stops an attack), detective (notices it) or corrective (recovers from it), and by layer: network, application, data, endpoint and host, identity, process and people.
2. **Map threats to controls.** For each threat, list the controls that address it and how strongly (full, partial, none).
3. **Find gaps.** Flag threats with no control, threats protected by a single control (single point of failure), and threats with prevention but no detection.
4. **Recommend controls.** For each gap, propose a control with: what it is, where it applies, type and layer, which threats it covers, effort (small, medium, large), and expected risk reduction. Prefer controls that cover several threats. Mix types: do not rely only on prevention.
5. **Prioritize.** Order by threat priority first, then risk reduction per unit of effort. Quick wins (high reduction, small effort) go first. Group into "now", "next" and "later" instead of dates.
6. **Plan verification.** For each control, say how to prove it works: a test, a configuration check, a log query, or a tabletop exercise.

Control library and plan template: [references/control-library.md](references/control-library.md).

## Output

A threat-to-control matrix, a gaps list, the prioritized plan (now, next, later) with effort and coverage, defense-in-depth coverage per layer, and verification steps. For managed runs, unmitigated critical and high threats are reported in the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 14-cybersecurity/sec-threat-mitigation`.

## In a managed run

When `sec-manager` runs this skill, return the plan and findings; changes happen in the manager's single correction cycle. Results are never cached. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (threats mapped), Decisions (priorities and trade-offs), Changed files (none), Tests and checks (verification plan), Open issues (gaps still open), Next (usually software development or devops for implementation, product management for scheduling).
