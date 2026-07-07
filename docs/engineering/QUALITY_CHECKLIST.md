# Quality Checklist

Before submitting a Pull Request, the author must verify the following items:

## 1. Visual QA
- [ ] Typography sizes, line-heights, and weights match Figma.
- [ ] Spacing values (margin, padding, gap) strictly use the 8-point token system.
- [ ] Colors strictly use Core tokens. No HEX/RGB values are hardcoded.
- [ ] Hover and active states are implemented.
- [ ] Motion/Animation follows the `MotionLibrary` and feels frictionless.

## 2. Technical QA
- [ ] No inline styles are used anywhere (`style={{...}}`).
- [ ] TypeScript compiles without errors.
- [ ] ESLint passes.
- [ ] File sizes are reasonable.
- [ ] Import paths strictly follow dependency rules (`@/core`, `@/blocks`, `@/features`).

## 3. Accessibility & SEO QA
- [ ] `alt` tags are descriptive on all non-decorative images.
- [ ] ARIA labels are present on icon-only buttons or ambiguous interactive elements.
- [ ] Heading hierarchy (`h1`, `h2`, `h3`) is sequential and logical.
- [ ] Tab focus states are visible (no `outline: none` without a custom focus ring).

## 4. Performance QA
- [ ] Large sections/blocks are dynamically imported if they are below the fold.
- [ ] Images are appropriately sized and compressed.
- [ ] No layout shifts are noticeable during initial load.
