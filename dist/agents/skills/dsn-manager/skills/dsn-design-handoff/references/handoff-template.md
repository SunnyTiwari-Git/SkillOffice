# Handoff spec template

Replace the placeholders. Delete sections that truly do not apply and say why.

## Handoff spec: {{feature or screen}}

### Overview

{{what it does, who uses it, the main task}}

### Layout

{{grid, columns, max content width, section spacing, alignment}}

### Design tokens used

| Token | Value | Used for |
| --- | --- | --- |
| `--color-primary` | {{hex}} | Primary buttons, links |
| `--space-6` | {{value}} | Between sections |
| `--text-xl` | {{size, weight, family}} | Page title |

### Components

| Component | Variant | Props or properties | Notes |
| --- | --- | --- | --- |
| {{Button}} | {{primary}} | {{label, loading, disabled}} | {{behavior}} |

### States and interactions

| Element | State | Behavior |
| --- | --- | --- |
| {{Save button}} | Hover | {{token change}} |
| {{Save button}} | Loading | {{spinner, disabled, label "Saving"}} |
| {{Form}} | Error | {{message below field, field border uses error token, focus moves to first error}} |

### Responsive behavior

| Breakpoint | Changes |
| --- | --- |
| 1024 and wider | {{default layout}} |
| 768 to 1023 | {{changes}} |
| Under 768 | {{changes}} |

### Content rules

- {{character limits, truncation, wrapping, formats}}

### Edge cases

- Empty: {{what shows}}
- Long text: {{rule}}
- Loading: {{skeleton or spinner}}
- Error: {{appearance and recovery}}
- No permission: {{what shows}}

### Motion

| Element | Trigger | Animation | Duration | Easing |
| --- | --- | --- | --- | --- |
| {{panel}} | {{open}} | {{slide}} | {{--duration-base}} | {{--ease-standard}} |

Reduced motion: {{what replaces the animation}}

### Accessibility

- Focus order: {{order}}
- Names and roles: {{list}}
- Keyboard: {{keys and behavior}}
- Announcements: {{status messages}}

### Implementation notes

{{stack-specific notes}}

### Open questions

- {{question}}
