# Select

The `Select` component is built on top of `@radix-ui/react-select` for WAI-ARIA compliance, focus trapping, and portal rendering.

## Composition
Use it by composing its parts:
```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>
```
