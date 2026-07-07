import * as React from 'react';
import { Box } from '../Box';
import { cn } from '@/core/utils';
import { AspectRatioProps } from './AspectRatio.types';

export const AspectRatio = React.forwardRef<HTMLElement, AspectRatioProps>(
  ({ className, ratio = 1, style, children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn("relative w-full overflow-hidden", className)}
        style={{ paddingBottom: `${100 / ratio}%`, ...style }}
        {...props}
      >
        <Box className="absolute inset-0 w-full h-full">
          {children}
        </Box>
      </Box>
    );
  }
);
AspectRatio.displayName = 'AspectRatio';
