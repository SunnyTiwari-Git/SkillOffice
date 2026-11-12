# SLO math and rules

## Allowed downtime by target (30-day month)

| Target | Per 30 days | Per year |
| --- | --- | --- |
| 99% | 7.2 hours | 3.65 days |
| 99.5% | 3.6 hours | 1.83 days |
| 99.9% | 43.2 minutes | 8.76 hours |
| 99.95% | 21.6 minutes | 4.38 hours |
| 99.99% | 4.3 minutes | 52.6 minutes |

## SLI queries (PromQL examples)

```promql
# Availability: good requests / all requests
sum(rate(http_requests_total{job="<service>", status!~"5.."}[5m]))
/
sum(rate(http_requests_total{job="<service>"}[5m]))

# Latency: requests faster than 500 ms / all requests (needs a 0.5 s histogram bucket)
sum(rate(http_request_duration_seconds_bucket{job="<service>", le="0.5"}[5m]))
/
sum(rate(http_request_duration_seconds_count{job="<service>"}[5m]))
```

## Recording rules for burn rate

Burn rate = observed error ratio / error budget ratio. A burn rate of 1 spends exactly the whole budget over the window.

```yaml
groups:
  - name: slo_<service>
    rules:
      - record: slo:<service>:error_ratio5m
        expr: |
          1 - (
            sum(rate(http_requests_total{job="<service>", status!~"5.."}[5m]))
            /
            sum(rate(http_requests_total{job="<service>"}[5m]))
          )
      - record: slo:<service>:error_ratio30m
        expr: |
          1 - (
            sum(rate(http_requests_total{job="<service>", status!~"5.."}[30m]))
            /
            sum(rate(http_requests_total{job="<service>"}[30m]))
          )
      - record: slo:<service>:error_ratio1h
        expr: |
          1 - (
            sum(rate(http_requests_total{job="<service>", status!~"5.."}[1h]))
            /
            sum(rate(http_requests_total{job="<service>"}[1h]))
          )
      - record: slo:<service>:error_ratio6h
        expr: |
          1 - (
            sum(rate(http_requests_total{job="<service>", status!~"5.."}[6h]))
            /
            sum(rate(http_requests_total{job="<service>"}[6h]))
          )
```

## Multi-window burn-rate alerts (99.9% target, budget 0.001)

```yaml
groups:
  - name: slo_alerts_<service>
    rules:
      - alert: ErrorBudgetFastBurn
        expr: |
          slo:<service>:error_ratio1h > (14.4 * 0.001)
          and
          slo:<service>:error_ratio5m > (14.4 * 0.001)
        for: 2m
        labels:
          severity: page
        annotations:
          summary: "<service> is spending its error budget fast (2% of the monthly budget per hour)"
          runbook_url: "<link to runbook>"
      - alert: ErrorBudgetSlowBurn
        expr: |
          slo:<service>:error_ratio6h > (6 * 0.001)
          and
          slo:<service>:error_ratio30m > (6 * 0.001)
        for: 15m
        labels:
          severity: ticket
        annotations:
          summary: "<service> is steadily spending its error budget (5% of the monthly budget per 6 hours)"
          runbook_url: "<link to runbook>"
```

The short window confirms the burn is still happening, so alerts stop soon after recovery.

## Error budget policy (template)

| Budget remaining | Agreed action |
| --- | --- |
| More than 50% | Normal release pace |
| 25% to 50% | Extra review and canary for risky changes |
| Less than 25% | Prioritize reliability work over new features |
| Exhausted | Release only fixes and reliability improvements until the budget recovers |

The team, not the tool, owns this policy. Revisit targets every quarter.
