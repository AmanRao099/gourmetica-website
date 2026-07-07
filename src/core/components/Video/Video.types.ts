import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export const videoVariants = cva(
  'object-cover overflow-hidden bg-neutral-100',
  {
    variants: {
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      aspectRatio: {
        auto: 'aspect-auto',
        video: 'aspect-video',
        square: 'aspect-square',
      },
    },
    defaultVariants: {
      radius: 'md',
      aspectRatio: 'video',
    },
  }
);

export interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement>, VariantProps<typeof videoVariants> {}
