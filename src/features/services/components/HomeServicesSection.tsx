"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { motionTokens } from '../motion.tokens';
import { SERVICES } from '@/constants/services';

const SERVICES_WITH_PAGES = [
  'Branding',
  'Website Design & Development',
  'Search Engine Optimisation (SEO)',
  'Social Media Management',
  'Photography',
  'Advertising',
];

const SERVICE_SLUGS: Record<string, string> = {
  'Branding': 'branding',
  'Website Design & Development': 'website-design-development',
  'Search Engine Optimisation (SEO)': 'search-engine-optimisation',
  'Social Media Management': 'social-media-management',
  'Photography': 'photography',
  'Advertising': 'advertising',
};

export function HomeServicesSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const renderAccordionItem = (service: typeof SERVICES[0], globalIndex: number) => {
    const isActive = activeAccordion === globalIndex;
    const num = String(globalIndex + 1).padStart(2, '0');
    const hasPage = SERVICES_WITH_PAGES.includes(service.title);
    const slug = SERVICE_SLUGS[service.title] || '';
    const hasSubItems = service.subItems && service.subItems.length > 0;

    return (
      <div
        key={globalIndex}
        className="border-b transition-all duration-[260ms] ease-out relative group"
        style={{
          borderColor: 'rgba(255,255,255,0.08)',
          minHeight: '160px',
          paddingTop: '42px',
          paddingBottom: '42px',
        }}
      >
        {/* Subtle row hover background */}
        <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-[260ms] pointer-events-none" />

        <div className="flex items-center justify-between relative w-full gap-6 px-4 md:px-6">
          {/* Main Layout containing Number, Title, Description always visible */}
          <div className="flex-1 flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
            {/* 01 Number */}
            <span
              className="font-heading font-medium text-neutral-500 select-none block transition-colors duration-200 group-hover:text-neutral-400"
              style={{ fontSize: '18px', width: '28px', marginTop: '6px' }}
            >
              {num}
            </span>

            {/* Content block: Title + Description + Optional Subitems (expandable) */}
            <div className="flex-1 flex flex-col gap-3">
              <h3
                className="font-heading font-semibold text-white/90 tracking-[-0.02em] cursor-pointer select-none group-hover:text-white transition-colors duration-200"
                style={{ fontSize: '34px' }}
                onClick={() => toggleAccordion(globalIndex)}
              >
                {service.title}
              </h3>

              {/* Description is ALWAYS visible */}
              <p
                className="text-white/60 font-secondary leading-[1.7] transition-opacity duration-200 group-hover:text-white/85"
                style={{ fontSize: '18px', maxWidth: '42ch' }}
              >
                {service.desc}
              </p>

              {/* Expandable Area for Sub-features */}
              {hasSubItems && (
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, y: 24 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        y: 0,
                        transition: {
                          height: { duration: motionTokens.standard.duration, ease: motionTokens.standard.ease },
                          opacity: { duration: motionTokens.standard.duration, ease: motionTokens.standard.ease },
                          y: { duration: motionTokens.standard.duration, ease: motionTokens.standard.ease },
                        }
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        y: 24,
                        transition: {
                          height: { duration: motionTokens.standard.duration, ease: motionTokens.standard.ease },
                          opacity: { duration: motionTokens.standard.duration, ease: motionTokens.standard.ease },
                          y: { duration: motionTokens.standard.duration, ease: motionTokens.standard.ease },
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-l-2 border-[#E42528] pl-6">
                          {service.subItems?.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="text-white/50 text-sm uppercase tracking-wider font-heading font-semibold"
                            >
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Learn More link - always visible at the bottom if page exists, with 24px spacing */}
              {hasPage && (
                <div className="mt-6">
                  <Link
                    href={`/services/${slug}`}
                    className="inline-flex items-center gap-2 font-heading font-semibold uppercase tracking-[0.12em] text-[#E42528] hover:text-white transition-all duration-200"
                    style={{ fontSize: '13px' }}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 transition-transform duration-[180ms] ease-out group-hover:translate-x-1.5"
                      fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Plus Toggle (+) rotating 45deg to x — vertically centered & static position */}
          <div className="flex items-center justify-center self-center h-full">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 group-hover:border-[#E42528]/40 hover:bg-white/5 transition-all outline-none"
              onClick={() => toggleAccordion(globalIndex)}
              aria-expanded={isActive}
              aria-label={`Toggle ${service.title}`}
            >
              <motion.svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                animate={{ rotate: isActive ? 45 : 0 }}
                transition={{
                  duration: motionTokens.standard.duration,
                  ease: motionTokens.standard.ease,
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </motion.svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="our-expertise py-[120px] md:py-[140px] bg-neutral-950" id="services">
      <div className="mx-auto w-full max-w-[1320px] px-8 lg:px-20">
        {/* Section Title Header */}
        <div className="marketing-services-header flex items-center gap-4 mb-16">
          <div className="marketing-services-logo">
            <img src="/images/logo/PNG.4.png" alt="Gourmetica Logo" className="h-8 w-auto" />
          </div>
          <div className="marketing-services-title flex items-center gap-2 text-white">
            <span className="arrow text-[#E42528]">→</span>
            <span className="title-text font-heading font-bold tracking-[0.2em] uppercase text-sm" style={{ fontSize: '13px' }}>
              MARKETING SERVICES
            </span>
          </div>
        </div>

        {/* 2-Column Accordion Layout (Left: 1-5, Right: 6-9) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0 items-start">
          {/* Left Column (Items 1-5) */}
          <div className="flex flex-col">
            {SERVICES.slice(0, 5).map((service, idx) => renderAccordionItem(service, idx))}
          </div>

          {/* Right Column (Items 6-9) */}
          <div className="flex flex-col">
            {SERVICES.slice(5, 9).map((service, idx) => renderAccordionItem(service, idx + 5))}
          </div>
        </div>
      </div>
    </section>
  );
}
