import * as React from 'react';
import { cn } from '@/core/utils';
import { TextareaProps, textareaVariants } from './Textarea.types';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ hasError }), className)}
        ref={ref}
        aria-invalid={hasError ? "true" : undefined}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
