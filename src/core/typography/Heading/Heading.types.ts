import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export const headingVariants = cva('font-mont font-bold text-black dark:text-white tracking-tight', {
  variants: {
    size: {
      'display-xl': 'text-display-xl leading-display-xl tracking-display-xl',
      'display-lg': 'text-display-lg leading-display-lg tracking-display-lg',
      'heading-xl': 'text-heading-xl leading-heading-xl tracking-heading-xl',
      'heading-lg': 'text-heading-lg leading-heading-lg tracking-heading-lg',
      'heading-md': 'text-heading-md leading-heading-md tracking-heading-md',
      'heading-sm': 'text-heading-sm leading-heading-sm tracking-heading-sm',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      black: 'font-black',
    }
  },
  defaultVariants: {
    size: 'heading-xl',
    weight: 'bold',
  },
});

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: React.ElementType;
}
