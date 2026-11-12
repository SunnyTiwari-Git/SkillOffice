# CI examples

Short, annotated examples. Replace names and commands with the project's own. Pin every third-party action or image to an exact version (better: a commit or digest); the versions below are placeholders.

## GitHub Actions: test, build, staged deploy

```yaml
name: ci-cd
on:
  push:
    branches: [main]
  pull_request:

permissions:
  contents: read          # least privilege by default

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@<pinned-sha>      # pin to a full commit
      - uses: actions/setup-node@<pinned-sha>
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm test

  build:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@<pinned-sha>
      - run: docker build -t registry.example.com/app:${{ github.sha }} .
      # push with a short-lived token from the CI secret store

  deploy-staging:
    needs: build
    environment: staging
    runs-on: ubuntu-latest
    steps:
      - run: ./deploy.sh staging ${{ github.sha }}
      - run: ./verify.sh https://staging.example.com

  deploy-production:
    needs: deploy-staging
    environment: production   # required reviewers approve here
    runs-on: ubuntu-latest
    steps:
      - run: ./deploy.sh production ${{ github.sha }}
      - run: ./verify.sh https://app.example.com || ./rollback.sh production
```

## GitLab CI: stages with a manual production gate

```yaml
stages: [test, build, deploy]

variables:
  IMAGE: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA

test:
  stage: test
  image: node:22            # pin a specific tag or digest
  cache:
    key:
      files: [package-lock.json]
    paths: [.npm/]
  script:
    - npm ci --cache .npm
    - npm test

build:
  stage: build
  script:
    - docker build -t "$IMAGE" .

deploy_staging:
  stage: deploy
  environment: staging
  script: ./deploy.sh staging "$CI_COMMIT_SHA"

deploy_production:
  stage: deploy
  environment: production
  when: manual              # a person starts production
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
  script: ./deploy.sh production "$CI_COMMIT_SHA"
```

## Other systems

The same shape applies to Azure Pipelines (stages, environments with approvals), Bitbucket Pipelines (deployments with manual steps), Jenkins (declarative stages with an input step) and CircleCI (workflows with approval jobs). Keep: fast checks first, one artifact, gated production, verification, rollback.

## Bounded post-deploy verification

```bash
#!/usr/bin/env bash
# verify.sh <base-url>: polls a readiness endpoint for at most 2 minutes
set -euo pipefail
url="${1:?usage: verify.sh <base-url>}"
for attempt in $(seq 1 12); do
  if curl -fsS --max-time 5 "$url/health/ready" >/dev/null; then
    echo "ready after attempt $attempt"; exit 0
  fi
  sleep 10
done
echo "not ready after 12 attempts"; exit 1
```

## Common problems

- **Slow builds:** dependency cache invalidated because source is copied before the dependency manifest.
- **Production job never starts:** the production environment has no valid reviewer.
- **Green pipeline, broken production:** health check is shallow, or staging differs from production.
- **Rollback breaks the app:** a destructive migration ran before the old code was retired.
