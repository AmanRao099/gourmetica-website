import type { ComponentType } from 'react';
import { notFound } from 'next/navigation';
import { BrandingPage } from '../pages/BrandingPage';
import { WebsiteDesignPage } from '../pages/WebsiteDesignPage';
import { SeoPage } from '../pages/SeoPage';
import { SocialMediaPage } from '../pages/SocialMediaPage';
import { PhotographyPage } from '../pages/PhotographyPage';
import { AdvertisingPage } from '../pages/AdvertisingPage';

const SERVICE_PAGES: Record<string, ComponentType> = {
  branding: BrandingPage,
  'website-design-development': WebsiteDesignPage,
  'search-engine-optimisation': SeoPage,
  'social-media-management': SocialMediaPage,
  photography: PhotographyPage,
  advertising: AdvertisingPage,
};

interface ServiceDetailProps {
  slug: string;
}

export function ServiceDetail({ slug }: ServiceDetailProps) {
  const Page = SERVICE_PAGES[slug];
  if (!Page) {
    notFound();
  }
  return <Page />;
}
