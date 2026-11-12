# Module patterns

## Layout

```
modules/
  network/            # one purpose per module
    main.tf
    variables.tf
    outputs.tf
    versions.tf
    README.md
    examples/complete/
environments/
  staging/            # calls modules with staging variables
  production/
```

## Pinned versions

```hcl
terraform {
  required_version = ">= 1.6, < 2.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"   # pin a major version; lock exact versions in the lock file
    }
  }
}
```

Commit the dependency lock file so every run uses the same provider builds.

## Typed, validated variables

```hcl
variable "cidr_block" {
  type        = string
  description = "Address range for the network, for example 10.0.0.0/16."
  validation {
    condition     = can(cidrnetmask(var.cidr_block))
    error_message = "cidr_block must be a valid CIDR range."
  }
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to every resource."
  default     = {}
}
```

## Consistent tags

```hcl
locals {
  common_tags = merge(var.tags, {
    Environment = var.environment
    Owner       = var.owner
    CostCenter  = var.cost_center
    Project     = var.project
    ManagedBy   = "terraform"
  })
}
```

Publish an approved tag list, enforce it in CI, and inherit tags from shared modules.

## Remote state with locking

Store state in a remote backend with locking and encryption (for example an object storage bucket with locking, or a managed Terraform service). One state per environment and per component, so a mistake in one cannot damage another.

## Composition

```hcl
module "network" {
  source             = "../../modules/network"
  cidr_block         = "10.0.0.0/16"
  availability_zones = var.availability_zones
  tags               = local.common_tags
}

module "database" {
  source              = "../../modules/database"
  subnet_ids          = module.network.private_subnet_ids
  deletion_protection = true
  tags                = local.common_tags
}
```

## Validation ladder (no real changes)

1. `terraform fmt -check` and `terraform validate`
2. Linting (tflint) and configuration scanning (Checkov, Trivy or similar)
3. Policy as code (OPA or Sentinel) if the team uses it
4. `terraform plan` run by the user, reviewed before any apply

## Plan review checklist

- Any `destroy` or `replace` of a database, storage bucket, network, identity or DNS record?
- Changes the author did not expect (drift)?
- Public exposure: open security groups, public buckets, public IPs?
- Encryption, backups and deletion protection on data stores?
- Tags present on every new resource?
- Cost impact of new or resized resources?

## Module tests

Tools such as Terratest or the built-in `terraform test` create real resources. Run them only in a disposable sandbox account with a budget alert, and destroy everything at the end.
