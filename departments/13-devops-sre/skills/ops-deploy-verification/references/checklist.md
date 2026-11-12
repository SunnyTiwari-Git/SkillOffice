# Deploy readiness checklist

```markdown
## Deploy readiness: <service or release>
Commit or version: <id> | Planned window: <date, time, time zone>
Recommendation: Go / Go with conditions / No-go

### Pre-deploy
| Check | Result (pass / fail / missing) | Evidence |
| --- | --- | --- |
| CI green for this exact commit | | |
| Code reviewed and approved | | |
| No open critical or high defects in this release | | |
| Tests for the changed areas passed | | |
| Database migrations tested and backward compatible | | |
| Backup confirmed (if data changes) | | |
| Feature flags configured, safe default | | |
| Rollback plan written and tried in staging | | |
| Monitoring and alerts cover the change | | |
| On-call aware and available | | |
| No change freeze or traffic peak in the window | | |

### Rollback triggers (decided before deploying)
- Error rate above <baseline + margin> for 5 minutes
- p95 latency above <threshold> for 5 minutes
- <critical journey> fails in smoke tests
- <business metric> drops by more than <n>%

### Deploy
- [ ] Deploy to staging and run smoke tests
- [ ] Deploy to production (canary or gradual if available)
- [ ] Watch error rate and latency for <n> minutes
- [ ] Verify key user journeys

### Post-deploy
- [ ] Metrics back to baseline
- [ ] Release notes updated
- [ ] Stakeholders notified
- [ ] Related tickets closed

### Blockers and conditions
- <item>
```

## Extra checks by change type

| Change | Add |
| --- | --- |
| Database migration | Additive first; destructive steps deferred; undo script; expected run time and locking behavior |
| Feature flag release | Flag off by default; rollout percentages; kill switch tested |
| Breaking API change | Consumers notified; old version still served during transition |
| Infrastructure change | Plan reviewed; no unexpected destroy or replace |
| Security fix | Coordinate disclosure timing with the Cybersecurity department |
