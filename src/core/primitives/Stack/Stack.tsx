import * as React from 'react';
import { Flex } from '../Flex';
import { StackProps } from './Stack.types';

export const Stack = React.forwardRef<HTMLElement, StackProps>(
  ({ direction = 'col', ...props }, ref) => {
    return <Flex ref={ref} direction={direction} {...props} />;
  }
);
Stack.displayName = 'Stack';
