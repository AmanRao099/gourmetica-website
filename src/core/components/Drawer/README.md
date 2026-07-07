# Drawer

The `Drawer` component is built on top of `@radix-ui/react-dialog` but slides in from the edge of the screen rather than appearing in the center.

## Composition
Use it by composing its parts:
```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open</Button>
  </DrawerTrigger>
  <DrawerContent side="right">
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description</DrawerDescription>
    </DrawerHeader>
    {/* Body */}
    <DrawerFooter>
      <Button>Action</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```
