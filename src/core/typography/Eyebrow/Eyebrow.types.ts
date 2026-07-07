import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export const eyebrowVariants = cva('font-mont font-bold uppercase tracking-[0.2em]', {
  variants: {
    color: {
      brand: 'text-brand-500',
      neutral: 'text-neutral-500',
    },
    size: {
      sm: 'text-[10px] leading-tight',
      md: 'text-[12px] leading-tight',
    },
  },
  defaultVariants: {
    color: 'brand',
    size: 'md',
  },
});

export interface EyebrowProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>, VariantProps<typeof eyebrowVariants> {
  as?: React.ElementType;
}
