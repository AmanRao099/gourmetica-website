import * as React from 'react';
import { cn } from '@/core/utils';
import { VideoProps, videoVariants } from './Video.types';

export const Video = React.forwardRef<HTMLVideoElement, VideoProps>(
  ({ className, radius, aspectRatio, children, ...props }, ref) => {
    return (
      <video
        ref={ref}
        className={cn(videoVariants({ radius, aspectRatio }), className)}
        {...props}
      >
        {children}
        Your browser does not support the video tag.
      </video>
    );
  }
);
Video.displayName = "Video";
