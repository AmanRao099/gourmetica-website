import { ButtonProps } from '../Button';
import type { LucideIcon } from 'lucide-react';

export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'size'> {
  icon: LucideIcon;
  'aria-label': string; // Force accessibility
}
