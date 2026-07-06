import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export const labelVariants = cva('font-body font-medium text-neutral-900 dark:text-neutral-100', {
  variants: {
    size: {
      default: 'text-body-sm leading-body-sm',
      large: 'text-body leading-body',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {}
