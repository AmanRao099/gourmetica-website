import * as React from 'react';
import { cn } from '@/core/utils';
import { HeadingProps, headingVariants } from './Heading.types';

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, weight, level = 2, as, ...props }, ref) => {
    const Component = as || (`h${level}` as React.ElementType);
    return (
      <Component
        ref={ref}
        className={cn(
          headingVariants({ size, weight }), 
          level === 1 && 'max-w-[12ch]',
          level === 2 && 'max-w-[14ch]',
          className
        )}
        {...props}
      />
    );
  }
);
Heading.displayName = 'Heading';
