import * as React from 'react';

export interface HeroBlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** The main large headline of the hero. */
  title: React.ReactNode;
  /** A small eyebrow or subtitle above the main title. */
  subtitle?: string;
  /** A paragraph description below the title. */
  description?: string;
  /** Buttons or CTA elements to render below the description. */
  actions?: React.ReactNode;
  /** The media content (Image, Video, etc.) to render alongside or behind the hero. */
  media?: React.ReactNode;
  /** The layout variant of the hero. */
  variant?: 'video' | 'image' | 'minimal' | 'split';
  /** The theme for the hero. */
  theme?: 'light' | 'dark';
  /** The text alignment of the hero content. */
  alignment?: 'left' | 'center';
}
