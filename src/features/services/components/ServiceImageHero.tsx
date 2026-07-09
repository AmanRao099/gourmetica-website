import { PageContainer } from '@/core/primitives';
import { cn } from '@/core/utils';

interface ServiceImageHeroProps {
  src: string;
  alt: string;
  title: string;
  align?: 'left' | 'center';
}

export function ServiceImageHero({ src, alt, title, align = 'left' }: ServiceImageHeroProps) {
  return (
    <section className="relative w-full h-[420px] md:h-[560px] lg:h-[660px] overflow-hidden bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 flex items-center">
        <PageContainer size="standard" className="w-full">
          <h1
            className={cn(
              'font-heading font-semibold uppercase text-white leading-[1.02] tracking-[-0.01em]',
              'text-[34px] sm:text-[44px] md:text-[58px] lg:text-[72px]',
              align === 'left' ? 'max-w-[780px]' : 'mx-auto max-w-[900px] text-center'
            )}
          >
            {title}
          </h1>
        </PageContainer>
      </div>
    </section>
  );
}
