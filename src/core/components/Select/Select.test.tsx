import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Select, SelectTrigger, SelectValue } from './Select';

describe('Select component', () => {
  it('renders a Radix select trigger', () => {
    const { container } = render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
      </Select>
    );
    const btn = container.querySelector('button');
    expect(btn).toBeInTheDocument();
    expect(btn?.getAttribute('role')).toBe('combobox');
  });
});
