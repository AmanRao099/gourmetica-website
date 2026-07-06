import * as React from 'react';
import { Box } from '../Box';
import { cn } from '@/core/utils';
import { SectionProps, sectionVariants } from './Section.types';

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, inset, as = 'section', ...props }, ref) => {
    return (
      <Box
        ref={ref}
        as={as}
        className={cn(sectionVariants({ spacing, inset }), className)}
        {...props}
      />
    );
  }
);
Section.displayName = 'Section';
