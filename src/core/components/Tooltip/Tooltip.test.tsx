import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from './Tooltip';

describe('Tooltip component', () => {
  it('renders a Radix tooltip trigger', () => {
    const { container } = render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    const btn = container.querySelector('button');
    expect(btn).toBeInTheDocument();
  });
});
