import * as React from 'react';
import { cn } from '@/core/utils';
import { LabelProps, labelVariants } from './Label.types';

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(labelVariants({ size }), className)}
        {...props}
      />
    );
  }
);
Label.displayName = 'Label';
