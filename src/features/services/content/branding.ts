import type { ServiceContent } from '../types';

export const brandingContent: ServiceContent = {
  slug: 'branding',
  hero: {
    title: 'Branding',
    subtitle: 'Your brand is more than a logo.',
    banner: '/images/services/Branding.png',
    alt: 'Gourmetica Branding Service',
  },
  intro: {
    paragraphs: [
      'We create memorable brands through strategy, design and storytelling—helping businesses build trust, stand out and create lasting connections with their audience.',
    ],
  },
  features: [
    {
      title: 'Logo Design',
      description: 'Create a distinctive logo that reflects your brand identity and leaves a lasting impression.',
    },
    {
      title: 'Brand Identity',
      description: 'Develop a consistent visual identity across every customer touchpoint.',
    },
    {
      title: 'Print & Marketing Collateral',
      description: 'Professional brochures, menus, business cards and printed materials designed to strengthen your brand.',
    },
    {
      title: 'Signage & Interior Design',
      description: 'Extend your brand beyond digital with signage and interior concepts that create memorable customer experiences.',
    },
  ],
  cta: {
    title: 'Ready to Build Your Brand?',
    description: 'Let\u2019s create a brand identity that stands out and drives lasting growth.',
    primaryLabel: 'Get In Touch',
    primaryHref: '/getintouch',
    secondaryLabel: 'View Our Work',
    secondaryHref: '/results',
  },
  seo: {
    title: 'Branding Services | Gourmetica',
    description: 'We create memorable brands through strategy, design and storytelling—helping businesses build trust, stand out and create lasting connections with their audience.',
    ogImage: '/images/services/Branding.png',
  },
};
