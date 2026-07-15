import { cn } from '@/core/utils';

interface ServiceSectionHeadingProps {
  heading: string;
  subtext?: string;
  align?: 'left' | 'center';
}

export function ServiceSectionHeading({ heading, subtext, align = 'left' }: ServiceSectionHeadingProps) {
  return (
    <div className={cn('w-full', align === 'center' && 'flex flex-col items-center text-center')}>
      <h2 className="font-heading font-bold text-black text-[24px] md:text-[30px] lg:text-[37px] leading-[1.3] md:leading-[1.5]">
        {heading}
      </h2>
      {subtext && (
        <p
          className={cn(
            'mt-3 text-[15px] md:text-[16px] leading-[1.7] text-neutral-700',
            align === 'center' ? 'max-w-[700px]' : 'max-w-[820px]'
          )}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
