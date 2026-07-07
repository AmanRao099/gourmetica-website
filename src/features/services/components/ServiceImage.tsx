"use client";

import { PageContainer } from '@/core/primitives';
import { motion } from 'framer-motion';
import { motionTokens } from '../motion.tokens';

interface ServiceImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function ServiceImage({ src, alt, priority = false }: ServiceImageProps) {
  return (
    <section className="w-full py-[48px] bg-warm-white">
      <PageContainer size="wide">
        <div
          className="w-full overflow-hidden rounded-[32px] relative"
          style={{ aspectRatio: '21/9', minHeight: '320px' }}
        >
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading={priority ? 'eager' : 'lazy'}
            initial={{
              scale: 1.08,
              opacity: 0,
              clipPath: 'inset(10% 10% 10% 10% rounded 32px)',
            }}
            whileInView={{
              scale: 1.00,
              opacity: 1,
              clipPath: 'inset(0% 0% 0% 0% rounded 32px)',
            }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: motionTokens.luxury.duration,
              ease: motionTokens.luxury.ease,
            }}
            whileHover={{
              scale: 1.02,
              transition: {
                duration: 0.7,
                ease: [0.19, 1, 0.22, 1], // very slow luxury hover easing
              }
            }}
          />
        </div>
      </PageContainer>
    </section>
  );
}
