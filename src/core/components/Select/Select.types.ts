import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

export interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {}
export interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  hasError?: boolean;
}
export interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {}
