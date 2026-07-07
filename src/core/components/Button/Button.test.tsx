import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  it('renders correctly', () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container.querySelector('button')).toBeInTheDocument();
    expect(container.textContent).toBe('Click me');
  });

  it('applies variants correctly', () => {
    const { container } = render(<Button variant="outline" tone="danger">Danger Outline</Button>);
    const btn = container.querySelector('button');
    expect(btn?.classList.contains('border')).toBe(true);
    expect(btn?.classList.contains('border-danger-200')).toBe(true);
  });

  it('handles clicks', () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(getByText('Click'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled correctly', () => {
    const { getByText } = render(<Button disabled>Disabled</Button>);
    const btn = getByText('Disabled') as HTMLButtonElement;
    expect(btn.disabled).toBe(true);
    expect(btn.classList.contains('disabled:opacity-50')).toBe(true);
  });
});
