"use client";

import * as React from 'react';
import { PageContainer } from '@/core/primitives';
import { cn } from '@/core/utils';
import { motion } from 'framer-motion';
import { LogoCloudBlockProps } from './LogoCloudBlock.types';

export const LogoCloudBlock = React.forwardRef<HTMLDivElement, LogoCloudBlockProps>(
  (
    {
      title,
      subtitle,
      logos,
      variant = 'marquee',
      className,
      ...props
    },
    ref
  ) => {
    const [isPaused, setIsPaused] = React.useState(false);
    
    const renderLogo = (logo: { src: string; alt: string; href?: string }, index: number) => {
      const img = (
        <div className="flex items-center justify-center shrink-0 h-[80px] w-[160px] p-2 transition-all duration-300">
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-h-10 max-w-full object-contain grayscale opacity-35 hover:opacity-100 hover:scale-105 hover:grayscale-0 transition-all duration-500 ease-out cursor-pointer"
            loading="lazy"
          />
        </div>
      );
      
      if (logo.href) {
        return (
          <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer" className="block focus-visible:outline-none">
            {img}
          </a>
        );
      }
      return <React.Fragment key={index}>{img}</React.Fragment>;
    };

    return (
      <section
        ref={ref}
        className={cn('w-full bg-[#fcfbf9] overflow-hidden', className)}
        aria-label="Partner logos carousel"
        {...props}
      >
        {/* Spacing 1: 120px space before Divider */}
        <div className="h-[120px]" />

        {/* Tiny Luxury Divider */}
        <PageContainer size="standard" className="flex justify-center">
          <div className="w-[40px] h-[1px] bg-neutral-200" />
        </PageContainer>

        {/* Spacing 2: 40px space after Divider */}
        <div className="h-[40px]" />

        <PageContainer size="standard">
          {/* Headline (with faded-up scroll animation) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center"
          >
            {subtitle && (
              <p className="text-[10px] md:text-[11px] font-bold text-neutral-400 tracking-[0.3em] uppercase font-sans">
                {subtitle}
              </p>
            )}
          </motion.div>
        </PageContainer>

        {/* Spacing 3: 40px space after Heading */}
        <div className="h-[40px]" />

        {/* Logo Strip (moves entire row slowly, 25s loop, infinite, no pauses) */}
        <div 
          className="overflow-hidden py-4 border-t border-b border-neutral-100/50 bg-white"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={cn(
              "flex gap-12 w-max items-center py-1",
              !isPaused && "animate-marquee"
            )}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {/* Triple concatenation for completely seamless looping */}
            {[...logos, ...logos, ...logos].map((logo, index) => renderLogo(logo, index))}
          </div>
        </div>

        {/* Spacing 4: 120px space after Logo Strip */}
        <div className="h-[120px]" />
      </section>
    );
  }
);
LogoCloudBlock.displayName = 'LogoCloudBlock';
