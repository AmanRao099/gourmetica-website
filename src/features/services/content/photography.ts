import type { ServiceContent } from '../types';

export const photographyContent: ServiceContent = {
  slug: 'photography',
  hero: {
    title: 'Photography',
    subtitle: 'It\u2019s all about presentation. Create images of your cuisine to entice customers',
    banner: '/images/services/Photography.png',
    alt: 'Gourmetica Photography Service',
  },
  intro: {
    paragraphs: [
      'Our photography service as a marketing agency goes beyond capturing stunning visuals; we expertly craft compelling narratives through our lens, creating impactful imagery that elevates your brand, engages your audience, and drives meaningful connections that lead to increased brand recognition and business growth.',
    ],
  },
  features: [
    {
      title: 'Product Photography',
      description: 'Express that your brand is more than food and location by displaying all of your offerings creatively.',
    },
    {
      title: 'Interior Photography',
      description: 'Invite your customers into your space by showing off the atmosphere of your business.',
    },
    {
      title: 'Cinemagraphs',
      description: 'Experience the perfect fusion of visual enchantment, captivating your customers with dynamic imagery that mesmerizes their senses.',
    },
    {
      title: 'Virtual Tours',
      description: 'Immerse customers in the enticing experience of your busines by enticing them to step inside and guiding them on a captivating journey throughout your welcoming establishment.',
    },
  ],
  cta: {
    title: 'Ready to Elevate Your Visuals?',
    description: 'Let\u2019s create stunning imagery that tells your brand story.',
    primaryLabel: 'Get In Touch',
    primaryHref: '/getintouch',
    secondaryLabel: 'View Our Work',
    secondaryHref: '/results',
  },
  seo: {
    title: 'Photography Services | Gourmetica',
    description: 'Professional photography that tells your story, elevates your brand and creates compelling visual content.',
    ogImage: '/images/services/Photography.png',
  },
};
