# Findings Protocol

Every review skill reports problems in one shared format so managers can merge them into a single report.

## Finding format

```yaml
- id: F-001                       # unique within the run
  severity: high                  # critical | high | medium | low | info
  title: Pricing table shows USD for an India audience
  location: src/pages/pricing.html#plans   # file and section, or document and heading
  evidence: "Price column reads '$49/mo'; regional.currency is INR"
  recommendation: Show prices in INR and use the regional date format for billing dates
  source_skill: 06-marketing-content-pr/copy-review
  duplicate_of: null              # id of the finding this duplicates, if any
  status: open                    # open | fixed | accepted | wont_fix
```

All fields are required except `duplicate_of`.

## Severity definitions

| Severity | Meaning | Examples |
| --- | --- | --- |
| critical | Causes harm, data loss, a security breach or a legal violation now | Exposed secret, wrong tax calculation sent to a client, broken checkout |
| high | Seriously damages quality, trust or results; must be fixed before release | Inaccessible primary button, misleading claim in an ad, failing core test |
| medium | Noticeable problem that should be fixed soon | Inconsistent brand color, unclear error message |
| low | Minor polish | Typo, small spacing issue |
| info | Observation or suggestion, no fix required | Optional improvement, passed-with-note |

When unsure between two levels, choose the higher one and explain why in `evidence`.

## Consolidation rules

1. Two findings are duplicates when they share the same `location` AND the same root cause, even if worded differently.
2. Keep one finding per duplicate group. Use the highest severity in the group.
3. Set `duplicate_of` on the others and list them in the report's "Duplicates merged" section.
4. Findings at the same location with different root causes are NOT duplicates.
5. Pattern detection (for example "looks AI-generated") is a quality signal, never proof of authorship. Phrase it as an observation.

## Status changes

- `fixed`: changed in the correction cycle AND confirmed by verification.
- `accepted`: the human chose to keep it as is.
- `wont_fix`: out of scope or not worth fixing; give the reason.
- `open`: still unresolved after the run. Copy to `state.json` `openIssues`.
