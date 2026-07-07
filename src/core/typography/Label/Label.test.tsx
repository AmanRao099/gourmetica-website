import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Label } from './Label';

describe('Label typography', () => {
  it('renders a label tag by default', () => {
    const { container } = render(<Label>Test</Label>);
    expect(container.querySelector('label')).toBeInTheDocument();
  });

  it('renders correctly with size variants', () => {
    const { container } = render(<Label size="large">Test</Label>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('text-body')).toBe(true);
  });
});
