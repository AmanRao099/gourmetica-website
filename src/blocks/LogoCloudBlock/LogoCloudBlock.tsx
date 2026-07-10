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
        <div
          className="flex items-center justify-center shrink-0 px-8"
          style={{ height: 56 }}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            style={{
              maxHeight: 32,
              width: 'auto',
              opacity: 0.35,
              filter: 'grayscale(100%)',
              transition: 'all 300ms ease-out',
              cursor: 'pointer',
            }}
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
            height: 80,
            background: 'linear-gradient(to bottom, rgba(9,9,11,0.10) 0%, rgba(250,250,249,0.45) 30%, rgba(250,250,249,0.80) 65%, #FAFAF9 100%)',
          }}
        />

        {/* ── Section Content ── */}
        <div
          className="w-full mx-auto"
          style={{
            maxWidth: 1320,
            paddingLeft: 96,
            paddingRight: 96,
          }}
        >
          {/* Intro line */}
          <FadeIn
            delay={trustMotion.divider.delay}
            duration={trustMotion.divider.duration}
            viewport={{ once: true, margin: '-40px' }}
            className="flex justify-center"
          >
            {subtitle && (
              <p
                className="text-center"
                style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#6B6B6B',
                  maxWidth: 620,
                  margin: 0,
                }}
              >
                {subtitle}
              </p>
            )}
          </FadeIn>

          {/* 20px before heading */}
          <div style={{ height: 20 }} />

          {/* Heading */}
          <FadeUp
            delay={trustMotion.heading.delay}
            duration={trustMotion.heading.duration}
            yOffset={14}
            viewport={{ once: true, margin: '-40px' }}
            className="flex justify-center"
          >
            {title && (
              <h2
                className="text-center font-heading font-bold"
                style={{
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  lineHeight: 1.15,
                  color: 'var(--color-black)',
                  margin: 0,
                }}
              >
                {title}
              </h2>
            )}
          </FadeUp>

          {/* 24px before divider */}
          <div style={{ height: 24 }} />

          {/* Accent Divider */}
          <FadeIn
            delay={trustMotion.heading.delay + 0.06}
            duration={trustMotion.divider.duration}
            viewport={{ once: true, margin: '-40px' }}
            className="flex justify-center"
          >
            <div
              style={{
                width: 56,
                height: 3,
                borderRadius: 2,
                backgroundColor: 'var(--color-primary)',
              }}
            />
          </FadeIn>

          {/* 40px before logo band */}
          <div style={{ height: 40 }} />

          {/* Logo Band with structural borders */}
          <FadeIn
            delay={trustMotion.logos.delay}
            duration={trustMotion.logos.duration}
            viewport={{ once: true, margin: '-40px' }}
          >
            <div
              className="overflow-hidden"
              style={{
                borderTop: '1px solid rgba(0,0,0,0.08)',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
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

        {/* 80px bottom spacing before next section */}
        <div style={{ height: 80 }} />
      </section>
    );
  }
);
LogoCloudBlock.displayName = 'LogoCloudBlock';
