import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 font-mont text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-brand-500 text-white shadow hover:bg-brand-600',
        secondary: 'border-transparent bg-brand-100 text-brand-900 hover:bg-brand-200',
        outline: 'text-neutral-900 border-neutral-200',
        success: 'border-transparent bg-success-100 text-success-800',
        warning: 'border-transparent bg-warning-100 text-warning-800',
        danger: 'border-transparent bg-danger-100 text-danger-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}
