import * as React from 'react';
import NextLink from 'next/link';
import { cn } from '@/core/utils';
import { LinkProps, linkVariants } from './Link.types';

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, isExternal, href, children, ...props }, ref) => {
    const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    
    // If it's explicitly external or starts with http, we can use a standard anchor
    const isActuallyExternal = isExternal || (typeof href === 'string' && href.startsWith('http'));

    if (isActuallyExternal) {
      return (
        <a
          ref={ref}
          href={href.toString()}
          className={cn(linkVariants({ variant, size }), className)}
          {...externalProps}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink
        ref={ref}
        href={href}
        className={cn(linkVariants({ variant, size }), className)}
        {...externalProps}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);
Link.displayName = 'Link';
