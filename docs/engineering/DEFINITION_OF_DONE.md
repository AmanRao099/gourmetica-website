# Definition of Done

A feature, component, or block is only considered "Done" when it meets every single one of the following criteria.

## 1. Implementation
- [ ] Uses `@/core` system tokens exclusively. No hardcoded colors, spacing, or sizing.
- [ ] Uses approved patterns and blocks where applicable.
- [ ] Conforms to the `ComponentContract` if it is a Core component.

## 2. Quality
- [ ] Fully typed with strict TypeScript. No `any`.
- [ ] Passes all linting rules without warnings.
- [ ] Responsive across all defined breakpoints (Mobile, Tablet, Laptop, Desktop).
- [ ] Accessible (Passes automated a11y checks, keyboard navigable, screen reader compatible).

## 3. Performance
- [ ] Complies with the Performance Budget:
  - LCP < 2.5s
  - CLS < 0.1
  - INP < 200ms
- [ ] Uses `next/image` for all raster imagery.
- [ ] Lazy loads heavy below-the-fold components or libraries.

## 4. Governance
- [ ] Code has been peer-reviewed.
- [ ] Documentation (Props, Usage) has been written or updated.
- [ ] Meets Brand Guidelines (Typography, Photography, Tone).

**"It works on my machine" is not a project management strategy.**
