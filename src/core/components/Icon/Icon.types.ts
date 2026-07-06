import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import * as React from 'react';

export const iconVariants = cva('shrink-0', {
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface IconProps extends React.SVGAttributes<SVGElement>, VariantProps<typeof iconVariants> {
  icon: LucideIcon;
}
