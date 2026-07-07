# Surface

The `Surface` primitive is the foundation for all layered UI elements. It manages backgrounds, borders, shadows, and corner radii.

## Variants
- `default`: Flat white background.
- `card`: Bordered, small shadow.
- `elevated`: Floating, large shadow.
- `interactive`: Card variant that elevates on hover.
- `glass`: Transparent blur (requires a background underneath to be visible).
- `dark`: High-contrast dark surface.

## Direct Exports
You can use `<CardSurface />`, `<ElevatedSurface />`, `<InteractiveSurface />`, and `<GlassSurface />` as direct wrapper components without needing the `variant` prop.
