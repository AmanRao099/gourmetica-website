# Popover

The `Popover` component is built on top of `@radix-ui/react-popover`. It displays rich content in a portal, tethered to a trigger button.

## Composition
Use it by composing its parts:
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button>Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    Rich HTML content here.
  </PopoverContent>
</Popover>
```
