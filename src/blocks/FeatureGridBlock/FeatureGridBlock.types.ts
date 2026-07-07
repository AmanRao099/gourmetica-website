import * as React from 'react';
import type { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
}

export interface FeatureGridBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional headline for the feature grid. */
  title?: string;
  /** Optional eyebrow or subtitle above the main title. */
  subtitle?: string;
  /** Optional paragraph description below the title. */
  description?: string;
  /** The list of features to display in the grid. */
  features: FeatureItem[];
  /** How many columns to display on large screens. */
  columns?: 2 | 3 | 4;
  /** Theme for the block. */
  theme?: 'light' | 'dark';
  /** Visual style variant. */
  variant?: 'cards' | 'minimal';
}
