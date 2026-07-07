import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Switch } from './Switch';

describe('Switch component', () => {
  it('renders a Radix switch', () => {
    const { container } = render(<Switch />);
    const btn = container.querySelector('button');
    expect(btn).toBeInTheDocument();
    expect(btn?.getAttribute('role')).toBe('switch');
  });
});
