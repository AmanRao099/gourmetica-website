import * as React from 'react';
import NextImage from 'next/image';
import { cn } from '@/core/utils';
import { ImageProps, imageVariants } from './Image.types';

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, radius, aspectRatio, alt, ...props }, ref) => {
    return (
      <NextImage
        ref={ref}
        alt={alt}
        className={cn(imageVariants({ radius, aspectRatio }), className)}
        {...props}
      />
    );
  }
);
Image.displayName = "Image";
