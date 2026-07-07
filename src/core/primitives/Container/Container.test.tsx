import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Container } from './Container';

describe('Container primitive', () => {
  it('renders with max-width lg by default', () => {
    const { container } = render(<Container>Test</Container>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('max-w-7xl')).toBe(true);
    expect(element.classList.contains('mx-auto')).toBe(true);
  });
});
