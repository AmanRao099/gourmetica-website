import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      hasError: {
        true: 'border-danger-500 focus-visible:ring-danger-500',
        false: '',
      },
    },
    defaultVariants: {
      hasError: false,
    },
  }
);

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {}
