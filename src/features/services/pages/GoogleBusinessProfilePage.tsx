import { PageContainer } from '@/core/primitives';
import { ServiceLayout } from '../layouts/ServiceLayout';
import { ServiceTextHero } from '../components/ServiceTextHero';
import { SplitBackgroundBlock } from '@/blocks';
import { ServiceBodyText } from '../components/ServiceBodyText';

const PARAGRAPHS = [
  'We optimise your Google Business Profile to improve local rankings, increase visibility and attract more enquiries. From profile management and local SEO to reviews and performance optimisation, we help your business stand out where customers are searching.',
];

export function GoogleBusinessProfilePage() {
  return (
    <ServiceLayout>
      <ServiceTextHero
        title="Google Business Profile Optimisation"
        subtitle="Being on Google isn't enough—being visible is what matters."
        size="lg"
      />
      <SplitBackgroundBlock>
        <PageContainer size="standard" className="pb-[100px] md:pb-[140px]">
          <ServiceBodyText paragraphs={PARAGRAPHS} />
        </PageContainer>
      </SplitBackgroundBlock>
    </ServiceLayout>
  );
}
