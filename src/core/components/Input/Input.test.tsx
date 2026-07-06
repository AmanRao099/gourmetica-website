import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input component', () => {
  it('renders correctly', () => {
    const { container } = render(<Input placeholder="Test" />);
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
    expect(input?.placeholder).toBe('Test');
  });

  it('applies error state correctly', () => {
    const { container } = render(<Input hasError />);
    const input = container.querySelector('input');
    expect(input?.classList.contains('border-danger-500')).toBe(true);
    expect(input?.getAttribute('aria-invalid')).toBe('true');
  });
});
