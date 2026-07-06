# Spacing Tokens

Gourmetica strictly enforces an 8-point spacing system. Magic numbers (e.g., 17px, 25px) are strictly forbidden.

## The Scale

| Token | Value (px) | Value (rem) | Typical Usage |
| :--- | :--- | :--- | :--- |
| `4` | 4px | 0.25rem | Micro adjustments, icon nudges |
| `8` | 8px | 0.5rem | Tight component padding |
| `12` | 12px | 0.75rem | Standard component padding (e.g., buttons) |
| `16` | 16px | 1rem | Default gap between related items |
| `20` | 20px | 1.25rem | Medium gaps |
| `24` | 24px | 1.5rem | Loose gaps, standard card padding |
| `32` | 32px | 2rem | Very loose component spacing |
| `40` | 40px | 2.5rem | Inner section padding (Mobile) |
| `48` | 48px | 3rem | Inner section padding (Tablet) |
| `56` | 56px | 3.5rem | - |
| `64` | 64px | 4rem | Inner section padding (Desktop) |
| `72` | 72px | 4.5rem | - |
| `80` | 80px | 5rem | Block spacing |
| `96` | 96px | 6rem | Standard outer section margin |
| `120` | 120px | 7.5rem | Loose outer section margin |
| `160` | 160px | 10rem | Hero padding |

## Implementation Rules
- Never bypass these tokens using inline styles.
- If a design requires a spacing value that does not exist on this scale, the design must be adjusted to snap to the nearest token.
