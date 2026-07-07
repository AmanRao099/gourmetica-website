# LogoCloudBlock

The `LogoCloudBlock` presents a list of logos from clients or partners.

## Props
- `title` (string): Optional headline above the logos
- `logos` (Array): Array of logo objects `{ src, alt, href? }`
- `variant` (`inline` | `grid` | `marquee`): The layout behavior of the logos

## Tailwind Config
If using the `marquee` variant, you need to add this to your `tailwind.config.ts` or theme configuration:
```ts
keyframes: {
  marquee: {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-50%)' },
  },
},
animation: {
  marquee: 'marquee 25s linear infinite',
},
```
