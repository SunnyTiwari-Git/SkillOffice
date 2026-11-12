# Escalation guide

## Keep in support when

- A documented solution or known workaround exists.
- It is a configuration or setup problem support can fix.
- The customer needs guidance or training, not a fix.
- It is a known limitation with a documented alternative.

## Escalate when

- **Technical**: a confirmed bug needs a code fix, infrastructure needs investigation, data is lost or corrupted.
- **Complexity**: support cannot diagnose it or lacks the access needed.
- **Impact**: several customers affected, production down, data integrity or security at risk.
- **Business**: a high-value customer is at risk, an SLA is breached or about to be, executive involvement is requested, a policy exception is requested.
- **Time**: open beyond SLA, normal channels are not progressing.
- **Pattern**: three or more customers report it, a "fixed" issue returns, severity is rising.

## Targets

| Target | When | Include |
| --- | --- | --- |
| Senior support | Deeper investigation or specialist knowledge | Summary, steps tried, customer context |
| Engineering | Confirmed bug, infrastructure, code change | Reproduction steps, environment, logs, impact, customer timeline |
| Product | Feature gap causing pain, design decision, competing needs | Use case, impact, how often requested |
| Security | Possible exposure, unauthorized access, vulnerability, compliance | What was seen, who may be affected, containment so far, urgency |
| Leadership | High-value churn risk, critical SLA breach, cross-team decision, policy exception, legal or public risk | Business context, revenue at risk, what was tried, decision needed, deadline |

Security escalations skip tiers.

## Severity

- **Critical**: production down, data at risk, security breach, or several high-value customers affected. Immediate attention.
- **High**: major function broken, key customer blocked, SLA at risk. Same day.
- **Medium**: significant issue with a workaround. This week.

## Follow-up rhythm

| Severity | Internal check | Customer update |
| --- | --- | --- |
| Critical | Every 2 hours | Every 2 to 4 hours, or per SLA |
| High | Every 4 hours | Every 4 to 8 hours |
| Medium | Daily | Every 1 to 2 business days |

Update the customer even when there is no news. Keep ownership of the customer relationship after escalating.

## De-escalate when

- The root cause turns out to be resolvable in support.
- A workaround unblocks the customer.
- New information lowers the severity.

Then tell the receiving team, record the resolution and capture what was learned.
