# Token example

A minimal token file as CSS variables. Names describe roles, not values, so a theme change never requires renaming. Values below are placeholders; use the brand's and the visual direction's.

```css
:root {
  /* Color: roles */
  --color-bg: #ffffff;
  --color-surface: #f6f7f9;
  --color-text: #1b1d22;
  --color-text-muted: #5a606b;
  --color-primary: #1f5f8b;
  --color-on-primary: #ffffff;
  --color-border: #d9dce1;
  --color-success: #1e7a46;
  --color-warning: #8a5a00;
  --color-error: #b3261e;
  --color-focus: #1f5f8b;

  /* Typography */
  --font-heading: "Heading Family", serif;
  --font-body: "Body Family", system-ui, sans-serif;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.75rem;
  --text-2xl: 2.5rem;
  --leading-body: 1.6;
  --leading-heading: 1.15;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;

  /* Shape and depth */
  --radius-sm: 4px;
  --radius-md: 8px;
  --border-width: 1px;
  --shadow-1: 0 1px 2px rgb(0 0 0 / 0.08);
  --shadow-2: 0 6px 16px rgb(0 0 0 / 0.12);

  /* Motion */
  --duration-fast: 120ms;
  --duration-base: 200ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-base: 0ms;
  }
}

[data-theme="dark"] {
  --color-bg: #121417;
  --color-surface: #1b1e23;
  --color-text: #eef0f3;
  --color-text-muted: #a7adb8;
  --color-border: #2c3038;
}
```

## Checks before using it

- Verify every text and background pair with a contrast checker (4.5:1 for body text, 3:1 for large text and interface components).
- Keep one spacing scale; avoid one-off values.
- Use different radius values only when hierarchy calls for it, not one radius on everything.
