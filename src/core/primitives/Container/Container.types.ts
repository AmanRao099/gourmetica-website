import { BoxProps } from '../Box';
import { cva, type VariantProps } from 'class-variance-authority';

export const containerVariants = cva('mx-auto w-full px-4 md:px-8', {
  variants: {
    size: {
      narrow: 'max-w-3xl',
      content: 'max-w-5xl',
      wide: 'max-w-[1346px]',
      full: 'max-w-none',
    },
  },
  defaultVariants: {
    size: 'wide',
  },
});

export interface ContainerProps extends BoxProps, VariantProps<typeof containerVariants> {}
