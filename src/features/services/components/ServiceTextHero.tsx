import { PageContainer } from '@/core/primitives';
import { cn } from '@/core/utils';

interface ServiceTextHeroProps {
  title: string;
  subtitle?: string;
  /** xl = 64px/600 (short titles, e.g. Branding, Advertising). lg = 37px/700 (longer titles, e.g. SEO). */
  size?: 'xl' | 'lg';
}

export function ServiceTextHero({ title, subtitle, size = 'xl' }: ServiceTextHeroProps) {
  return (
    <section className="w-full bg-white pt-[110px] pb-[60px] md:pt-[140px] md:pb-[70px]">
      <PageContainer size="standard" className="flex flex-col items-center text-center">
        <h1
          className={cn(
            'font-heading uppercase text-black',
            size === 'xl'
              ? 'text-[40px] md:text-[56px] lg:text-[64px] font-semibold leading-[0.95] tracking-[-0.02em] max-w-[720px]'
              : 'text-[28px] md:text-[33px] lg:text-[37px] font-bold leading-[1.3] md:leading-[1.5] max-w-[1150px]'
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-[16px] md:text-[18px] leading-[1.7] text-neutral-600 max-w-[700px]">
            {subtitle}
          </p>
        )}
      </PageContainer>
    </section>
  );
}
