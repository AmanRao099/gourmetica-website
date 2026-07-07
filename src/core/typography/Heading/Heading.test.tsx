import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading typography', () => {
  it('renders an h2 by default', () => {
    const { container } = render(<Heading>Test</Heading>);
    expect(container.querySelector('h2')).toBeInTheDocument();
  });

  it('renders correct level', () => {
    const { container } = render(<Heading level={1}>Test</Heading>);
    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('renders custom element via as prop', () => {
    const { container } = render(<Heading as="div">Test</Heading>);
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});
