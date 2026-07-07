import type { LucideIcon } from 'lucide-react';

export interface ServiceHero {
  title: string;
  subtitle: string;
  banner: string;
  alt: string;
}

export interface ServiceFeature {
  icon?: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceCTA {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface ServiceSEO {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export interface ServiceContent {
  slug: string;
  hero: ServiceHero;
  intro: {
    heading?: string;
    paragraphs: string[];
  };
  features: ServiceFeature[];
  cta: ServiceCTA;
  seo: ServiceSEO;
}
