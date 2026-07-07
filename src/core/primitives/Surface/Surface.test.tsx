import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Surface, CardSurface } from './Surface';

describe('Surface primitive', () => {
  it('renders a base surface', () => {
    const { container } = render(<Surface>Test</Surface>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('bg-white')).toBe(true);
    expect(element.classList.contains('overflow-hidden')).toBe(true);
  });

  it('renders a CardSurface derivative', () => {
    const { container } = render(<CardSurface>Test</CardSurface>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('shadow-sm')).toBe(true);
    expect(element.classList.contains('border-neutral-200')).toBe(true);
  });
});
