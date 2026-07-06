import { FlexProps } from '@/core/primitives';

export interface ButtonGroupProps extends Omit<FlexProps, 'gap'> {
  orientation?: 'horizontal' | 'vertical';
}
