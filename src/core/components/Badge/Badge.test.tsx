import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge component', () => {
  it('renders correctly', () => {
    const { container } = render(<Badge>New</Badge>);
    const element = container.firstChild as HTMLElement;
    expect(element.textContent).toBe('New');
    expect(element.classList.contains('bg-brand-500')).toBe(true);
  });

  it('applies variant classes', () => {
    const { container } = render(<Badge variant="danger">Error</Badge>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('bg-danger-100')).toBe(true);
  });
});
