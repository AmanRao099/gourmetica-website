"use client";

import { ServiceHero } from './ServiceHero';
import { ServiceIntro } from './ServiceIntro';
import { ServiceImage } from './ServiceImage';
import { ServiceFeatureGrid } from './ServiceFeatureGrid';
import { ServiceTimeline } from './ServiceTimeline';
import { ServicePagination } from './ServicePagination';
import { ServiceCTA } from './ServiceCTA';
import { ServiceLayout } from '../layouts/ServiceLayout';
import type { ServiceContent } from '../types';

// Map alternating images per service to maintain premium visual flow
const SERVICE_VISUAL_MAP: Record<string, { fullWidth: string; largeVisual: string }> = {
  branding: {
    fullWidth: '/images/banner/OttoNewBackground.jpg',
    largeVisual: '/images/banner/LizzNewBg.jpg',
  },
  'website-design-development': {
    fullWidth: '/images/banner/OttoKichenMain-min-min.jpg',
    largeVisual: '/images/banner/mysanewbackground.jpg',
  },
  'search-engine-optimisation': {
    fullWidth: '/images/banner/bglimannew.jpg',
    largeVisual: '/images/banner/sevices2.jpg',
  },
  'social-media-management': {
    fullWidth: '/images/banner/RustiqMain-min-min.jpg',
    largeVisual: '/images/banner/PiyazMain-min-min.jpg',
  },
  photography: {
    fullWidth: '/images/banner/No5Main-min-min.jpg',
    largeVisual: '/images/banner/sevices2.jpg',
  },
  advertising: {
    fullWidth: '/images/banner/halal-guys-restaurant-website-design-case-study-slide.jpg',
    largeVisual: '/images/banner/No5NewBg.jpg',
  },
};

interface ServiceDetailProps {
  content: ServiceContent;
}

export function ServiceDetail({ content }: ServiceDetailProps) {
  const visuals = SERVICE_VISUAL_MAP[content.slug] || {
    fullWidth: '/images/banner/sevices2.jpg',
    largeVisual: '/images/banner/sevices2.jpg',
  };

  return (
    <ServiceLayout>
      {/* 1. Hero Block (65vh limit, centered) */}
      <ServiceHero hero={content.hero} />

      {/* 2. Editorial Introduction (38% / 62% layout, 44ch limit) */}
      <ServiceIntro
        heading={content.intro.heading}
        paragraphs={content.intro.paragraphs}
      />

      {/* 3. Full Width Image (32px radius, clip reveal, priority load) */}
      <ServiceImage
        src={visuals.fullWidth}
        alt={`${content.hero.title} Overview`}
        priority={true}
      />

      {/* 4. Capabilities (2-Column minimal grid, visual Learn More links) */}
      <ServiceFeatureGrid features={content.features} />

      {/* 5. Large Visual (32px radius, clip reveal, lazy load) */}
      <ServiceImage
        src={visuals.largeVisual}
        alt={`${content.hero.title} Showcase`}
        priority={false}
      />

      {/* 6. Process (Horizontal Discover ── Strategy ── Create ── Grow timeline) */}
      <ServiceTimeline />

      {/* 7. Pagination (Minimalist Apple-style Previous / Next navigation) */}
      <ServicePagination currentSlug={content.slug} />

      {/* 8. CTA & Divider (140px vertical spacing, approved client text) */}
      <ServiceCTA />
    </ServiceLayout>
  );
}
