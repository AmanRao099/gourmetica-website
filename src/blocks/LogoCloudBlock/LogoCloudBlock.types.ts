import * as React from 'react';

export interface LogoCloudBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional headline above the logos. */
  title?: string;
  /** Optional sub-headline above the logos. */
  subtitle?: string;
  /** An array of logo image sources. */
  logos: Array<{ src: string; alt: string; href?: string }>;
  /** Layout style of the logos. */
  variant?: 'grid' | 'marquee' | 'inline';
}
