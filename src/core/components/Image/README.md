# Image

The `Image` component is a strict wrapper over `next/image` that enforces accessibility (required `alt`) and token-based radius and aspect ratio variants.

## Props
- `alt`: Required for accessibility.
- `radius`: `none`, `sm`, `md`, `lg`, `full`.
- `aspectRatio`: `auto`, `square`, `video`, `portrait`, `landscape`.
- All other `next/image` props (e.g. `src`, `width`, `height`, `fill`).
