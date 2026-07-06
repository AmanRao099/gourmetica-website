import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { AspectRatio } from './AspectRatio';

describe('AspectRatio primitive', () => {
  it('renders with 1:1 ratio by default', () => {
    const { container } = render(<AspectRatio>Test</AspectRatio>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.paddingBottom).toBe('100%');
  });

  it('calculates padding-bottom correctly for custom ratios', () => {
    // 16:9 ratio
    const { container } = render(<AspectRatio ratio={16/9}>Test</AspectRatio>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.paddingBottom).toBe('56.25%'); // (9/16)*100
  });
});
