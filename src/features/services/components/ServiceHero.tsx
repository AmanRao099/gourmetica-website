"use client";

import { PageContainer } from '@/core/primitives';
import { motion } from 'framer-motion';
import { motionTokens } from '../motion.tokens';
import type { ServiceHero as ServiceHeroType } from '../types';

interface ServiceHeroProps {
  hero: ServiceHeroType;
}

export function ServiceHero({ hero }: ServiceHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden bg-neutral-950 text-white flex flex-col justify-center"
      style={{
        height: '65vh',
        minHeight: '620px',
        maxHeight: '760px',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={hero.banner}
          alt={hero.alt}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.65) contrast(0.92)' }}
          loading="eager"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1.00, opacity: 1 }}
          transition={{
            duration: motionTokens.hero.duration,
            ease: motionTokens.hero.ease,
          }}
        />
        {/* Subtle dark overlays for premium depth */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 35%, rgba(9,9,11,0.6) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(9,9,11,0.1) 0%, rgba(9,9,11,0.75) 100%)',
          }}
        />
      </div>

      {/* Content Area (positioned around 45% top) */}
      <PageContainer size="wide" className="relative z-20 w-full flex flex-col justify-center" style={{ paddingTop: '60px' }}>
        <motion.div
          className="w-full text-center md:text-left flex flex-col"
          style={{ transform: 'translateY(-8%)' }} // places content around 45% viewport height
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: motionTokens.hero.duration,
            ease: motionTokens.hero.ease,
            delay: 0.15,
          }}
        >
          {/* Eyebrow / Category Label */}
          <span
            className="font-heading font-bold uppercase tracking-[0.25em] text-[#E42528] mb-5 block"
            style={{ fontSize: '14px' }}
          >
            SERVICES
          </span>

          {/* Display Title (max-width 11ch to prevent stretching) */}
          <h1
            className="font-heading font-bold tracking-[-0.03em] text-white mb-6"
            style={{
              fontSize: 'clamp(44px, 5.5vw, 72px)',
              lineHeight: 0.92,
              maxWidth: '11ch',
            }}
          >
            {hero.title}
          </h1>

          {/* Subtitle (max-width 44ch) */}
          <p
            className="text-neutral-200 font-secondary leading-[1.7] max-w-2xl"
            style={{
              fontSize: '22px',
              maxWidth: '44ch',
            }}
          >
            {hero.subtitle}
          </p>
        </motion.div>
      </PageContainer>
    </section>
  );
}
