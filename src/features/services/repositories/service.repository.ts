import { SERVICE_CONTENT_MAP } from '../content';
import type { ServiceSEOEntry } from '../types';

/**
 * Get a single service's SEO metadata by slug.
 * Returns null if the slug doesn't match any service with a detail page.
 */
export function getService(slug: string): ServiceSEOEntry | null {
  return SERVICE_CONTENT_MAP[slug] ?? null;
}

/**
 * Get all services that have detail pages.
 */
export function getAllServices(): ServiceSEOEntry[] {
  return Object.values(SERVICE_CONTENT_MAP);
}

/**
 * Get all slugs for static generation.
 */
export function getServiceSlugs(): string[] {
  return Object.keys(SERVICE_CONTENT_MAP);
}

/**
 * Navigation items for the header dropdown.
 * Services with detail pages link to /services/[slug].
 * Services without detail pages link to /#services.
 */
export function getServiceNavItems(): { title: string; href: string }[] {
  return [
    { title: 'Strategy', href: '/#services' },
    { title: 'Branding', href: '/services/branding' },
    { title: 'Website Design & Development', href: '/services/website-design-development' },
    { title: 'Search Engine Optimisation', href: '/services/search-engine-optimisation' },
    { title: 'Social Media Management', href: '/services/social-media-management' },
    { title: 'Photography', href: '/services/photography' },
    { title: 'Advertising', href: '/services/advertising' },
    { title: 'Email Marketing', href: '/#services' },
    { title: 'Google Business Profile', href: '/#services' },
  ];
}
