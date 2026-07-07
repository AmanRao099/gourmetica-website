import * as React from 'react';

export interface StatItem {
  /** The descriptive label for the stat. */
  label: string;
  /** The value of the stat. */
  value: string;
}

export interface StatsBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional headline for the block. */
  title?: string;
  /** Optional paragraph description. */
  description?: string;
  /** The list of stats to display. */
  stats: StatItem[];
  /** Theme for the block. */
  theme?: 'light' | 'dark' | 'brand';
  /** The layout orientation. */
  layout?: 'split' | 'inline';
}
