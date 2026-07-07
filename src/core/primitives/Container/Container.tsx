import * as React from 'react';
import { Box } from '../Box';
import { cn } from '@/core/utils';
import { ContainerProps, containerVariants } from './Container.types';

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(containerVariants({ size }), className)}
        {...props}
      />
    );
  }
);
Container.displayName = 'Container';
