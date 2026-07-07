import type { ServiceContent } from '../types';

export const advertisingContent: ServiceContent = {
  slug: 'advertising',
  hero: {
    title: 'Advertising',
    subtitle: 'Performance-driven advertising that delivers measurable growth.',
    banner: '/images/services/Advertising.png',
    alt: 'Gourmetica Advertising Service',
  },
  intro: {
    heading: 'ADVERTISING',
    paragraphs: [
      'From Google Ads and Meta campaigns to remarketing and conversion optimisation, we help businesses reach the right audience, reduce wasted spend and generate real business results.',
      'Our marketing wizards have honed the skill of irresistible allure through our advertising prowess. Allow us to assist you in pinpointing your ideal audience precisely when they are primed to be captivated, igniting a love affair from the very first glimpse. Whether it\u2019s retargeting, display ads, influencer marketing, PPC ads, or an array of other dynamic techniques, we possess the perfect arsenal of tools to entice new customers and propel your business to unprecedented heights.',
    ],
  },
  features: [
    {
      title: 'Display Advertising',
      description: 'Get more than just a glance and help customers visualize your business through effective image.',
    },
    {
      title: '(SEM) Search Engine Marketing',
      description: 'Make sure your ads are present when a customer is searching.',
    },
    {
      title: 'Video Marketing',
      description: 'Invite customers to see themselves inside of your business with video ads.',
    },
    {
      title: 'Retargeting',
      description: 'Ensure that your advertisements have left a lasting impact and occupy.',
    },
  ],
  cta: {
    title: 'Ready to Drive Results?',
    description: 'Let\u2019s create advertising campaigns that deliver measurable growth.',
    primaryLabel: 'Get In Touch',
    primaryHref: '/getintouch',
    secondaryLabel: 'View Our Work',
    secondaryHref: '/results',
  },
  seo: {
    title: 'Advertising Services | Gourmetica',
    description: 'Performance-driven advertising from Google Ads and Meta campaigns to remarketing and conversion optimisation.',
    ogImage: '/images/services/Advertising.png',
  },
};
