import type { ReactNode } from 'react';

interface ServiceFeatureItem {
  icon: string | ReactNode;
  title: string;
  description: string;
}

interface ServiceFeatureListGridProps {
  features: ServiceFeatureItem[];
}

export function ServiceFeatureListGrid({ features }: ServiceFeatureListGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-12 md:gap-y-20">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-heading font-bold text-black text-[17px] md:text-[18px] mb-2">
              {feature.title}
            </h3>
            <p className="text-[14px] md:text-[15px] leading-[1.65] text-neutral-700 max-w-[420px]">
              {feature.description}
            </p>
          </div>
          {typeof feature.icon === 'string' ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={feature.icon}
              alt=""
              className="w-[42px] h-[42px] md:w-[50px] md:h-[50px] object-contain flex-shrink-0"
            />
          ) : (
            <div className="w-[42px] h-[42px] md:w-[50px] md:h-[50px] flex items-center justify-center flex-shrink-0 text-neutral-800">
              {feature.icon}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
