---
name: sec-security-policy
description: "Drafts and reviews practical information security policies sized to the company: access control, passwords and MFA, device and remote work, acceptable use, data classification and handling, incident response, vendor and third-party security, backup and recovery, secure development and logging. Plain-language drafts with owners, scope and review cadence; not legal advice, and compliance claims are marked for legal review. Use when asked to write or review a security policy, prepare policies for a customer security questionnaire or audit, or set up basic security rules for a team."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "14-cybersecurity"
---

# Security Policy

Good policies are short enough to be read, specific enough to be followed, and honest about what the company actually does. This skill drafts policies that fit the company's size and tools, and reviews existing ones for gaps.

Load only the context this skill declares: `company.name`, `company.size`, `company.industry`, `company.markets`, `operations.team_structure`, `operations.tools`, `operations.policies`, `regional.jurisdictions`, `regional.output_language`.

## Scope

Drafting and reviewing internal security policies for the user's own organization. **Not legal advice.** Policies support compliance but do not by themselves make a company compliant with GDPR, DPDP, HIPAA, PCI DSS, SOC 2, ISO 27001 or any other regime. Any statement about legal or certification requirements is marked "confirm with legal or the compliance owner". Drafts are proposals for the user to approve; nothing is published or sent to staff or customers by this skill.

## Inputs

- Which policies are needed, or "review our existing policies" with the documents.
- Optional: a customer questionnaire or framework driving the request, known gaps, how the company really works today.

## Steps

1. **Understand the reality.** Company size, teams, tools in use, remote or office, regulated data handled, outside requirements (customer contracts, frameworks). Ask briefly if missing; do not invent practices.
2. **Pick the set.** For small companies, start with a core set: information security overview, access control and MFA, acceptable use, device and remote work, data classification and handling, incident response, vendor security, backup and recovery, secure development. Add more only when a driver requires it. Catalog: [references/policy-catalog.md](references/policy-catalog.md).
3. **Draft each policy** with the standard structure: purpose, scope, roles and owner, the rules (short, numbered, "must" and "should"), exceptions process, enforcement, related documents, review cadence and version history. Write rules people can follow: "Turn on MFA for email, code hosting and cloud consoles" beats "use strong authentication".
4. **Match practice.** Every rule must be something the company already does or commits to start doing; mark new commitments clearly so leadership can approve them. A policy that promises controls that do not exist creates risk in audits and contracts.
5. **Review mode.** For existing policies, report gaps (missing topics, rules nobody follows, outdated tools, no owner or review date, contradictions between policies) as findings.
6. **Questionnaire support.** When a customer questionnaire drives the work, map each question to the policy section that answers it, and list questions that need a new control rather than new words.

## Output

Policy drafts in Markdown (in `regional.output_language`), a summary table of policies with owner and review cadence, a list of new commitments needing leadership approval, and items marked for legal review. In review mode, gaps are reported in the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 14-cybersecurity/sec-security-policy`.

## In a managed run

When `sec-manager` runs this skill, drafts and findings go into the report; revisions happen in the manager's single correction cycle. Results are never cached. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (policies drafted or reviewed), Decisions (scope, new commitments proposed), Changed files (none, unless the user asked for files to be saved), Tests and checks (consistency check across policies), Open issues (items for legal, approvals needed), Next (leadership approval, legal review, HR for staff rollout when that department exists).
