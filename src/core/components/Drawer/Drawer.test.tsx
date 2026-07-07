import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from './Drawer';

describe('Drawer component', () => {
  it('renders a Radix dialog trigger', () => {
    const { container } = render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>Test Drawer</DrawerTitle>
        </DrawerContent>
      </Drawer>
    );
    const btn = container.querySelector('button');
    expect(btn).toBeInTheDocument();
    expect(btn?.getAttribute('aria-haspopup')).toBe('dialog');
  });
});
