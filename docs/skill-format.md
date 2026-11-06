# SkillOffice skill format

Every SkillOffice skill is a folder in the open [Agent Skills](https://agentskills.io/specification) format plus a small SkillOffice sidecar file.

## Folder

```text
<skill-name>/
├── SKILL.md        Required. Instructions for the AI, with standard frontmatter
├── skill.yaml      Required. SkillOffice planning data
├── PROVENANCE.md   Required. Where the skill came from and what changed
├── references/     Optional. Long guides, loaded only when needed
├── assets/         Optional. Templates, checklists
├── scripts/        Optional. Only if essential; reviewed and pinned
└── evals/          Expected. Test prompts and expected outcomes
```

## SKILL.md frontmatter

Only the six standard fields are allowed. Some platforms reject any other field.

| Field | Required | Rules |
| --- | --- | --- |
| `name` | Yes | Lowercase letters, digits and single hyphens. No leading or trailing hyphen. Max 64 characters. Must equal the folder name |
| `description` | Yes | Max 1024 characters. Say what the skill does and when to use it, with trigger words |
| `license` | No | SPDX identifier, for example `Apache-2.0` |
| `compatibility` | No | Max 500 characters. Environment needs, if any |
| `metadata` | No | Map of string keys to string values, for example `version: "0.1.0"` |
| `allowed-tools` | No | Experimental. Never pre-approve shell, network or delete tools |

The body stays under 500 lines (about 5,000 tokens). Move longer material into `references/`.

## skill.yaml

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | string | `<department-slug>/<skill-name>`; core skills use `core/<name>` |
| `version` | semver | Skill version, for example `0.1.0` |
| `kind` | `skill` \| `manager` \| `core` | What this is |
| `department` | string | Department folder slug, or `core` |
| `summary` | string | One line, max 160 characters, shown in catalogs |
| `inputs` | list | `{name, description, required}` |
| `outputs` | list | `{name, description}` |
| `depends_on` | list | Skill ids that must run first |
| `context_needs` | list | Context fields as dot paths, for example `brand.voice`, `regional.currency` |
| `risk` | `low` \| `medium` \| `high` | low: instructions only; medium: local files; high: scripts, network, credentials or external actions |
| `side_effects` | list | Any of `none`, `reads_files`, `writes_files`, `runs_scripts`, `network`, `external_actions` |
| `cacheable` | bool | Whether a result can be reused when inputs are unchanged |
| `platforms_tested` | list | `{platform, date (YYYY-MM-DD), result: pass\|fail\|partial}` |
| `provenance` | map | `{type: original\|adapted, source_id?, upstream_commit?}` |

## Example

`departments/06-marketing-content-pr/skills/copy-review/SKILL.md`:

```markdown
---
name: copy-review
description: Reviews marketing copy for clarity, brand voice, claims and calls to action. Use when the user asks to review, proofread or improve website, ad, email or social copy.
license: Apache-2.0
metadata:
  project: SkillOffice
  version: "0.1.0"
---

# Copy Review
...
```

`departments/06-marketing-content-pr/skills/copy-review/skill.yaml`:

```yaml
id: 06-marketing-content-pr/copy-review
version: 0.1.0
kind: skill
department: 06-marketing-content-pr
summary: Reviews marketing copy for clarity, brand voice, claims and calls to action
inputs:
  - name: copy
    description: The text or file to review
    required: true
outputs:
  - name: findings
    description: Problems in the shared findings format
depends_on: []
context_needs:
  - brand.voice
  - marketing.ideal_customers
  - regional.output_language
risk: low
side_effects:
  - reads_files
cacheable: true
platforms_tested: []
provenance:
  type: original
```

## Checking a skill

```bash
node tools/skilloffice-cli/src/cli.ts validate departments/06-marketing-content-pr
node tools/skilloffice-cli/src/cli.ts scan departments/06-marketing-content-pr
```

Templates live in `core/templates/skill/` and `core/templates/manager/`.
