import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button';

describe('ButtonGroup component', () => {
  it('renders horizontally by default', () => {
    const { container } = render(
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
      </ButtonGroup>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('flex-row')).toBe(true);
    expect(element.classList.contains('-space-x-px')).toBe(true);
  });
});
