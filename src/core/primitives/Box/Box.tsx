import * as React from 'react';
import { cn } from '@/core/utils';
import { BoxProps } from './Box.types';

export const Box = React.forwardRef<HTMLElement, BoxProps>(
  ({ as: Component = 'div', className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("box-border", className)}
        {...props}
      />
    );
  }
);
Box.displayName = 'Box';
