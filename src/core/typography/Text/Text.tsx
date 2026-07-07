import * as React from 'react';
import { cn } from '@/core/utils';
import { TextProps, textVariants } from './Text.types';

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, align, as: Component = 'p', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size, weight, align }), className)}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';
