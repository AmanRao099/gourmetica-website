"use client";

import Link from 'next/link';
import { PageContainer } from '@/core/primitives';
import { Button } from '@/core/components';
import { motion } from 'framer-motion';
import { motionTokens } from '../motion.tokens';

export function ServiceCTA() {
  return (
    <>
      <section className="relative w-full bg-neutral-900 text-white overflow-hidden py-[140px]">
        {/* Subtle red background gradient pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(228,37,40,0.12),rgba(255,255,255,0))] pointer-events-none" />

        <PageContainer size="wide" className="relative z-10">
          <div className="max-w-[760px] mx-auto text-center flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: motionTokens.standard.duration, ease: motionTokens.standard.ease }}
              className="text-[#E42528] font-heading font-bold uppercase tracking-[0.25em] mb-4"
              style={{ fontSize: '13px' }}
            >
              NEXT STEP
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: motionTokens.luxury.duration, ease: motionTokens.luxury.ease, delay: 0.1 }}
              className="text-white font-heading font-extrabold tracking-tight leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 54px)', maxWidth: '14ch' }}
            >
              Ready to grow your business?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: motionTokens.luxury.duration, ease: motionTokens.luxury.ease, delay: 0.2 }}
              className="text-neutral-400 font-secondary leading-relaxed mb-10"
              style={{ fontSize: '20px', maxWidth: '36ch' }}
            >
              Let&apos;s discuss your goals and build a marketing strategy that delivers measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: motionTokens.standard.duration, ease: motionTokens.standard.ease, delay: 0.3 }}
            >
              <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[38px] py-[18px] font-bold uppercase tracking-[0.05em] text-[12px] h-14 shadow-lg hover:shadow-[0_10px_30px_rgba(228,37,40,0.3)] transition-all">
                <Link href="/getintouch">
                  Book A Call Now
                </Link>
              </Button>
            </motion.div>
          </div>
        </PageContainer>
      </section>

      {/* Spacing 48px + thin divider before Footer */}
      <div className="w-full bg-neutral-950 flex flex-col items-center">
        <div className="w-full max-w-[1600px] px-8 lg:px-20 py-[48px]">
          <div className="w-full h-[1px] bg-white/5" />
        </div>
      </div>
    </>
  );
}
