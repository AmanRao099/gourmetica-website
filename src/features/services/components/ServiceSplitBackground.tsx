import type { ReactNode } from 'react';

interface ServiceSplitBackgroundProps {
  children: ReactNode;
}

export function ServiceSplitBackground({ children }: ServiceSplitBackgroundProps) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-white" aria-hidden />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#f7f7f6]" aria-hidden />
      <div className="relative">{children}</div>
    </div>
  );
}
