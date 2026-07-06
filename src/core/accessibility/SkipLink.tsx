import React from 'react';
import { cn } from '@/core/utils';

interface SkipLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  targetId: string;
}

export const SkipLink = React.forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ targetId, className, children = 'Skip to main content', ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={`#${targetId}`}
        className={cn(
          "absolute top-0 left-0 -translate-y-full px-4 py-3 bg-black text-white focus:translate-y-0 transition-transform duration-200 z-[9999]",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);
SkipLink.displayName = 'SkipLink';
