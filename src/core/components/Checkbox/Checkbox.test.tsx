import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
  it('renders a Radix checkbox', () => {
    const { container } = render(<Checkbox />);
    const btn = container.querySelector('button');
    expect(btn).toBeInTheDocument();
    expect(btn?.getAttribute('role')).toBe('checkbox');
  });

  it('applies error state correctly', () => {
    const { container } = render(<Checkbox hasError />);
    const btn = container.querySelector('button');
    expect(btn?.classList.contains('border-danger-500')).toBe(true);
  });
});
