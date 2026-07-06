import { BoxProps } from '../Box';
import { cva, type VariantProps } from 'class-variance-authority';

export const surfaceVariants = cva('overflow-hidden', {
  variants: {
    variant: {
      default: 'bg-white',
      card: 'bg-white border border-neutral-200 shadow-sm rounded-lg',
      elevated: 'bg-white shadow-lg rounded-xl',
      interactive: 'bg-white border border-neutral-200 shadow-sm rounded-lg hover:shadow-md hover:border-neutral-300 transition-all duration-200 cursor-pointer',
      glass: 'bg-white/70 backdrop-blur-md border border-white/20 shadow-sm rounded-xl',
      dark: 'bg-neutral-900 text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface SurfaceProps extends BoxProps, VariantProps<typeof surfaceVariants> {}
