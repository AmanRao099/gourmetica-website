# Link

The `Link` component wraps Next.js `next/link` while applying our typography and interaction tokens.

## Props
- `href`: Required destination (supports strings or Url objects like NextLink).
- `variant`: `default`, `subtle`, `nav`.
- `size`: `sm`, `default`, `lg`.
- `isExternal`: If true, forces `<a target="_blank" rel="noopener noreferrer">` instead of using the Next.js router. Automatically detects string `http` as well.
