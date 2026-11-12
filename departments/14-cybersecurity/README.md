# Cybersecurity

**Status:** pilot, not yet platform-tested. Planned test platforms: Claude Code and Antigravity.

This department helps you protect your own software and organization: understand how your systems could be attacked, review code for security weaknesses, check your third-party packages and look for leaked passwords or keys, turn risks into clear requirements and a fix plan, set up automatic security scanning, write practical security policies, and respond calmly if something goes wrong. It works with any language or cloud. Your details (technology, hosting, tools, where you operate) come from your SkillOffice company context.

## Defensive only

This department only works on systems you own or are explicitly allowed to assess. It will not attack other people's systems, write exploits or malware, or help avoid detection. If you ask for that, it declines that part and offers the defensive alternative. When it finds a password or key, it shows only the first 4 characters, never uses it, and tells you to change it.

## How it works

You talk to the **Cybersecurity manager** (`sec-manager`). It confirms what is in scope, picks only the skills your request needs, runs them in order, collects the problems found, fixes its own security documents in **one** correction round, checks the result, and gives you one report that also says what was not examined. Code fixes are handed to the Software Development department; infrastructure fixes to DevOps.

Security results are never reused from earlier runs: every check runs fresh. The manager always asks before running tools, changing any system, or sending anything to anyone. Decisions about notifying customers, regulators or the public belong to you and your legal advisers.

## Skills

| Skill | What it does | Changes files? |
| --- | --- | --- |
| `sec-threat-model` | Maps how your system could be attacked and what to defend first | No |
| `sec-secure-code-review` | Reviews your code for security weaknesses, with evidence and fixes | No |
| `sec-security-requirements` | Turns risks into clear, testable security requirements | No |
| `sec-threat-mitigation` | Matches risks to protections and builds a "now, next, later" plan | No |
| `sec-sast-setup` | Sets up automatic security scanning for your code | Only with your approval |
| `sec-dependency-review` | Checks the third-party packages your project depends on | No |
| `sec-secrets-exposure-review` | Looks for passwords and keys left in code or config | No |
| `sec-security-policy` | Drafts practical security policies (not legal advice) | No |
| `sec-incident-triage` | Guides the first steps when you suspect a security incident | No |

## Playbooks

| You ask for | The manager runs |
| --- | --- |
| "Threat model this feature" | threat model, requirements, mitigation plan |
| "Review our code for security" | code review, secrets check |
| "Check our dependencies and secrets" | dependency review, secrets check, mitigation plan |
| Security policies | policy review or drafting |
| "I think we were hacked" | incident triage first, then secrets check and a fix plan |
| "Is this release safe?" | code review of the change, dependency and secrets checks, verification |
| "Add security scanning" | scanning setup, review of serious findings |

## Context it uses

Fill these in your company context (`.skilloffice/context/<profile>/`): `company.name`, `company.size`, `company.industry`, `company.markets`, `technical.stack`, `technical.languages`, `technical.standards`, `technical.website_architecture`, `technical.hosting`, `technical.deployment_process`, `operations.team_structure`, `operations.tools`, `operations.policies`, `regional.jurisdictions`, `regional.time_zone`, `regional.output_language`.

## Where the skills come from

Five skills are adapted from open-source collections, reviewed line by line, with scripts, code templates and platform files removed:

- [openai/skills](https://github.com/openai/skills) (Apache-2.0): `sec-threat-model`, `sec-secure-code-review`
- [wshobson/agents](https://github.com/wshobson/agents) (MIT): `sec-threat-model`, `sec-security-requirements`, `sec-threat-mitigation`, `sec-sast-setup`

Four are original SkillOffice work: `sec-dependency-review`, `sec-secrets-exposure-review`, `sec-security-policy`, `sec-incident-triage`. Each skill's `PROVENANCE.md` lists its origin and changes. Security reviews for the adapted skills are in `registry/security-reviews/`.
