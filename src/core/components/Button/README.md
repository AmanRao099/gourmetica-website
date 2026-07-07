# Button

The `Button` component is the primary interactive element. It uses `@radix-ui/react-slot` to support the `asChild` prop, which lets you pass the button's styling and accessibility props to a child element (e.g., a `Link`).

## Props
- `variant`: `primary` (default), `secondary`, `outline`, `ghost`, `link`.
- `tone`: `brand` (default), `neutral`, `danger`, `success`, `warning`.
- `size`: `xs`, `sm`, `md` (default), `lg`, `xl`, `icon`.
- `asChild`: If true, merges props onto its immediate child instead of rendering a `<button>`.

## Example
```tsx
<Button variant="primary" tone="danger">Delete</Button>

// As a link
<Button asChild variant="outline">
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```
