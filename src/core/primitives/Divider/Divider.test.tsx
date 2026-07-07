import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider primitive', () => {
  it('renders a horizontal separator by default', () => {
    const { container } = render(<Divider />);
    const element = container.firstChild as HTMLElement;
    expect(element.getAttribute('aria-orientation')).toBe('horizontal');
    expect(element.classList.contains('h-[1px]')).toBe(true);
  });

  it('renders a vertical separator', () => {
    const { container } = render(<Divider orientation="vertical" />);
    const element = container.firstChild as HTMLElement;
    expect(element.getAttribute('aria-orientation')).toBe('vertical');
    expect(element.classList.contains('w-[1px]')).toBe(true);
  });
});
