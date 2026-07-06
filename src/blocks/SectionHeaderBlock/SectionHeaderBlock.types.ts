import * as React from 'react';

export interface SectionHeaderBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The main large headline of the section. */
  title: string;
  /** A small eyebrow or subtitle above the main title. */
  subtitle?: string;
  /** A paragraph description below the title. */
  description?: string;
  /** Buttons or CTA elements to render alongside the header. */
  actions?: React.ReactNode;
  /** The theme for the header. */
  theme?: 'light' | 'dark';
  /** The text alignment of the header content. */
  alignment?: 'left' | 'center' | 'split';
}
