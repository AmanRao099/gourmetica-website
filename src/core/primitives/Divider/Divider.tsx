import * as React from 'react';
import { Box } from '../Box';
import { cn } from '@/core/utils';
import { DividerProps } from './Divider.types';

export const Divider = React.forwardRef<HTMLElement, DividerProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => {
    return (
      <Box
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          "bg-neutral-200 shrink-0",
          orientation === 'horizontal' ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...props}
      />
    );
  }
);
Divider.displayName = 'Divider';
