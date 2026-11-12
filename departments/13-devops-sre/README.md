# Cloud Infrastructure, DevOps and SRE

**Status:** pilot, not yet platform-tested. Planned test platforms: Claude Code and Antigravity.

This department helps you build and run software reliably: set up automated build and release pipelines, write and review cloud infrastructure code, configure Kubernetes safely, handle passwords and keys properly, add monitoring and sensible alerts, set reliability targets, respond to outages, learn from them, keep cloud bills under control, and check whether a release is ready to go live. It works with any cloud and any CI system. Your details (stack, hosting, deployment process, tools) come from your SkillOffice company context.

## How it works

You talk to the **DevOps manager** (`ops-manager`). It picks only the skills your request needs, runs them in order, collects any problems found, fixes its own work in **one** correction round, checks the result, and gives you one report with the exact commands you would run.

It never changes your live systems by itself. Anything that touches production or shared infrastructure (applying infrastructure changes, deploying, restarting, rolling back, changing DNS or firewalls) is listed for you to run after you approve it. It never reads or prints your passwords or keys; it refers to them by name only.

## Skills

| Skill | What it does | Changes files? |
| --- | --- | --- |
| `ops-cicd-pipeline` | Designs or improves your build and release pipeline | Writes pipeline files |
| `ops-secrets-management` | Plans how passwords and keys are stored, delivered and rotated | Writes configuration with placeholders |
| `ops-infrastructure-as-code` | Writes and reviews cloud infrastructure code; never applies it | Writes code |
| `ops-kubernetes` | Writes and reviews Kubernetes and Helm files, checks them without touching the cluster | Writes configuration |
| `ops-observability` | Sets up monitoring, alerts, dashboards and tracing | Writes configuration |
| `ops-slo` | Proposes reliability targets and the alerts that go with them | Writes configuration |
| `ops-incident-response` | Guides an outage response, writes runbooks and shift handoffs | Writes notes and runbooks |
| `ops-postmortem` | Writes a blameless review after an incident | Writes the document |
| `ops-cloud-cost-review` | Finds waste and savings in your cloud bill | No |
| `ops-deploy-verification` | Gives a go or no-go recommendation before a release | No |

## Playbooks

| You ask for | The manager runs |
| --- | --- |
| A new pipeline | pipeline, secrets (if needed), deploy check |
| A review of an infrastructure change | infrastructure review, cost check (if resources change) |
| Running a service on Kubernetes | Kubernetes files, secrets, monitoring, deploy check |
| Monitoring and reliability targets | monitoring, SLOs |
| "Production is down" | incident response, then a postmortem |
| Lower cloud costs | cost review, then code changes you approve |
| "Can we deploy?" | any missing reviews, then the deploy check (always last) |

## Context it uses

Fill these in your company context (`.skilloffice/context/<profile>/`): `technical.stack`, `technical.languages`, `technical.hosting`, `technical.deployment_process`, `technical.testing`, `technical.standards`, `technical.website_architecture`, `operations.tools`, `operations.team_structure`, `operations.policies`, `operations.sops`, `operations.processes`, and `regional.time_zone`, `regional.currency`, `regional.date_format` and `regional.jurisdictions`.

## Where the skills come from

Nine skills are adapted from [wshobson/agents](https://github.com/wshobson/agents) (MIT) and one from [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) (Apache-2.0), with parts of the incident skill from both. All were reviewed line by line. Scripts, connector settings and a command that printed an administrator password were removed, and outdated Kubernetes advice was corrected. Each skill's `PROVENANCE.md` lists its origin and changes; security reviews are in `registry/security-reviews/`.

## Not professional advice

These skills assist engineers. Decisions to change production, spend money or accept a reliability risk belong to people on your team; the skills only recommend.
