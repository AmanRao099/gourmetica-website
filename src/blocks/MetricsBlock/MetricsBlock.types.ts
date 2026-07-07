import * as React from 'react';

export interface MetricItem {
  /** The descriptive label for the metric (e.g. "Active Users"). */
  label: string;
  /** The large prominent value (e.g. "10M+"). */
  value: string;
  /** Optional secondary description or context for the metric. */
  description?: string;
}

export interface MetricsBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional headline for the block. */
  title?: string;
  /** Optional eyebrow for the block. */
  subtitle?: string;
  /** Optional paragraph description. */
  description?: string;
  /** The list of metrics to display. */
  metrics: MetricItem[];
  /** Theme for the block. */
  theme?: 'light' | 'dark' | 'brand';
  /** How many columns to display on large screens. */
  columns?: 2 | 3 | 4;
}
