import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export const textVariants = cva('font-body text-neutral-800 dark:text-neutral-200 max-w-[62ch] leading-relaxed', {
  variants: {
    size: {
      'body-xl': 'text-body-xl leading-body-xl tracking-body-xl',
      'body-lg': 'text-body-lg leading-body-lg tracking-body-lg',
      'body': 'text-body leading-body tracking-body',
      'body-sm': 'text-body-sm leading-body-sm tracking-body-sm',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    }
  },
  defaultVariants: {
    size: 'body',
    weight: 'normal',
    align: 'left',
  },
});

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
  as?: React.ElementType;
}
