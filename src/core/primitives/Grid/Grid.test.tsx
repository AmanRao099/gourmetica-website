import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Grid } from './Grid';

describe('Grid primitive', () => {
  it('renders a grid container', () => {
    const { container } = render(<Grid columns={3}>Test</Grid>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('grid')).toBe(true);
    expect(element.classList.contains('grid-cols-3')).toBe(true);
  });
});
