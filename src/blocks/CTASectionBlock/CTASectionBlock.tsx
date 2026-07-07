"use client";

import * as React from 'react';
import { PageContainer } from '@/core/primitives';
import { cn } from '@/core/utils';
import { motion } from 'framer-motion';
import { CTASectionBlockProps } from './CTASectionBlock.types';

export const CTASectionBlock = React.forwardRef<HTMLDivElement, CTASectionBlockProps>(
  (
    {
      title,
      subtitle,
      description,
      actions,
      theme = 'dark',
      variant = 'centered',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          'relative w-full flex items-center justify-center bg-neutral-950 text-white overflow-hidden py-24 md:py-0 md:h-[520px]',
          className
        )}
        {...props}
      >
        {/* Subtle dark luxury background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(230,38,86,0.15),rgba(255,255,255,0))] pointer-events-none" />

        <PageContainer size="standard" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-[10px] md:text-[11px] font-bold text-[#e62656] tracking-[0.25em] uppercase font-sans mb-4"
              >
                {subtitle}
              </motion.p>
            )}
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-sans tracking-tight leading-[1.05]"
            >
              {title}
            </motion.h2>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-neutral-400 font-sans text-base md:text-lg max-w-xl mx-auto mt-6 mb-10 leading-relaxed"
              >
                {description}
              </motion.p>
            )}

            {actions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex justify-center"
              >
                {actions}
              </motion.div>
            )}
          </div>
        </PageContainer>
      </section>
    );
  }
);
CTASectionBlock.displayName = 'CTASectionBlock';
