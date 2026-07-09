import { PageContainer } from '@/core/primitives';
import { ServiceLayout } from '../layouts/ServiceLayout';
import { ServiceTextHero } from '../components/ServiceTextHero';
import { SplitBackgroundBlock } from '@/blocks';
import { ServiceBodyText } from '../components/ServiceBodyText';

const PARAGRAPHS = [
  'From automated journeys and newsletters to personalised campaigns, we help businesses increase repeat purchases, improve customer retention and build lasting relationships through data-driven email marketing.',
];

export function EmailMarketingPage() {
  return (
    <ServiceLayout>
      <ServiceTextHero
        title="Email Marketing"
        subtitle="Stay connected with the customers who already know your brand."
        size="xl"
      />
      <SplitBackgroundBlock>
        <PageContainer size="standard" className="pb-[100px] md:pb-[140px]">
          <ServiceBodyText paragraphs={PARAGRAPHS} />
        </PageContainer>
      </SplitBackgroundBlock>
    </ServiceLayout>
  );
}
