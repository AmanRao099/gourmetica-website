import * as React from 'react';
import { Box } from '@/core/primitives';
import { cn } from '@/core/utils';
import { SkeletonProps } from './Skeleton.types';

export const Skeleton = React.forwardRef<HTMLElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn("animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800", className)}
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";
