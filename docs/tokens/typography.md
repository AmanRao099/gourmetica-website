# Typography Tokens

Gourmetica strictly dictates an editorial typographic scale to command attention and convey luxury.

## Font Families
- **Primary / Heading:** `Mont` (System variable: `--font-mont`). Used for all Display and Heading sizes.
- **Secondary / Body:** `Raleway` (System variable: `--font-body`). Used for Body text.
- **Tertiary / Accents:** `Open Sans` (System variable: `--font-secondary`). Used for Overlines and precise metadata.

## The Scale

| Token | Size | Line Height | Tracking (Letter Spacing) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `display-xl` | 72px (4.5rem) | 1.05 | -0.02em | Hero primary headings |
| `display-lg` | 64px (4rem) | 1.1 | -0.01em | Section primary headings |
| `heading-xl` | 48px (3rem) | 1.1 | -0.01em | Standard section titles |
| `heading-lg` | 36px (2.25rem) | 1.15 | 0 | Sub-section titles |
| `heading-md` | 24px (1.5rem) | 1.2 | 0 | Card titles |
| `heading-sm` | 20px (1.25rem) | 1.3 | 0 | Small card titles / Asides |
| `body-xl` | 20px (1.25rem) | 1.6 | 0 | Lead paragraphs |
| `body-lg` | 18px (1.125rem) | 1.65 | 0 | Standard long-form body |
| `body` | 16px (1rem) | 1.65 | 0 | Default body text |
| `body-sm` | 14px (0.875rem) | 1.6 | 0 | Captions, small asides |
| `caption` | 12px (0.75rem) | 1.5 | 0 | Meta details |
| `overline` | 12px (0.75rem) | 1.5 | +0.05em | Uppercase eyebrows / tags |

## Implementation Rules
- Never use arbitrary `text-[]` or `leading-[]` utility classes in Tailwind. Always use the mapped typographic tokens (e.g., `text-heading-xl leading-heading-xl`).
