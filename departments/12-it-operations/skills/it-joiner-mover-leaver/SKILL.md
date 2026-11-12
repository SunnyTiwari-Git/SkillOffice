---
name: it-joiner-mover-leaver
description: "Builds IT checklists for people joining, changing role, or leaving: accounts, devices, SaaS seats and shared credentials. Offboarding revokes sessions and tokens, transfers ownership of files and accounts, rotates shared secrets and preserves data per policy. Use when someone starts, moves team, or leaves, or when the user asks for an onboarding or offboarding IT checklist."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "12-it-operations"
---

# Joiner, Mover, Leaver

Make sure people get what they need on day one, lose what they no longer need when they move, and lose everything on their last day, without losing company data.

> **Checklists, not changes.** This department never changes real systems itself. Outputs are tickets, checklists, replies and runbooks for an IT admin to carry out after the required approvals.

## Inputs

- Event type: joiner, mover or leaver; the person's role (or code), team, start or end date and time, and location or remote.
- The systems in use (from `operations.tools` or the user).
- For leavers: whether the departure is planned or immediate, and the data-retention rules from HR or legal.

Context used from the active profile: `company.name`, `operations.tools`, `operations.policies`, `operations.team_structure`, `regional.time_zone`.

## Steps

1. **Confirm the event with HR.** Joiner and leaver dates come from HR (02), not from a chat message. Keep personal details out of the checklist: use an employee code.
2. **Joiner**: build the account list from the role's access baseline (see it-access-request), order and set up the device, enroll it in device management with disk encryption, require MFA from first login, add the person to groups rather than granting one-off permissions, and plan a first-day sign-in session.
3. **Mover**: add the new role's access and remove the old role's access on the same day. A mover must never keep both.
4. **Leaver**: follow [references/checklists.md](references/checklists.md):
   - Disable sign-in at the agreed time in the company's time zone; for an immediate or sensitive departure, at the moment HR confirms.
   - Revoke active sessions, app passwords, API tokens, SSH keys and OAuth grants; remove MFA devices.
   - Transfer ownership of files, shared drives, calendars, repositories, and SaaS workspaces to a named owner.
   - Rotate every shared secret the person knew (shared accounts, team vault items, Wi-Fi or door codes).
   - Recover devices and wipe them only after data is preserved per policy.
   - Keep or archive the mailbox and files for the retention period HR or legal set. Access to them is granted only with documented HR or legal approval, to a named person, for a stated purpose.
   - Remove SaaS seats and tell procurement (17) about licenses to cancel or reuse.
5. **Assign owners and times** to every item, and note how each will be verified.

## Output

1. Checklist for the event: item, system, owner, when, how to verify.
2. Items needing approval (data access, early wipe, account deletion) with the approver named.
3. Messages to draft: welcome note for a joiner, or a note to the team about ownership changes for a leaver.

## Quality checklist

- [ ] Every system in use appears on the checklist.
- [ ] Leaver access ends at the agreed time and sessions and tokens are revoked, not just the password.
- [ ] Shared secrets the leaver knew are rotated.
- [ ] Data is preserved before any wipe or deletion, and access to it needs documented approval.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never share or reset a leaver's password so that a manager or colleague can use their account or read their email; that needs documented HR or legal approval and is done through admin delegation or export by IT, not by handing over credentials. Device wipes and account deletions need confirmation. Never store personal data in memory.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): event, checklist summary, approvals pending, items handed to HR, procurement or cybersecurity. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
