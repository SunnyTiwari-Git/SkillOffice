# Multi-cloud choices

## Equivalent services (examples)

| Need | AWS | Azure | Google Cloud | Oracle Cloud |
| --- | --- | --- | --- | --- |
| Virtual machines | EC2 | Virtual Machines | Compute Engine | Compute |
| Managed Kubernetes | EKS | AKS | GKE | OKE |
| Serverless functions | Lambda | Functions | Cloud Run functions | Functions |
| Object storage | S3 | Blob Storage | Cloud Storage | Object Storage |
| Managed SQL | RDS, Aurora | Azure SQL, Database for PostgreSQL | Cloud SQL, AlloyDB | MySQL HeatWave, Autonomous Database |
| Key-value or document | DynamoDB | Cosmos DB | Firestore | NoSQL Database |
| Cache | ElastiCache | Cache for Redis | Memorystore | OCI Cache |

Service names change; check the provider's current catalog before deciding.

## Patterns

| Pattern | When it fits | Cost |
| --- | --- | --- |
| One provider, recovery plan in another region | Most companies | Lowest operational load |
| One provider, recovery in a second provider | Regulation or contracts require provider independence | Data replication and two skill sets |
| Best service from each provider | A specific service is clearly better elsewhere | Integration, networking and egress costs |
| Provider-neutral layer (Kubernetes, PostgreSQL, S3-compatible storage, Prometheus) | Portability is a stated goal | You give up some managed conveniences |
| By geography | Data residency or latency per region | Several environments to operate |

## Questions to answer first

1. What concrete problem does a second provider solve: residency, a service, a contract, resilience?
2. Can the team operate two providers well, including security and on-call?
3. What will data transfer between providers cost?
4. Is the recovery plan tested, not just written?

## Migration phases

1. Assess: inventory, dependencies, compatibility, cost estimate.
2. Pilot: one low-risk workload, documented lessons.
3. Migrate in increments with a dual-run period and monitoring.
4. Optimize and retire the old environment.

## Cost levers by pricing model

Every provider offers on-demand, committed or reserved capacity, and interruptible (spot or preemptible) capacity. Discount levels change; use the provider's current pricing pages and calculators rather than fixed percentages.
