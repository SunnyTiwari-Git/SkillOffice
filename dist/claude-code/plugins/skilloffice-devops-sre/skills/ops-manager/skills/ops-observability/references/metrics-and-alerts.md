# Metrics and alerts

## Scrape configuration (Prometheus example)

```yaml
global:
  scrape_interval: 30s
  evaluation_interval: 30s

rule_files:
  - /etc/prometheus/rules/*.yml

scrape_configs:
  - job_name: <service>
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: "true"
```

Check configuration and rules before reloading: `promtool check config prometheus.yml` and `promtool check rules rules/*.yml`.

## Recording rules for expensive queries

```yaml
groups:
  - name: http_recording
    interval: 30s
    rules:
      - record: job:http_requests:rate5m
        expr: sum by (job) (rate(http_requests_total[5m]))
      - record: job:http_errors:ratio5m
        expr: |
          sum by (job) (rate(http_requests_total{status=~"5.."}[5m]))
          /
          sum by (job) (rate(http_requests_total[5m]))
      - record: job:http_request_duration_seconds:p95
        expr: |
          histogram_quantile(0.95,
            sum by (job, le) (rate(http_request_duration_seconds_bucket[5m])))
```

## Alert rules: page on symptoms

```yaml
groups:
  - name: service_symptoms
    rules:
      - alert: HighErrorRate
        expr: job:http_errors:ratio5m > 0.05
        for: 5m
        labels:
          severity: page
        annotations:
          summary: "{{ $labels.job }}: more than 5% of requests failing"
          runbook_url: "<link to runbook>"
      - alert: HighLatencyP95
        expr: job:http_request_duration_seconds:p95 > 1
        for: 10m
        labels:
          severity: ticket
        annotations:
          summary: "{{ $labels.job }}: p95 latency above 1s"
          runbook_url: "<link to runbook>"
      - alert: TargetDown
        expr: up == 0
        for: 2m
        labels:
          severity: page
        annotations:
          summary: "{{ $labels.job }} on {{ $labels.instance }} is not being scraped"
```

Thresholds above are examples. Set them from the service's normal behavior and its SLO.

## Alert quality checklist

- [ ] Each paging alert means "a person must act now"
- [ ] Each alert has an owner, a severity and a runbook link
- [ ] `for` duration prevents flapping
- [ ] Causes (CPU, memory, disk) go to tickets unless impact is imminent
- [ ] Alerts are reviewed after every incident: missed, noisy, or useful?

## Label and cardinality rules

- Labels describe dimensions with a small, fixed set of values (service, route template, status class, region).
- Never use user IDs, emails, session IDs, full URLs with query strings or request bodies as labels.
- Watch the number of time series per metric; explosive growth usually means an unbounded label.

## Managed alternatives

Cloud monitoring services and commercial observability platforms offer the same concepts (metrics, alert policies, dashboards). The signals and alert rules carry over; the syntax changes.
