# IT Operations and Technical Support

Status: **pilot, not yet platform-tested.** Planned platforms: Claude Code and Antigravity.

> **Checklists, not changes.** This department never changes your systems itself. It produces tickets, checklists, replies and step-by-step procedures for whoever runs IT at your company to carry out, after the right approvals.

This department helps with the IT your own staff use every day: sorting help requests, giving people the right access (and no more), setting up new starters and closing accounts for people who leave, writing IT procedures, planning changes, keeping track of laptops and software subscriptions, fixing common computer problems, and checking that your backups would actually work.

It is not for your product's servers (that is DevOps) or for security incidents (that is Cybersecurity); it hands those over.

Two rules it always follows:

- **Least privilege**: people get the access their role needs, with an approver and an end or review date. "Give them the same as the admin" becomes a specific, smaller list.
- **Verified identity**: password and access changes happen only after the person is verified. Nobody is ever given someone else's password. Reading a former employee's email needs documented approval from HR or legal and is done by IT, not by sharing a login.

## How to use it

Ask the department manager, `it-manager`, in plain words. For example:

- "Here are this week's IT tickets. What do we handle first?"
- "Maya from support starts Monday. What does IT need to set up?"
- "Employee E-117 leaves Friday. Build the offboarding checklist."
- "The new marketing contractor needs access to our shared drive for two weeks."
- "Write a procedure for resetting someone's MFA when they lose their phone."
- "We want to turn on MFA for everyone. Plan the change."
- "Which software are we paying for that nobody uses?"
- "Would we get our files back after a ransomware attack?"

The manager plans which skills to run, skips the ones you do not need, does one round of fixes and gives you one report.

## Skills

| Skill | What it does |
| --- | --- |
| it-helpdesk-triage | Sorts IT tickets, spots security incidents, drafts first replies |
| it-access-request | Works out the minimum access needed, the approver and an end date |
| it-joiner-mover-leaver | Checklists for people joining, changing role or leaving |
| it-runbook | Step-by-step procedures for recurring IT tasks |
| it-change-management | Plans IT changes with a pilot, user messages and a way to undo them |
| it-asset-inventory | Tracks laptops and devices, warranties, encryption and safe disposal |
| it-saas-management | Finds unused software seats, unapproved apps and sign-in risks |
| it-troubleshooting | Safe, step-by-step fixes for everyday computer problems |
| it-backup-recovery-review | Checks backups, restore tests and recovery targets |

## Playbooks

| Playbook | Skills, in order |
| --- | --- |
| New joiner | Joiner checklist, access request |
| Leaver | Leaver checklist, software seat review |
| Access request | Access request |
| Ticket queue triage | Helpdesk triage, then the skill each ticket needs |
| SaaS review | SaaS management, asset inventory (licenses, if asked) |
| Backup and recovery review | Backup and recovery review |

## Works with

Cybersecurity (incidents and risky apps), HR (start and leave dates, data retention), Procurement (buying devices and software, renewals) and DevOps (product systems).
