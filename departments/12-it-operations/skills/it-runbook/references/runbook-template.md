# Runbook template

```markdown
## Runbook: [Task name]
Owner role: [role] | Frequency: [daily, weekly, monthly, as needed]
Last updated: [date in the company's format] | Last dry run: [date]

### Purpose
[What this achieves and when to use it. When NOT to use it.]

### Prerequisites
- [ ] Access or role needed
- [ ] Tool or system required
- [ ] Input needed
- [ ] Approval obtained (if this changes access or data)
- [ ] Requester identity verified through a known channel (if this changes credentials or access)

### Procedure
#### Step 1: [Name]
Action: [exact menu path or command]
Expected result: [what you should see]
If it fails: [what to do]

#### Step 2: [Name]
...

### Verification
- [ ] [How to confirm it worked]

### Troubleshooting
| Symptom | Likely cause | Fix |
| --- | --- | --- |

### Rollback
Trigger: [when to roll back]
Steps: [how]
Verification: [how to confirm]

### Escalation
| Situation | Escalate to (role) | How |
| --- | --- | --- |

### History
| Date | Run by (role) | Notes |
| --- | --- | --- |
```

Credentials are never written in a runbook. Refer to the password manager entry by name instead.
