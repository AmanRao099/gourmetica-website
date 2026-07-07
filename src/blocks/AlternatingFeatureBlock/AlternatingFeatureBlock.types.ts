import * as React from 'react';

export interface AlternatingFeatureItem {
  /** Title of the specific feature. */
  title: string;
  /** Eyebrow or subtitle for the specific feature. */
  subtitle?: string;
  /** Description for the specific feature. */
  description: string;
  /** Media (Image or Video) to display alongside the feature. */
  media: React.ReactNode;
  /** Call to action buttons for the specific feature. */
  actions?: React.ReactNode;
}

export interface AlternatingFeatureBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional headline for the entire block. */
  title?: string;
  /** Optional eyebrow for the entire block. */
  subtitle?: string;
  /** Optional description for the entire block. */
  description?: string;
  /** The list of features to alternate. */
  features: AlternatingFeatureItem[];
  /** Theme for the block. */
  theme?: 'light' | 'dark';
}
