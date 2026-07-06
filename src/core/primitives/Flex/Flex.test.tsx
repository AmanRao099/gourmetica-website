import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Flex } from './Flex';

describe('Flex primitive', () => {
  it('renders a flex container by default', () => {
    const { container } = render(<Flex>Test</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('flex')).toBe(true);
    expect(element.classList.contains('flex-row')).toBe(true);
  });

  it('applies flex direction correctly', () => {
    const { container } = render(<Flex direction="col">Test</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('flex-col')).toBe(true);
  });

  it('applies justify and align correctly', () => {
    const { container } = render(<Flex justify="between" align="center">Test</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('justify-between')).toBe(true);
    expect(element.classList.contains('items-center')).toBe(true);
  });
});
