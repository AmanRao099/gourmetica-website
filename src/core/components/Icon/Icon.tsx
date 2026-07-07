import * as React from 'react';
import { cn } from '@/core/utils';
import { IconProps, iconVariants } from './Icon.types';

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: LucideIcon, size, className, ...props }, ref) => {
    return (
      <LucideIcon
        ref={ref}
        className={cn(iconVariants({ size }), className)}
        {...props}
      />
    );
  }
);
Icon.displayName = 'Icon';
