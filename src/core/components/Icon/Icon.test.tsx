import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Icon } from './Icon';
import { Settings } from 'lucide-react';

describe('Icon component', () => {
  it('renders an SVG with the correct size classes', () => {
    const { container } = render(<Icon icon={Settings} size="lg" />);
    const element = container.querySelector('svg');
    expect(element).toBeInTheDocument();
    expect(element?.classList.contains('w-6')).toBe(true);
    expect(element?.classList.contains('h-6')).toBe(true);
  });
});
