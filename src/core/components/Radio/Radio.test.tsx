import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { RadioGroup, RadioGroupItem } from './Radio';

describe('Radio component', () => {
  it('renders a Radix radio group', () => {
    const { container } = render(
      <RadioGroup defaultValue="1">
        <RadioGroupItem value="1" id="r1" />
        <RadioGroupItem value="2" id="r2" />
      </RadioGroup>
    );
    const btns = container.querySelectorAll('button');
    expect(btns.length).toBe(2);
    expect(btns[0].getAttribute('role')).toBe('radio');
  });
});
