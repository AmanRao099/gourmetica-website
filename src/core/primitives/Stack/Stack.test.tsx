import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Stack } from './Stack';

describe('Stack primitive', () => {
  it('renders as a flex column by default', () => {
    const { container } = render(<Stack>Test</Stack>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('flex')).toBe(true);
    expect(element.classList.contains('flex-col')).toBe(true);
  });
});
