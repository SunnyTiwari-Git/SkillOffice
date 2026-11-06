---
name: example-skill
description: "{{one_sentence_what_it_does}} Use when {{trigger_situations_and_keywords}}."
license: Apache-2.0
metadata:
  project: SkillOffice
  version: 0.1.0
---

<!-- TEMPLATE: the name field must match the final folder name (lowercase letters, digits, single hyphens, max 64 characters). Keep only the six standard frontmatter fields: name, description, license, compatibility, metadata, allowed-tools. Keep this file under 500 lines; move long material to references/. -->

# {{skill_title}}

{{one_paragraph_purpose}}

## Inputs

- {{input_name}}: {{input_description}}

Context used (from the active profile, declared in `skill.yaml`): {{context_fields}}.

## Steps

1. {{step_1}}
2. {{step_2}}
3. {{step_3}}

## Output

{{output_description}}

If this skill reviews work, report problems in the format from `core/protocols/findings.md`.

End with a handoff using `core/templates/handoff.md`.

## Quality checklist

- [ ] {{quality_check_1}}
- [ ] {{quality_check_2}}

## Safety

Follow `core/protocols/safety.md`. {{skill_specific_safety_notes}}
