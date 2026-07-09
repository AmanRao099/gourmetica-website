import { BoxProps } from '../Box';
import { cva, type VariantProps } from 'class-variance-authority';

export const pageContainerVariants = cva('mx-auto w-full px-8 lg:px-12', {
  variants: {
    size: {
      standard: 'max-w-[1320px]',
      hero: 'max-w-[1440px]',
      wide: 'max-w-[1600px]',
      content: 'max-w-[1320px]',
      narrow: 'max-w-[960px]',
    },
  },
  defaultVariants: {
    size: 'standard',
  },
});

export interface PageContainerProps extends BoxProps, VariantProps<typeof pageContainerVariants> {}
