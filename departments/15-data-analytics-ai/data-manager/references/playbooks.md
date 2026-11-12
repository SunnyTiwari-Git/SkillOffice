# Data, analytics and AI playbooks

Each playbook lists inputs to confirm, the default skill order, when to skip a skill, and what the correction cycle usually fixes. Always follow the core orchestration protocol: plan first, run only what is needed, one correction cycle, one report.

## 1. Answer a business question

**Confirm first**: the exact question, the decision it supports, the audience, the data available (file, export or tables plus dialect), metric definitions and the period.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | data-explore | The dataset is already known and was profiled with unchanged inputs |
| 2 | data-sql | The user already provided the data, or no query is needed |
| 3 | data-analysis | Never |
| 4 | data-visualization | A table or a single number answers the question |
| 5 | data-storytelling | The user wants the answer only, not a narrative for an audience |
| 6 | data-validation | Never skip if the result will be shared |

If step 2 produces a query, pause for the user to run it and return the results; do not run it yourself.

**Correction cycle usually fixes**: partial periods, wrong denominators, missing caveats, misleading chart axes, unsupported causal wording.

**Possible handoffs**: Product (08) when metric definitions are disputed.

## 2. KPI dashboard

**Confirm first**: audience, decisions supported, the tool it will live in, metric definitions, data access, brand colors.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | data-dashboard-design | Never |
| 2 | data-sql | Metric data already provided |
| 3 | data-visualization | Only a design spec is wanted |
| 4 | data-validation | Never skip if real numbers are shown |

**Correction cycle usually fixes**: too many KPIs, undefined formulas, conflicting definitions with finance, inaccessible colors, unpinned external scripts.

**Possible handoffs**: Software Development (10) to embed the dashboard in a product; Design (09) for visual polish.

## 3. Data quality audit

**Confirm first**: the dataset or pipeline, what it is used for, known problems, the tests that exist today.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | data-explore | Never |
| 2 | data-validation | Never |

The correction cycle proposes tests and data contract clauses; it does not change the data itself. Any data fix is for the user or the data owner to apply.

**Possible handoffs**: Software Development (10) to add the tests to the pipeline; Cybersecurity (14) if sensitive data is exposed.

## 4. Document a dataset

**Confirm first**: the key tables, schema export, people who can answer definition questions, where the documentation should live.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | data-dictionary | Never |
| 2 | data-sql | Sample queries are not wanted |

No review skill by default. The verification step checks that every metric has a formula, every table has a grain and key, and open questions are listed.

## 5. AI feature review

**Confirm first**: the feature's purpose, the design or code, the model and provider, the data involved, the users affected, the jurisdictions.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | data-ai-feature-review | Never |

If the user asks for fixes, the correction cycle updates the design or prompts in their documents. Code changes go to Software Development (10).

**Possible handoffs**: Cybersecurity (14) for a security review; Legal, Risk and Compliance (04) when available, for regulatory questions.
