# Motion Tokens

Gourmetica’s motion philosophy dictates that motion must explain, guide, and disappear. It must never distract.

## Durations
- `fast`: `150ms` (Snappy micro-interactions like hover states)
- `normal`: `300ms` (Standard transitions like modals, reveals)
- `slow`: `500ms` (Large layout shifts, page transitions)
- `very-slow`: `800ms` (Ambient background changes)

## Easings
- `ease-out`: `cubic-bezier(0.2, 0.8, 0.2, 1)` (Objects entering the screen)
- `ease-in`: `cubic-bezier(0.4, 0, 1, 1)` (Objects exiting the screen)
- `ease-in-out`: `cubic-bezier(0.4, 0, 0.2, 1)` (Objects moving point-to-point)
- `ease-expo`: `cubic-bezier(0.19, 1, 0.22, 1)` (Luxury, dramatic, buttery-smooth reveal)

## Standardized Animations (Framer Motion)
All animations must be imported from the central motion library. Do not hand-code `motion.div` values inside components.

Available presets:
- `fade`
- `fadeUp`
- `fadeDown`
- `fadeLeft`
- `fadeRight`
- `scale`
- `stagger`
- `slide`
- `reveal`
- `maskReveal`
- `textReveal`
- `sectionReveal`
- `hoverLift`
- `hoverScale`
- `press`
- `parallax`
- `videoReveal`
