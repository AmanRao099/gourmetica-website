import * as React from 'react';
import { Box } from '../Box';
import { cn } from '@/core/utils';
import { PageContainerProps, pageContainerVariants } from './PageContainer.types';

export const PageContainer = React.forwardRef<HTMLElement, PageContainerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(pageContainerVariants({ size }), className)}
        {...props}
      />
    );
  }
);
PageContainer.displayName = 'PageContainer';
