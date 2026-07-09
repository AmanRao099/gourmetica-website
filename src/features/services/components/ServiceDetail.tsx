import type { ComponentType } from 'react';
import { notFound } from 'next/navigation';
import { BrandingPage } from '../pages/BrandingPage';
import { WebsiteDesignPage } from '../pages/WebsiteDesignPage';
import { SeoPage } from '../pages/SeoPage';
import { SocialMediaPage } from '../pages/SocialMediaPage';
import { PhotographyPage } from '../pages/PhotographyPage';
import { AdvertisingPage } from '../pages/AdvertisingPage';
import { EmailMarketingPage } from '../pages/EmailMarketingPage';
import { GoogleBusinessProfilePage } from '../pages/GoogleBusinessProfilePage';

const SERVICE_PAGES: Record<string, ComponentType> = {
  branding: BrandingPage,
  'website-design-development': WebsiteDesignPage,
  'search-engine-optimisation': SeoPage,
  'social-media-management': SocialMediaPage,
  photography: PhotographyPage,
  advertising: AdvertisingPage,
  'email-marketing': EmailMarketingPage,
  'google-business-profile-optimisation': GoogleBusinessProfilePage,
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
