import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('Skeleton component', () => {
  it('renders a div with animate-pulse', () => {
    const { container } = render(<Skeleton className="w-10 h-10" />);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('animate-pulse')).toBe(true);
    expect(element.classList.contains('bg-neutral-200')).toBe(true);
  });
});
