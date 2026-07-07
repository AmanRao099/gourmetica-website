import * as React from 'react';
import { cn } from '@/core/utils';
import { EyebrowProps, eyebrowVariants } from './Eyebrow.types';

export const Eyebrow = React.forwardRef<HTMLSpanElement, EyebrowProps>(
  ({ className, color, size, as: Component = 'span', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(eyebrowVariants({ color, size }), className)}
        {...props}
      />
    );
  }
);
Eyebrow.displayName = 'Eyebrow';
