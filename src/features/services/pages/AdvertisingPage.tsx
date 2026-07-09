import Link from 'next/link';
import { PageContainer } from '@/core/primitives';
import { ServiceLayout } from '../layouts/ServiceLayout';
import { ServiceTextHero } from '../components/ServiceTextHero';
import { ServiceSplitBackground } from '../components/ServiceSplitBackground';
import { ServiceBodyText } from '../components/ServiceBodyText';
import { ServiceBodyImage } from '../components/ServiceBodyImage';
import { ServiceFeatureListGrid } from '../components/ServiceFeatureListGrid';

const PARAGRAPHS = [
  "Our marketing wizards have honed the skill of irresistible allure through our advertising prowess. Allow us to assist you in pinpointing your ideal audience precisely when they are primed to be captivated, igniting a love affair from the very first glimpse. Whether it's retargeting, display ads, influencer marketing, PPC ads, or an array of other dynamic techniques, we possess the perfect arsenal of tools to entice new customers and propel your business to unprecedented heights.",
];

const FEATURES = [
  {
    icon: '/images/services-ref/advertising/adver1.png',
    title: 'Display Advertising',
    description: 'Get more than just a glance and help customers visualize your business through effective image.',
  },
  {
    icon: '/images/services-ref/advertising/adver2.png',
    title: '(SEM) Search Engine Marketing',
    description: 'Make sure your ads are present when a customer is searching.',
  },
  {
    icon: '/images/services-ref/advertising/adver3.png',
    title: 'Video Marketing',
    description: 'Invite customers to see themselves inside of your business with video ads.',
  },
  {
    icon: '/images/services-ref/advertising/adver4.png',
    title: 'Retargeting',
    description: 'Ensure that your advertisements have left a lasting impact and occupy.',
  },
];

export function AdvertisingPage() {
  return (
    <ServiceLayout>
      <ServiceTextHero title="Advertising" size="xl" />
      <ServiceSplitBackground>
        <PageContainer size="standard" className="pb-[50px] md:pb-[60px]">
          <ServiceBodyText paragraphs={PARAGRAPHS} />
        </PageContainer>
        <PageContainer size="standard" className="pb-[60px] md:pb-[80px]">
          <ServiceBodyImage
            src="/images/services-ref/advertising/advertistbg3.jpg"
            alt="Restaurant marketing spend illustration"
            maxWidth={620}
          />
        </PageContainer>
        <PageContainer size="standard" className="pb-[60px] md:pb-[90px]">
          <ServiceFeatureListGrid features={FEATURES} />
        </PageContainer>
        <PageContainer size="standard" className="pb-[100px] md:pb-[140px] text-center">
          <p className="text-[15px] md:text-[16px] text-black">
            Learn more about our{' '}
            <Link href="/#services" className="text-[#e8503a] font-semibold hover:underline">
              Restaurant Marketing
            </Link>{' '}
            services.
          </p>
        </PageContainer>
      </ServiceSplitBackground>
    </ServiceLayout>
  );
}
