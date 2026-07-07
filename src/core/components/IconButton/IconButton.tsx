import * as React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { IconButtonProps } from './IconButton.types';

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, 'aria-label': ariaLabel, variant, tone, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size="icon"
        variant={variant}
        tone={tone}
        className={className}
        aria-label={ariaLabel}
        {...props}
      >
        <Icon icon={icon} size="md" />
      </Button>
    );
  }
);
IconButton.displayName = "IconButton";
