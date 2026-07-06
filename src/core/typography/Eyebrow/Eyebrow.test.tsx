import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Eyebrow } from './Eyebrow';

describe('Eyebrow typography', () => {
  it('renders a span tag by default', () => {
    const { container } = render(<Eyebrow>Test</Eyebrow>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('renders correctly with variants', () => {
    const { container } = render(<Eyebrow color="neutral" size="sm">Test</Eyebrow>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('text-neutral-500')).toBe(true);
    expect(element.classList.contains('text-[10px]')).toBe(true);
  });
});
