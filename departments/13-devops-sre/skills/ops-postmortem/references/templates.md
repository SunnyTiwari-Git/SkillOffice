# Postmortem templates

## Full postmortem

```markdown
# Postmortem: <incident title>
Date: <date> | Duration: <time> | Severity: SEV<n> | Status: Draft
Authors: <roles>

## Summary
Two or three plain-language sentences: what happened, who was affected, how it was fixed.

## Impact
- Users or requests affected:
- Duration of impact:
- Data affected:
- Business impact:

## Timeline (UTC, local time in brackets)
| Time | Event |
| --- | --- |

Time to detect: <n> min | Time to mitigate: <n> min | Time to resolve: <n> min

## Causes
### Trigger
What started it.
### Contributing factors
The conditions that let the trigger become an incident.
### 5 whys
1. Why did <symptom> happen? Because ...
2. Why ...? Because ...
3. ...
(Stop at system and process conditions.)

## What went well

## What went badly

## Where we got lucky

## Action items
| Action | Type (prevent / detect / mitigate / process) | Owner role | Priority | Proposed date | Linked cause |
| --- | --- | --- | --- | --- | --- |

## Open questions
```

## Quick postmortem (minor incidents)

```markdown
# Quick postmortem: <title>
Date: <date> | Duration: <time> | Severity: SEV3 or SEV4

What happened: one or two sentences.
Timeline: three to six key times.
Cause: one or two sentences.
Fix: immediate fix and the longer-term action (with owner role).
Lesson: one sentence.
```

## Blameless language

| Instead of | Write |
| --- | --- |
| "Alex deployed a bad config" | "A configuration change reached production without validation" |
| "The engineer should have known" | "The runbook did not cover this case" |
| "Human error" | "The system allowed an unsafe action without a check" |

## Review meeting (about 60 minutes)

1. Opening (5 min): restate that the goal is learning, not blame.
2. Timeline walk-through (15 min): fill gaps, correct facts.
3. Analysis (20 min): causes, contributing factors, what would have prevented or shortened it.
4. Actions (15 min): agree on few, owned, prioritized actions.
5. Close (5 min): confirm owners and when actions will be reviewed.

## Follow-through

Track actions in the team's normal tracker, review them at a set cadence, and look across postmortems each quarter for repeated causes.
