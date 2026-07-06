import { BoxProps } from '../Box';
import { cva, type VariantProps } from 'class-variance-authority';

export const gridVariants = cva('grid', {
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      12: 'grid-cols-12',
    },
    gap: {
      none: 'gap-0',
      sm: 'gap-4',
      md: 'gap-8',
      lg: 'gap-12',
      xl: 'gap-16',
    },
  },
  defaultVariants: {
    columns: 1,
    gap: 'md',
  },
});

export interface GridProps extends BoxProps, VariantProps<typeof gridVariants> {}
