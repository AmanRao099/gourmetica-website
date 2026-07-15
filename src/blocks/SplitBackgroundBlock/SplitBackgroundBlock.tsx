import type { ReactNode } from 'react';

interface SplitBackgroundBlockProps {
  children: ReactNode;
}

/** Full-width 50/50 white / light-gray background split, used behind body content on flat, editorial pages. */
export function SplitBackgroundBlock({ children }: SplitBackgroundBlockProps) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-white" aria-hidden />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#f7f7f6]" aria-hidden />
      <div className="relative">{children}</div>
    </div>
  );
}
