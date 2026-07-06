# Modal

The `Modal` component is built on top of `@radix-ui/react-dialog`. It traps focus, prevents body scroll, and handles accessibility (WAI-ARIA).

## Composition
Use it by composing its parts:
```tsx
<Modal>
  <ModalTrigger asChild>
    <Button>Open</Button>
  </ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Title</ModalTitle>
      <ModalDescription>Description</ModalDescription>
    </ModalHeader>
    {/* Body */}
    <ModalFooter>
      <Button>Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```
