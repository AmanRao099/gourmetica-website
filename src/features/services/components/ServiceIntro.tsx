"use client";

import { PageContainer } from '@/core/primitives';
import { motion } from 'framer-motion';
import { motionTokens } from '../motion.tokens';

interface ServiceIntroProps {
  heading?: string;
  paragraphs: string[];
}

export function ServiceIntro({ heading, paragraphs }: ServiceIntroProps) {
  return (
    <section className="w-full py-[96px] bg-warm-white text-neutral-900">
      <PageContainer size="content">
        {/* 38% / 62% Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-12 lg:gap-16 items-start">
          {/* Left Column (INTRODUCTION label + Heading) */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: motionTokens.standard.duration, ease: motionTokens.standard.ease }}
            >
              <span
                className="font-heading font-semibold uppercase tracking-[0.2em] text-neutral-400"
                style={{ fontSize: '14px' }}
              >
                INTRODUCTION
              </span>
            </motion.div>

            <motion.h2
              className="font-heading font-bold text-neutral-900 leading-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 40px)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: motionTokens.luxury.duration, ease: motionTokens.luxury.ease }}
            >
              {heading || "Elevating Hospitality Tastes"}
            </motion.h2>
          </div>

          {/* Right Column (Editorial Description, max 44ch) */}
          <motion.div
            className="flex flex-col gap-6"
            style={{ maxWidth: '44ch' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: motionTokens.luxury.duration, ease: motionTokens.luxury.ease, delay: 0.1 }}
          >
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-neutral-600 leading-[1.75] font-secondary"
                style={{ fontSize: '20px' }}
              >
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
