---
name: it-change-management
description: "Drafts change requests for internal IT changes, such as a new SSO setting, an email security policy, a device policy, a network change or a SaaS rollout, classified as standard, normal or emergency, with impact, risk, implementation steps, user communication, rollback and approvals. Use when IT plans a change to staff systems that could disrupt people, or the user asks for a change request or change plan."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "12-it-operations"
---

# IT Change Management

Plan IT changes so staff are not surprised and every change can be undone.

> **Checklists, not changes.** This department never changes real systems itself. Outputs are tickets, checklists, replies and runbooks for an IT admin to carry out after the required approvals.

## Inputs

- The change: what changes, why, which systems and which people are affected, and the preferred window.
- Optional: the company's change policy and approval rules.

Context used from the active profile: `company.name`, `company.size`, `operations.tools`, `operations.policies`, `regional.time_zone`.

## Steps

1. **Classify the change**:
   - Standard: low risk, done before, has a runbook (for example adding a printer). Pre-approved by policy.
   - Normal: anything else. Needs impact analysis and approval before it is scheduled.
   - Emergency: needed now to stop harm (for example blocking a phishing domain). Approve fast, document right after, review later.
2. **Describe impact** with numbers, not "everyone": which teams, how many people, which systems and workflows, what users must do differently.
3. **Assess risk**: what could break, likelihood and impact, and mitigation. Changes touching sign-in, MFA, email or security controls get a pilot group first.
4. **Plan implementation**: steps with owner roles, window in `regional.time_zone`, dependencies, and a pilot before full rollout where possible.
5. **Plan communication**: explain why before what, tell people early, say what they must do and where to get help, and acknowledge what they lose as well as what they gain.
6. **Write the rollback**: trigger, steps and how to confirm it worked. A change without a rollback is not ready.
7. **Name approvers** by role, per the company's change policy, and keep the status at "Draft" until they approve.

Layout: [references/change-template.md](references/change-template.md).

## Output

A change request in the template layout with status Draft, plus a short user announcement draft and open questions.

## Quality checklist

- [ ] Impact names teams and numbers.
- [ ] Sign-in or security changes have a pilot group.
- [ ] Rollback has a trigger, steps and verification.
- [ ] Status stays Draft until named approvers approve.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never mark a change as approved. Changes that weaken a security control (for example turning off MFA for a group) go to cybersecurity (14) before approval.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): change class, impact summary, risks, approvals needed. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
