import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Textarea } from './Textarea';

describe('Textarea component', () => {
  it('renders correctly', () => {
    const { container } = render(<Textarea placeholder="Test" />);
    const textarea = container.querySelector('textarea');
    expect(textarea).toBeInTheDocument();
    expect(textarea?.placeholder).toBe('Test');
  });

  it('applies error state correctly', () => {
    const { container } = render(<Textarea hasError />);
    const textarea = container.querySelector('textarea');
    expect(textarea?.classList.contains('border-danger-500')).toBe(true);
    expect(textarea?.getAttribute('aria-invalid')).toBe('true');
  });
});
