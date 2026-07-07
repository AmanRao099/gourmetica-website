"use client";

import Link from 'next/link';
import { PageContainer } from '@/core/primitives';
import { getServiceSlugs, getService } from '../repositories/service.repository';

interface ServicePaginationProps {
  currentSlug: string;
}

export function ServicePagination({ currentSlug }: ServicePaginationProps) {
  const slugs = getServiceSlugs();
  const currentIndex = slugs.indexOf(currentSlug);

  const prevIndex = (currentIndex - 1 + slugs.length) % slugs.length;
  const nextIndex = (currentIndex + 1) % slugs.length;

  const prevService = getService(slugs[prevIndex] || '');
  const nextService = getService(slugs[nextIndex] || '');

  if (!prevService || !nextService) return null;

  return (
    <section className="w-full py-16 bg-warm-white border-t border-neutral-100">
      <PageContainer size="content">
        <div className="flex justify-between items-center gap-6">
          {/* Previous Page */}
          <Link href={`/services/${prevService.slug}`} className="group flex flex-col text-left">
            <span
              className="text-neutral-400 font-heading font-semibold uppercase tracking-[0.1em] mb-1.5 transition-colors group-hover:text-[#E42528]"
              style={{ fontSize: '12px' }}
            >
              ← Previous
            </span>
            <span className="font-heading font-bold text-neutral-700 text-lg transition-colors group-hover:text-neutral-950">
              {prevService.hero.title}
            </span>
          </Link>

          {/* Divider line */}
          <div className="h-8 w-[1px] bg-neutral-200 hidden sm:block" />

          {/* Next Page */}
          <Link href={`/services/${nextService.slug}`} className="group flex flex-col text-right">
            <span
              className="text-neutral-400 font-heading font-semibold uppercase tracking-[0.1em] mb-1.5 transition-colors group-hover:text-[#E42528]"
              style={{ fontSize: '12px' }}
            >
              Next →
            </span>
            <span className="font-heading font-bold text-neutral-700 text-lg transition-colors group-hover:text-neutral-950">
              {nextService.hero.title}
            </span>
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
