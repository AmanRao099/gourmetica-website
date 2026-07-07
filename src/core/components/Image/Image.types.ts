import type { ImageProps as NextImageProps } from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';

export const imageVariants = cva(
  'object-cover',
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
        square: 'aspect-square',
        video: 'aspect-video',
        portrait: 'aspect-[3/4]',
        landscape: 'aspect-[4/3]',
      },
    },
    defaultVariants: {
      radius: 'none',
      aspectRatio: 'auto',
    },
  }
);

export interface ImageProps extends Omit<NextImageProps, 'alt'>, VariantProps<typeof imageVariants> {
  alt: string; // Force required alt text for accessibility
}
