# Radius Tokens

Radius tokens determine the curvature of our interface elements, defining the "sharpness" or "softness" of the brand. Gourmetica leans towards precise, structural curves.

## The Scale

| Token | Value | Usage |
| :--- | :--- | :--- |
| `none` | `0px` | Sharp edged components, flush borders |
| `xs` | `2px` | Checkboxes, small micro-UI |
| `sm` | `4px` | Small tags, inputs |
| `md` | `8px` | Standard buttons, standard cards |
| `lg` | `12px` | Large cards, modals, dropdowns |
| `xl` | `16px` | Section wrappers, large media blocks |
| `2xl` | `24px` | Highly elevated floating elements |
| `pill` | `9999px` | Circular buttons, distinct badges |

## Implementation Rules
- Never use magic numbers for border radius.
- Maintain nested radius proportion. If an outer container is `lg` (12px) and it has 4px padding, the inner element should be `md` (8px).
