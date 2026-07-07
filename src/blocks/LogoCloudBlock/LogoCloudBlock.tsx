"use client";

import * as React from 'react';
import { cn } from '@/core/utils';
import { FadeIn, FadeUp, trustMotion } from '@/core/motion';
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
        <div className="flex items-center justify-center shrink-0 px-8" style={{ height: 56 }}>
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-h-10 max-w-full object-contain transition-all duration-300 ease-out cursor-pointer"
            style={{ opacity: 0.35, filter: 'grayscale(100%)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.filter = 'grayscale(0%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.35';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'grayscale(100%)';
            }}
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
        className={cn('w-full overflow-hidden', className)}
        style={{ backgroundColor: '#FAFAF9' }}
        aria-label="Trusted partners"
        {...props}
      >
        {/* ── Gradient Transition from Hero ── */}
        <div
          style={{
            height: 96,
            background: 'linear-gradient(to bottom, rgba(9,9,11,0.12) 0%, rgba(250,250,249,0.45) 30%, rgba(250,250,249,0.80) 65%, #FAFAF9 100%)',
          }}
        />

        {/* ── Section Content ── */}
        <div
          className="w-full mx-auto"
          style={{
            maxWidth: 1320,
            paddingLeft: 96,
            paddingRight: 96,
            paddingTop: 80,
            paddingBottom: 80,
          }}
        >
          {/* Editorial Divider */}
          <FadeIn
            delay={trustMotion.divider.delay}
            duration={trustMotion.divider.duration}
            viewport={{ once: true, margin: '-40px' }}
            className="flex justify-center"
          >
            <div
              style={{
                width: 72,
                height: 1,
                backgroundColor: '#D6D3D1',
                opacity: 0.6,
              }}
            />
          </FadeIn>

          {/* 32px spacing */}
          <div style={{ height: 32 }} />

          {/* Heading */}
          <FadeUp
            delay={trustMotion.heading.delay}
            duration={trustMotion.heading.duration}
            yOffset={14}
            viewport={{ once: true, margin: '-40px' }}
            className="flex justify-center"
          >
            {subtitle && (
              <p
                className="text-center"
                style={{
                  fontFamily: 'var(--font-mont)',
                  fontSize: 13,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                  color: '#525252',
                  maxWidth: 720,
                }}
              >
                {subtitle}
              </p>
            )}
          </FadeUp>

          {/* 56px spacing */}
          <div style={{ height: 56 }} />

          {/* Logo Band */}
          <FadeIn
            delay={trustMotion.logos.delay}
            duration={trustMotion.logos.duration}
            viewport={{ once: true, margin: '-40px' }}
          >
            <div
              className="overflow-hidden"
              style={{
                borderTop: '1px solid rgba(0,0,0,0.06)',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
                paddingTop: 36,
                paddingBottom: 36,
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className={cn(
                  "flex w-max items-center",
                  !isPaused && "animate-marquee"
                )}
                style={{
                  gap: 24,
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
              >
                {[...logos, ...logos, ...logos].map((logo, index) => renderLogo(logo, index))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }
);
LogoCloudBlock.displayName = 'LogoCloudBlock';
