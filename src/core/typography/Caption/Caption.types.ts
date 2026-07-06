import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export const captionVariants = cva('font-body text-body-xs leading-body-xs', {
  variants: {
    color: {
      default: 'text-neutral-500 dark:text-neutral-400',
      error: 'text-danger-500',
      success: 'text-success-500',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

export interface CaptionProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>, VariantProps<typeof captionVariants> {
  as?: React.ElementType;
}
