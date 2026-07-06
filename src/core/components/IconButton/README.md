# IconButton

The `IconButton` component is a wrapper around `Button` (with `size="icon"`) and `Icon`. It forces you to provide an `aria-label` for screen reader accessibility, since icon-only buttons lack visible text.

## Props
- `icon`: The lucide-react icon to render.
- `aria-label` (Required): Text for screen readers (e.g. `"Close dialog"`).
- Inherits all `Button` props except `children` and `size`.
