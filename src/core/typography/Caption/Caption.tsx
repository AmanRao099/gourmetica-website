import * as React from 'react';
import { cn } from '@/core/utils';
import { CaptionProps, captionVariants } from './Caption.types';

export const Caption = React.forwardRef<HTMLSpanElement, CaptionProps>(
  ({ className, color, as: Component = 'span', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(captionVariants({ color }), className)}
        {...props}
      />
    );
  }
);
Caption.displayName = 'Caption';
