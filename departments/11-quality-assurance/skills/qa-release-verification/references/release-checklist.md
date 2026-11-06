# Release readiness checklist

Mark each item pass, fail, stale (evidence older than this build) or not verifiable, and record the evidence.

## Build and scope

- [ ] Release build identified (version or commit) and deployed to the test environment.
- [ ] Change list for this release reviewed; every change has been tested or explicitly accepted as untested.

## Functional

- [ ] Automated unit and integration suites pass on this build.
- [ ] Critical user journeys pass (end-to-end or manual), on this build.
- [ ] Regression suite passes; failures investigated, not just re-run until green.
- [ ] New features meet their acceptance criteria.
- [ ] Fixed bugs verified fixed, each with a regression test where practical.

## Defects

- [ ] No open critical defects.
- [ ] Open high defects each have an owner and a documented acceptance by the decision maker.
- [ ] Known issues listed for release notes.

## Non-functional (only where in scope for this release)

- [ ] Performance checks on changed hot paths show no significant regression.
- [ ] Security checks for changed authentication, authorization, input handling and dependencies (coordinate with the cybersecurity department when it exists).
- [ ] Accessibility checks on changed user interfaces (coordinate with the design department).
- [ ] Supported browsers, devices or platforms checked for changed screens.

## Data and operations

- [ ] Database migrations tested on a copy of realistic, anonymized data; reversible or backed up.
- [ ] Configuration and environment variables for the release are documented; no secrets in the repository.
- [ ] Monitoring and alerts cover the changed areas.
- [ ] Rollback plan exists and has been tried or reviewed by someone who can execute it.
- [ ] Post-release smoke test steps are written down.

## Communication

- [ ] Release notes drafted (not published by this skill).
- [ ] Support and stakeholders know about user-facing changes (the release owner sends any communication).

## Default exit criteria (when no plan defines them)

1. All critical-path tests pass on the release build.
2. No open critical defects; high defects accepted in writing by the decision maker.
3. Rollback path confirmed.
4. Every change in scope tested or explicitly accepted as untested.
