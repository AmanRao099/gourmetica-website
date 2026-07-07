# Box

The `Box` is the most fundamental layout primitive. It renders a `div` by default but can polymorphically render any HTML element using the `as` prop. It applies `box-border` by default.

## Usage

```tsx
import { Box } from '@/core/primitives/Box';

<Box as="section" className="p-8 bg-neutral-50">
  Content
</Box>
```

## Props
- `as` (optional): The HTML element to render (e.g., `'main'`, `'section'`, `'article'`). Defaults to `'div'`.
- Supports all standard React HTML attributes and `ref`.
