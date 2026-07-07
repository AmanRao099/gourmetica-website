import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Box } from './Box';

describe('Box primitive', () => {
  it('renders a div by default', () => {
    const { container } = render(<Box>Test</Box>);
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('renders as a custom element when "as" prop is provided', () => {
    const { container } = render(<Box as="section">Test</Box>);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('merges classNames correctly', () => {
    const { container } = render(<Box className="custom-class">Test</Box>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('custom-class')).toBe(true);
    expect(element.classList.contains('box-border')).toBe(true);
  });
});
