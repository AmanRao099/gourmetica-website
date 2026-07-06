import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export const spinnerVariants = cva('animate-spin text-current', {
  variants: {
    size: {
      sm: 'w-4 h-4 border-2',
      md: 'w-6 h-6 border-2',
      lg: 'w-8 h-8 border-3',
      xl: 'w-12 h-12 border-4',
    },
    tone: {
      brand: 'text-brand-500',
      neutral: 'text-neutral-500',
      white: 'text-white',
    }
  },
  defaultVariants: {
    size: 'md',
    tone: 'brand',
  },
});

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement>, VariantProps<typeof spinnerVariants> {}
