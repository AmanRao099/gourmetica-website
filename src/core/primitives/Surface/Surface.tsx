import * as React from 'react';
import { Box } from '../Box';
import { cn } from '@/core/utils';
import { SurfaceProps, surfaceVariants } from './Surface.types';

export const Surface = React.forwardRef<HTMLElement, SurfaceProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(surfaceVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Surface.displayName = 'Surface';

export const CardSurface = React.forwardRef<HTMLElement, Omit<SurfaceProps, 'variant'>>(
  (props, ref) => <Surface ref={ref} variant="card" {...props} />
);
CardSurface.displayName = 'CardSurface';

export const ElevatedSurface = React.forwardRef<HTMLElement, Omit<SurfaceProps, 'variant'>>(
  (props, ref) => <Surface ref={ref} variant="elevated" {...props} />
);
ElevatedSurface.displayName = 'ElevatedSurface';

export const InteractiveSurface = React.forwardRef<HTMLElement, Omit<SurfaceProps, 'variant'>>(
  (props, ref) => <Surface ref={ref} variant="interactive" {...props} />
);
InteractiveSurface.displayName = 'InteractiveSurface';

export const GlassSurface = React.forwardRef<HTMLElement, Omit<SurfaceProps, 'variant'>>(
  (props, ref) => <Surface ref={ref} variant="glass" {...props} />
);
GlassSurface.displayName = 'GlassSurface';
