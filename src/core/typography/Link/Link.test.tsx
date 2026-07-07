import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Link } from './Link';

describe('Link typography', () => {
  it('renders an anchor tag', () => {
    const { container } = render(<Link href="/">Home</Link>);
    expect(container.querySelector('a')).toBeInTheDocument();
  });

  it('adds external attributes when isExternal is true', () => {
    const { container } = render(<Link href="https://example.com" isExternal>External</Link>);
    const element = container.querySelector('a') as HTMLElement;
    expect(element.getAttribute('target')).toBe('_blank');
    expect(element.getAttribute('rel')).toBe('noopener noreferrer');
  });
});
