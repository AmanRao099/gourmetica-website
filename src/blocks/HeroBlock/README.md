# HeroBlock

The `HeroBlock` is a purely presentational assembly that constructs a standard page hero.
It supports multiple standard layout variants, light/dark themes, and alignment configurations.

## Props
- `title` (string): Primary headline
- `subtitle` (string): Optional eyebrow above headline
- `description` (string): Optional paragraph
- `actions` (ReactNode): Buttons or CTAs
- `media` (ReactNode): Image or Video element
- `variant` (`minimal` | `split` | `image` | `video`): The visual layout template
- `theme` (`light` | `dark`): Propagates dark mode if selected
- `alignment` (`left` | `center`): Text and action alignment

## Usage
```tsx
import { HeroBlock } from '@/blocks/HeroBlock';

export default function Home() {
  return (
    <HeroBlock
      title="Welcome to Gourmetica"
      subtitle="The ultimate culinary experience"
      description="Learn from the best."
      variant="split"
    />
  );
}
```
