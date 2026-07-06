import * as React from 'react';
import { Flex } from '@/core/primitives';
import { cn } from '@/core/utils';
import { ButtonGroupProps } from './ButtonGroup.types';

export const ButtonGroup = React.forwardRef<HTMLElement, ButtonGroupProps>(
  ({ className, orientation = 'horizontal', children, ...props }, ref) => {
    const isHorizontal = orientation === 'horizontal';
    
    return (
      <Flex
        ref={ref}
        direction={isHorizontal ? 'row' : 'col'}
        className={cn(
          "inline-flex",
          isHorizontal 
            ? "-space-x-px [&>button:first-child]:rounded-r-none [&>button:last-child]:rounded-l-none [&>button:not(:first-child):not(:last-child)]:rounded-none"
            : "-space-y-px [&>button:first-child]:rounded-b-none [&>button:last-child]:rounded-t-none [&>button:not(:first-child):not(:last-child)]:rounded-none",
          className
        )}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";
