import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Caption } from './Caption';

describe('Caption typography', () => {
  it('renders a span tag by default', () => {
    const { container } = render(<Caption>Test</Caption>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('renders correctly with color variants', () => {
    const { container } = render(<Caption color="error">Test</Caption>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('text-danger-500')).toBe(true);
  });
});
