import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';


export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand-500 text-white hover:bg-brand-600 shadow-sm',
        secondary: 'bg-brand-100 text-brand-900 hover:bg-brand-200',
        outline: 'border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900',
        ghost: 'hover:bg-neutral-100 hover:text-neutral-900',
        link: 'text-brand-500 underline-offset-4 hover:underline',
      },
      tone: {
        brand: '',
        neutral: '',
        success: '',
        warning: '',
        danger: '',
      },
      size: {
        xs: 'h-7 px-2 text-xs',
        sm: 'h-9 px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
        xl: 'h-14 px-10 text-base',
        icon: 'h-10 w-10',
      },
    },
    compoundVariants: [
      // Danger Tone Overrides
      { variant: 'primary', tone: 'danger', className: 'bg-danger-500 text-white hover:bg-danger-600 focus-visible:ring-danger-500' },
      { variant: 'secondary', tone: 'danger', className: 'bg-danger-100 text-danger-900 hover:bg-danger-200' },
      { variant: 'outline', tone: 'danger', className: 'border-danger-200 text-danger-600 hover:bg-danger-50' },
      { variant: 'ghost', tone: 'danger', className: 'text-danger-600 hover:bg-danger-50 hover:text-danger-700' },
      
      // Neutral Tone Overrides
      { variant: 'primary', tone: 'neutral', className: 'bg-neutral-900 text-white hover:bg-neutral-800' },
      { variant: 'secondary', tone: 'neutral', className: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200' },
    ],
    defaultVariants: {
      variant: 'primary',
      tone: 'brand',
      size: 'md',
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
