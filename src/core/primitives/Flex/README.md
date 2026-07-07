# Flex

The `Flex` primitive handles one-dimensional layouts (rows and columns). It is built on top of the `Box` primitive.

## Props
Inherits all `Box` props, plus:
- `direction`: `row` (default), `col`, `rowReverse`, `colReverse`
- `align`: `start`, `center`, `end`, `stretch` (default), `baseline`
- `justify`: `start` (default), `center`, `end`, `between`, `around`
- `wrap`: `nowrap` (default), `wrap`, `wrapReverse`

*Note: For spacing between flex children, use the standard Tailwind `gap-` utility classes via `className` or consider the `Stack` component.*
