import type { ServiceSEOEntry } from '../types';

export { brandingContent } from './branding';
export { websiteDesignContent } from './website-design';
export { seoContent } from './seo';
export { socialMediaContent } from './social-media';
export { photographyContent } from './photography';
export { advertisingContent } from './advertising';
export { emailMarketingContent } from './email-marketing';
export { googleBusinessProfileContent } from './google-business-profile';

import { brandingContent } from './branding';
import { websiteDesignContent } from './website-design';
import { seoContent } from './seo';
import { socialMediaContent } from './social-media';
import { photographyContent } from './photography';
import { advertisingContent } from './advertising';
import { emailMarketingContent } from './email-marketing';
import { googleBusinessProfileContent } from './google-business-profile';

/** All service SEO entries, ordered as they appear in navigation. */
const ALL_CONTENT: ServiceSEOEntry[] = [
  brandingContent,
  websiteDesignContent,
  seoContent,
  socialMediaContent,
  photographyContent,
  advertisingContent,
  emailMarketingContent,
  googleBusinessProfileContent,
];

/** Slug → ServiceSEOEntry lookup map. */
export const SERVICE_CONTENT_MAP: Record<string, ServiceSEOEntry> = Object.fromEntries(
  ALL_CONTENT.map((s) => [s.slug, s])
);
