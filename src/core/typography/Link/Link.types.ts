import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import type { LinkProps as NextLinkProps } from 'next/link';

export const linkVariants = cva('font-body inline-flex items-center gap-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2', {
  variants: {
    variant: {
      default: 'text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 underline underline-offset-4',
      subtle: 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:underline underline-offset-4',
      nav: 'text-neutral-600 hover:text-brand-600 dark:text-neutral-400 dark:hover:text-brand-400 font-medium',
    },
    size: {
      default: 'text-body',
      sm: 'text-body-sm',
      lg: 'text-body-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>, NextLinkProps, VariantProps<typeof linkVariants> {
  isExternal?: boolean;
}
