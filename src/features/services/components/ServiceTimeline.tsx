"use client";

import { PageContainer } from '@/core/primitives';
import { motion } from 'framer-motion';
import { motionTokens } from '../motion.tokens';

const PROCESS_STEPS = [
  { step: '01', title: 'Discover', desc: 'Deep research into target audience, goals, and opportunities.', active: true },
  { step: '02', title: 'Strategy', desc: 'Crafting a customized, data-driven roadmap for expansion.', active: false },
  { step: '03', title: 'Create', desc: 'Developing conversion-centric visual identity and tech assets.', active: false },
  { step: '04', title: 'Grow', desc: 'Scaling operations through campaigns and search optimization.', active: false },
];

export function ServiceTimeline() {
  return (
    <section className="w-full py-[120px] md:py-[140px] bg-[#f9f9f8] text-neutral-900 overflow-hidden">
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
            PROCESS
          </span>
        </motion.div>

        {/* Timeline Grid (Desktop: 4 columns, Tablet: 2 columns, Mobile: 1 column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {PROCESS_STEPS.map((item, idx) => {
            const isLast = idx === PROCESS_STEPS.length - 1;
            const colorClass = item.active ? 'text-[#E42528]' : 'text-neutral-400';
            
            return (
              <motion.div
                key={idx}
                className="flex flex-col relative group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: motionTokens.luxury.duration,
                  ease: motionTokens.luxury.ease,
                  delay: idx * 0.12,
                }}
              >
                {/* 01 Number (stone grey/active red) */}
                <span
                  className={`font-heading font-bold mb-2 block transition-colors duration-200 ${colorClass}`}
                  style={{ fontSize: '16px', letterSpacing: '0.05em' }}
                >
                  {item.step}
                </span>

                {/* Title */}
                <h4 className="font-heading font-bold text-neutral-800 text-xl mb-3">
                  {item.title}
                </h4>

                {/* Thin connecting line (visible on desktop only, between columns) */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-[10px] left-[130px] right-[-30px] h-[1px] bg-neutral-200" />
                )}

                {/* Description */}
                <p className="text-neutral-500 font-secondary leading-relaxed" style={{ fontSize: '15px', maxWidth: '24ch' }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
