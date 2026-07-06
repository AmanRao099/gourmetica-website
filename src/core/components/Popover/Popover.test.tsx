import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';

describe('Popover component', () => {
  it('renders a Radix popover trigger', () => {
    const { container } = render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );
    const btn = container.querySelector('button');
    expect(btn).toBeInTheDocument();
    expect(btn?.getAttribute('aria-haspopup')).toBe('dialog');
  });
});
