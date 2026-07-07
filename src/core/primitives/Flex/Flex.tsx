import * as React from 'react';
import { Box } from '../Box';
import { cn } from '@/core/utils';
import { FlexProps, flexVariants } from './Flex.types';

export const Flex = React.forwardRef<HTMLElement, FlexProps>(
  ({ className, direction, align, justify, wrap, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(flexVariants({ direction, align, justify, wrap }), className)}
        {...props}
      />
    );
  }
);
Flex.displayName = 'Flex';
