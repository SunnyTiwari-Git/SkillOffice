---
name: ops-observability
description: "Designs monitoring for services and infrastructure: what to measure (RED and USE methods), metric collection and naming (Prometheus or a managed equivalent), alert rules that page only for user impact, dashboards (Grafana or similar), structured logs and distributed tracing with OpenTelemetry. Use when asked to set up monitoring, add alerts, build a dashboard, reduce alert noise, add tracing, or explain why an incident was not detected."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "13-devops-sre"
---

# Observability

Know when users are hurting, see why, and fix it fast. Metrics show that something is wrong, traces show where, logs show what. Alerts wake people only for real user impact.

Load only the context this skill declares: `technical.stack`, `technical.languages`, `technical.hosting`, `technical.website_architecture`, `operations.tools`, `operations.team_structure`, `regional.time_zone`, `regional.jurisdictions`.

## Inputs

- The services and infrastructure to observe, and how users reach them.
- Tools already in place (`operations.tools`): Prometheus, a managed monitoring service, Grafana, a log platform, a tracing backend.
- Who is on call and how they are paged (`operations.team_structure`).
- Recent incidents that monitoring missed, if any.

## Steps

1. **Pick the signals.** For each service, RED: request rate, error rate, duration (latency percentiles). For each resource, USE: utilization, saturation, errors. Add a few business signals the company cares about (for example checkouts per minute).
2. **Instrument.** Prefer OpenTelemetry for metrics, traces and logs so the backend can change later. Metric names follow `<namespace>_<name>_<unit>`; keep label sets small (no user IDs, emails or other unbounded or personal values as labels).
3. **Collect.** Scrape interval 15 to 60 seconds; recording rules for expensive queries; the monitoring system monitors itself; retention sized to the questions you need to answer. Configuration examples: [references/metrics-and-alerts.md](references/metrics-and-alerts.md).
4. **Alert on symptoms, not causes.** Page for user-facing symptoms (errors, latency, availability) that need action now; send causes (high CPU, disk filling) to tickets or dashboards unless they will cause impact soon. Every paging alert has an owner, a severity, a `for` duration to avoid flapping, and a runbook link. Prefer SLO burn-rate alerts (see `ops-slo`).
5. **Dashboards.** One overview per service (RED, saturation, recent deploys), then drill-down dashboards. Variables for environment and service. Put the most important panel top left. See [references/dashboards-and-tracing.md](references/dashboards-and-tracing.md).
6. **Logs and traces.** Structured logs with a request or trace ID; sample traces (start around 1 to 10 percent in production, keep all errors if the backend supports tail sampling); propagate context across every service boundary.
7. **Privacy.** No secrets, tokens or personal data in metrics, labels, span attributes or logs. If an identifier is essential, use a pseudonymous one, and respect data protection rules for the regions in `regional.jurisdictions`.

## Rules

- Write configuration files in the user's project. Do not reload, restart or change live monitoring systems or alert routing without approval.
- Queries against live monitoring APIs are read-only and only with the user's approval.

## Output

Configuration (scrape config, alert rules, dashboard JSON or code, instrumentation snippets) plus a note: signals chosen, alerts and their severity and routing, dashboards, sampling, and gaps.

## In a managed run

Return the configuration and note. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).

## Handoff

End with a handoff (under 400 words): Done, Decisions (signals, alert thresholds, sampling), Changed files, Tests and checks (rule syntax checks such as `promtool check rules`, if run), Open issues, Next (`ops-slo` for reliability targets; `ops-incident-response` to link runbooks).
