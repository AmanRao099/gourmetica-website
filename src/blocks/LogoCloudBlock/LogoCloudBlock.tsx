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
    /**
     * The band is black, so each logo has to be treated by how its artwork is authored:
     *  - JPG has no transparency; invert alone turns its white backing black (invisible) and its dark mark white.
     *  - PNG line art on transparency knocks out to a clean white silhouette.
     *  - Badge artwork with a filled background would collapse into a solid disc, so it stays as authored.
     */
    const logoFilter = (logo: { src: string; keepOriginalColour?: boolean }, opacity: number) => {
      if (logo.keepOriginalColour) return `opacity(${opacity})`;
      const isJpg = /\.jpe?g$/i.test(logo.src);
      return isJpg
        ? `invert(1) contrast(140%) brightness(0.8) opacity(${opacity})`
        : `brightness(0) invert(1) opacity(${opacity})`;
    };

    const renderLogo = (logo: { src: string; alt: string; href?: string; keepOriginalColour?: boolean }, index: number) => {
      const img = (
        <div
          className="flex items-center justify-center shrink-0 px-6 md:px-12 h-[72px] md:h-[120px]"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-h-[44px] md:max-h-[80px] w-auto object-contain"
            style={{
              filter: logoFilter(logo, 1.0),
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
        style={{ backgroundColor: '#000000' }}
        aria-label="Trusted partners"
        {...props}
      >
        {/* ── Transition from the hero (#09090b) into the black band ── */}
        <div
          style={{
            height: 80,
            background: 'linear-gradient(to bottom, #09090b 0%, #000000 100%)',
          }}
        />

        {/* ── Section Content ── */}
        <div
          className="w-full mx-auto"
          style={{
            maxWidth: 1320,
            paddingLeft: 'var(--page-gutter)',
            paddingRight: 'var(--page-gutter)',
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
                  color: 'rgba(255,255,255,0.62)',
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
                  color: 'var(--color-white)',
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
              className="overflow-hidden py-8 md:py-16"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.10)',
                borderBottom: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <div
                className="flex w-max items-center animate-marquee gap-10 md:gap-20"
              >
                {[...logos, ...logos].map((logo, index) => renderLogo(logo, index))}
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
