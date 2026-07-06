import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Text } from './Text';

describe('Text typography', () => {
  it('renders a p tag by default', () => {
    const { container } = render(<Text>Test</Text>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('renders correctly with variants', () => {
    const { container } = render(<Text size="body-lg" weight="medium">Test</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('text-body-lg')).toBe(true);
    expect(element.classList.contains('font-medium')).toBe(true);
  });
});
