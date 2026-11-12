# Dashboards and tracing

## Dashboard hierarchy

1. **Overview** (one per service): request rate, error rate, latency p50 and p95, saturation, current SLO status, deploy markers.
2. **Drill-down:** per endpoint, per dependency, per instance.
3. **Infrastructure:** nodes, pods by namespace, disk, network.
4. **Business:** a few numbers leaders watch (sign-ups, orders), with the technical overview one click away.

## Panel choices

| Panel | Use for |
| --- | --- |
| Single stat | Current value against a target (error rate now, SLO compliance) |
| Time series | Trends and comparison with last week |
| Table | Top endpoints by errors or latency |
| Heatmap | Latency distribution over time |

## Dashboard conventions

- Variables for environment, service and region; default to production.
- Units on every axis; consistent colors (red only for bad).
- Deploy annotations so changes line up with graphs.
- Store dashboards as code (JSON or a provisioning tool) in version control.

## Example queries (PromQL)

```promql
# Request rate by service
sum by (job) (rate(http_requests_total[5m]))

# Error percentage
100 * job:http_errors:ratio5m

# p95 latency
job:http_request_duration_seconds:p95
```

## Tracing with OpenTelemetry

- Instrument with the OpenTelemetry SDK for the language in use; export to the team's backend (for example Jaeger, Grafana Tempo or a commercial service) through an OpenTelemetry Collector.
- Propagate trace context (W3C `traceparent`) across HTTP, messaging and background jobs.
- Name spans by operation (`GET /orders/{id}`), not by concrete URL.
- Add attributes that help debugging (service version, route, status), never personal data or secrets.
- Sampling: start with head sampling of 1 to 10 percent in production; with a collector that supports tail sampling, keep all error and slow traces.
- Put the trace ID in every log line so logs and traces link up.

## Correlated logging (Python example)

```python
import logging
from opentelemetry import trace

logger = logging.getLogger(__name__)

def handle_request():
    span_context = trace.get_current_span().get_span_context()
    logger.info("processing request", extra={"trace_id": format(span_context.trace_id, "032x")})
```

## When traces do not appear

- Collector endpoint or port wrong; network policy blocks export.
- Sampling set to zero, or the sampler drops all child spans.
- Context not propagated across a queue or thread boundary.
- Exporter errors visible only in the application's own logs.
