import { PageContainer } from '@/core/primitives';
import { ServiceLayout } from '../layouts/ServiceLayout';
import { ServiceImageHero } from '../components/ServiceImageHero';
import { ServiceSplitBackground } from '../components/ServiceSplitBackground';
import { ServiceFeatureListGrid } from '../components/ServiceFeatureListGrid';

const FEATURES = [
  {
    icon: '/images/services-ref/website-design/web1.png',
    title: 'Custom Design',
    description:
      'Embrace the uniqueness of your brand by opting for bespoke website designs that are carefully crafted to reinforce and showcase your brand identity, ensuring a seamless alignment with your overall marketing objectives.',
  },
  {
    icon: '/images/services-ref/website-design/web2.png',
    title: 'WordPress Backend',
    description: 'Proven technology to keep the backend of your website simple and accessible.',
  },
  {
    icon: '/images/services-ref/website-design/web3.png',
    title: 'Responsive Design',
    description: 'Your business website design will connect with customers wherever they go, on whatever device they choose. Flawlessly.',
  },
  {
    icon: '/images/services-ref/website-design/web4.png',
    title: 'Search Engine Optimized',
    description: 'For most businesses today, SEO is the highest ROI marketing effort',
  },
  {
    icon: '/images/services-ref/website-design/web5.png',
    title: 'Local Search Optimized',
    description: 'LSO is a must for businesses that want to be found by customers searching in their area.',
  },
];

export function WebsiteDesignPage() {
  return (
    <ServiceLayout>
      <ServiceImageHero
        src="/images/services-ref/website-design/webdevDesigning.jpg"
        alt="Website design and development workspace"
        title="Website Design and Development"
        align="left"
      />
      <ServiceSplitBackground>
        <PageContainer size="standard" className="py-[70px] md:py-[110px]">
          <ServiceFeatureListGrid features={FEATURES} />
        </PageContainer>
      </ServiceSplitBackground>
    </ServiceLayout>
  );
}
