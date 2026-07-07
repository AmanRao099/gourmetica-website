import * as React from 'react';
import { cn } from '@/core/utils';
import { InputProps, inputVariants } from './Input.types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, hasError, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ size, hasError }), className)}
        ref={ref}
        aria-invalid={hasError ? "true" : undefined}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
