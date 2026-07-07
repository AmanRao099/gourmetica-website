import * as React from 'react';

export interface CTASectionBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The main large headline of the CTA section. */
  title: string;
  /** A small eyebrow or subtitle above the main title. */
  subtitle?: string;
  /** A paragraph description below the title. */
  description?: string;
  /** Buttons or CTA elements. */
  actions?: React.ReactNode;
  /** The theme for the CTA. */
  theme?: 'light' | 'dark' | 'brand';
  /** The layout variant of the CTA. */
  variant?: 'centered' | 'split' | 'banner';
}
