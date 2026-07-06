# Tooltip

The `Tooltip` component is built on top of `@radix-ui/react-tooltip`. It provides contextual information when a user hovers or focuses on an element.

## Usage
Remember to wrap your application (or parts of it) with `<TooltipProvider>`.

## Composition
Use it by composing its parts:
```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```
