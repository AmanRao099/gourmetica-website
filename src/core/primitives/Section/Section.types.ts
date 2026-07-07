import { cva, type VariantProps } from 'class-variance-authority';
import { BoxProps } from '../Box';

export const sectionVariants = cva('w-full relative', {
  variants: {
    spacing: {
      none: 'py-0',
      sm: 'py-[var(--spacing-section-sm)]',
      md: 'py-[var(--spacing-section-md)]',
      lg: 'py-[var(--spacing-section-lg)]',
      xl: 'py-[var(--spacing-section-xl)]',
    },
    inset: {
      true: 'px-[var(--spacing-section-inset)]',
      false: '',
    }
  },
  defaultVariants: {
    spacing: 'md',
    inset: false,
  },
});

export interface SectionProps extends BoxProps, VariantProps<typeof sectionVariants> {}
