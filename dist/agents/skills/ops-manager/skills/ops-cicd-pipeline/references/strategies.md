# Deployment strategies and gates

## Decision table

| Strategy | Downtime | Rollback speed | Extra cost | Best for |
| --- | --- | --- | --- | --- |
| Rolling | None | Minutes | None | Most stateless services |
| Blue-green | None | Instant (switch back) | Double capacity while both run | High-risk changes, long warm-up |
| Canary | None | Instant (shift traffic back) | Small | High traffic, decisions driven by metrics |
| Recreate | Yes | Fast | None | Development, batch jobs |
| Feature flag | None | Instant per user group | None | Releasing features gradually, separate from deploys |

## Rolling update (Kubernetes example)

```yaml
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 2         # at most 2 extra pods during the rollout
    maxUnavailable: 1   # at most 1 pod out of service at a time
```

## Blue-green

Run the new version (green) next to the current one (blue), verify green, then switch traffic by changing the load balancer or service selector. Switching back is the rollback. Keep blue until green has been stable for an agreed period.

## Canary

Shift a small share of traffic to the new version in steps (for example 10, 25, 50, 100 percent) with a pause and a metric check at each step. Promote only if error rate and latency stay within thresholds; otherwise shift back. When an automated analysis returns "no data" (for example a renamed metric), make it fail after a few inconclusive results instead of waiting forever.

## Gates

- **Manual approval:** required reviewers on the production environment (GitHub environments, GitLab protected environments, Azure Pipelines approvals). Name an existing person or team, or the job waits silently.
- **Metric gate:** compare error rate and latency after deploy with a threshold, for example error rate above 1 percent for 5 minutes triggers rollback. Base thresholds on the service's normal levels.
- **Compliance gate:** static analysis, dependency scan and image scan must pass before staging.

## Health checks

| Check | Meaning |
| --- | --- |
| Liveness | The process is alive. Shallow and cheap. |
| Readiness | The service can do real work: database, cache and queues reachable. Used by gates. |

A pipeline that checks only a shallow ping can report success while production fails.

## Migrations and rollback

1. Ship additive schema changes first (new nullable column, new table).
2. Deploy code that works with both old and new schema.
3. Remove old columns only after the old code is gone from every environment.
4. Keep an undo script versioned next to each migration.

## Delivery metrics worth tracking

Deployment frequency, lead time for changes, change failure rate and time to restore service. Track trends for your own team rather than chasing published benchmarks.
