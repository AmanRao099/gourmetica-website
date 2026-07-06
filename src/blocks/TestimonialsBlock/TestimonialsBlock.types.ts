import * as React from 'react';

export interface TestimonialAuthor {
  /** Name of the person providing the testimonial. */
  name: string;
  /** Role or job title. */
  role?: string;
  /** Company they represent. */
  company?: string;
  /** Avatar image URL. */
  avatar?: string;
}

export interface TestimonialItem {
  /** The testimonial text. */
  quote: string;
  /** The author details. */
  author: TestimonialAuthor;
  /** Rating out of 5. */
  rating?: number;
  /** Optional company logo image URL. */
  companyLogo?: string;
}

export interface TestimonialsBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional headline for the block. */
  title?: string;
  /** Optional eyebrow for the block. */
  subtitle?: string;
  /** Optional paragraph description. */
  description?: string;
  /** The list of testimonials to display. */
  testimonials: TestimonialItem[];
  /** Layout style. 'featured' emphasizes the first item. */
  layout?: 'grid' | 'featured';
  /** Theme for the block. */
  theme?: 'light' | 'dark';
}
