import type { ServiceContent } from '../types';

export { brandingContent } from './branding';
export { websiteDesignContent } from './website-design';
export { seoContent } from './seo';
export { socialMediaContent } from './social-media';
export { photographyContent } from './photography';
export { advertisingContent } from './advertising';

import { brandingContent } from './branding';
import { websiteDesignContent } from './website-design';
import { seoContent } from './seo';
import { socialMediaContent } from './social-media';
import { photographyContent } from './photography';
import { advertisingContent } from './advertising';

/** All service content objects, ordered as they appear in navigation. */
const ALL_CONTENT: ServiceContent[] = [
  brandingContent,
  websiteDesignContent,
  seoContent,
  socialMediaContent,
  photographyContent,
  advertisingContent,
];

/** Slug → ServiceContent lookup map. */
export const SERVICE_CONTENT_MAP: Record<string, ServiceContent> = Object.fromEntries(
  ALL_CONTENT.map((s) => [s.slug, s])
);
