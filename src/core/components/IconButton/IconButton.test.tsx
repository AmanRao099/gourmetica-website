import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { IconButton } from './IconButton';
import { Settings } from 'lucide-react';

describe('IconButton component', () => {
  it('renders a button with an icon', () => {
    const { container } = render(<IconButton icon={Settings} aria-label="Settings" />);
    const btn = container.querySelector('button');
    expect(btn).toBeInTheDocument();
    expect(btn?.getAttribute('aria-label')).toBe('Settings');
    expect(btn?.querySelector('svg')).toBeInTheDocument();
  });
});
