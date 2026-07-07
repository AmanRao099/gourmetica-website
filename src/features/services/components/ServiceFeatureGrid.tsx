"use client";

import { PageContainer } from '@/core/primitives';
import { motion } from 'framer-motion';
import { motionTokens } from '../motion.tokens';
import type { ServiceFeature } from '../types';

interface ServiceFeatureGridProps {
  features: ServiceFeature[];
}

export function ServiceFeatureGrid({ features }: ServiceFeatureGridProps) {
  return (
    <section className="w-full py-[120px] md:py-[140px] bg-[#f9f9f8] text-neutral-900">
      <PageContainer size="content">
        {/* Tiny Category Section Label */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: motionTokens.standard.duration, ease: motionTokens.standard.ease }}
        >
          <span
            className="font-heading font-semibold uppercase tracking-[0.2em] text-neutral-400"
            style={{ fontSize: '14px' }}
          >
            CAPABILITIES
          </span>
        </motion.div>

        {/* 2-Column Capability Grid (Desktop/Laptop: 2 columns, Tablet/Mobile: 1 column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            return (
              <motion.div
                key={idx}
                className="group relative flex flex-col bg-white border transition-all"
                style={{
                  minHeight: '280px',
                  borderRadius: '24px',
                  padding: '48px',
                  borderColor: 'rgba(0,0,0,0.06)', // visible on stone bg
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: motionTokens.luxury.duration,
                  ease: motionTokens.luxury.ease,
                  delay: (idx % 2) * 0.1,
                }}
                whileHover={{
                  y: -8,
                  borderColor: '#E42528',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                }}
              >
                {/* 01 Number */}
                <span
                  className="font-heading font-bold text-neutral-300 transition-colors duration-200 group-hover:text-[#E42528]/40 mb-4 block"
                  style={{ fontSize: '20px', letterSpacing: '0.05em' }}
                >
                  {num}
                </span>

                {/* Title */}
                <h3
                  className="font-heading font-bold text-neutral-900 mb-4"
                  style={{ fontSize: '22px' }}
                >
                  {feature.title}
                </h3>

                {/* Divider (────────────) */}
                <div
                  className="w-full h-[1px] bg-neutral-100 group-hover:bg-[#E42528]/35 transition-colors duration-300 mb-6"
                />

                {/* Description */}
                <p className="text-neutral-500 font-secondary leading-relaxed mb-8 flex-1" style={{ fontSize: '16px' }}>
                  {feature.description}
                </p>

                {/* Learn More link (Visual Only) */}
                <div
                  className="inline-flex items-center gap-2 font-heading font-semibold uppercase tracking-[0.06em] text-neutral-400 group-hover:text-[#E42528] transition-colors duration-200 mt-auto select-none"
                  style={{ fontSize: '13px' }}
                >
                  Learn More
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-[180ms] ease-out group-hover:translate-x-1.5"
                    fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
