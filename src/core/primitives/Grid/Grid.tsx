import * as React from 'react';
import { Box } from '../Box';
import { cn } from '@/core/utils';
import { GridProps, gridVariants } from './Grid.types';

export const Grid = React.forwardRef<HTMLElement, GridProps>(
  ({ className, columns, gap, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(gridVariants({ columns, gap }), className)}
        {...props}
      />
    );
  }
);
Grid.displayName = 'Grid';
