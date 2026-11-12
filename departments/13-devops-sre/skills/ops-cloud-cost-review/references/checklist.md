# Cost review checklist

## Visibility
- [ ] Tags present on most spend: owner, environment, cost center, project, managed-by
- [ ] Cost broken down by team or product
- [ ] Budgets with alerts per account or project
- [ ] Anomaly detection enabled

## Waste
- [ ] Unattached disks, addresses and load balancers
- [ ] Snapshots and images past retention
- [ ] Idle or forgotten environments (no traffic, old deploy dates)
- [ ] Non-production running nights and weekends

## Right-sizing
- [ ] Instances or databases with low utilization over weeks, not hours
- [ ] Kubernetes requests far above actual use
- [ ] Autoscaling minimums set too high

## Storage and data
- [ ] Lifecycle rules moving old data to cheaper tiers or deleting it
- [ ] Log and metric retention matched to need
- [ ] Cross-region and internet data transfer understood
- [ ] Caching or a CDN for repeated downloads

## Pricing models
- [ ] Steady baseline covered by committed or reserved capacity (business decision)
- [ ] Interruptible capacity for batch, CI and stateless workers, with fallback
- [ ] Serverless or scale-to-zero for spiky, low-volume workloads

## Governance
- [ ] Tag policy enforced in CI for infrastructure code
- [ ] Monthly cost review with owners
- [ ] Cost impact checked in infrastructure change reviews

## Example lifecycle rule (Terraform, placeholder values)

```hcl
resource "aws_s3_bucket_lifecycle_configuration" "logs" {
  bucket = aws_s3_bucket.logs.id
  rule {
    id     = "age-out-logs"
    status = "Enabled"
    filter {}
    transition {
      days          = 30
      storage_class = "STANDARD_IA"
    }
    expiration {
      days = 365
    }
  }
}
```

Match retention to legal and business requirements before shortening it.

## Example finding

```yaml
- id: F-003
  severity: high
  title: Staging environment runs 24/7
  location: account staging, cost export lines for compute
  evidence: "Staging compute is 31% of total compute spend; traffic is near zero outside office hours"
  recommendation: Schedule staging to stop outside working hours, or scale to zero; estimated saving 55 to 65% of staging compute (estimate, verify)
  source_skill: 13-devops-sre/ops-cloud-cost-review
  duplicate_of: null
  status: open
```

## Tools by provider

AWS Cost Explorer and Compute Optimizer; Azure Cost Management and Advisor; Google Cloud cost management and Recommender; OCI Cost Analysis and Budgets; Kubecost or OpenCost for Kubernetes. The user runs these; this skill reads their exports.
