"use client";

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { PageContainer } from '@/core/primitives';
import { cn } from '@/core/utils';
import { motion } from 'framer-motion';
import { FadeIn, FadeUp, heroMotion } from '@/core/motion';
import { typography } from '@/core/tokens/typography';
import { HeroBlockProps } from './HeroBlock.types';

export const HeroBlock = React.forwardRef<HTMLDivElement, HeroBlockProps>(
  (
    {
      title,
      subtitle,
      description,
      actions,
      media,
      variant = 'video',
      theme = 'dark',
      alignment = 'left',
      className,
      ...props
    },
    ref
  ) => {
    const [shouldZoom, setShouldZoom] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
      // Force play on mount for browsers that block autoplay
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }

      const zoomTimer = setTimeout(() => {
        setShouldZoom(true);
      }, 1200);

      return () => {
        clearTimeout(zoomTimer);
      };
    }, []);

    // Clone the video element with proper attributes
    const renderedVideo = React.isValidElement(media)
      ? React.cloneElement(media as React.ReactElement<any>, {
          ref: videoRef,
          preload: "auto",
          autoPlay: true,
          loop: true,
          muted: true,
          playsInline: true,
          style: {
            objectPosition: "65% center",
            filter: "brightness(0.68) contrast(0.95) saturate(0.82) grayscale(0.05)",
            ...((media.props as any).style || {})
          },
          className: cn(
            "w-full h-full object-cover",
            (media.props as any).className
          )
        })
      : null;

    const primaryStyle = {
      fontSize: typography.hero.primary.fontSize,
      fontWeight: typography.hero.primary.fontWeight,
      lineHeight: typography.hero.primary.lineHeight,
      letterSpacing: typography.hero.primary.letterSpacing,
      fontFamily: "var(--font-mont)",
      color: "#ffffff",
      textShadow: "0 2px 18px rgba(0,0,0,.28)",
      display: "block"
    };

    const secondaryStyle = {
      fontSize: typography.hero.secondary.fontSize,
      fontWeight: typography.hero.secondary.fontWeight,
      fontStyle: typography.hero.secondary.fontStyle,
      lineHeight: typography.hero.secondary.lineHeight,
      letterSpacing: typography.hero.secondary.letterSpacing,
      fontFamily: "var(--font-mont)",
      opacity: 0.85,
      color: "#ffffff",
      textShadow: "0 2px 18px rgba(0,0,0,.28)",
      display: "block"
    };

    const accentStyle = {
      fontSize: typography.hero.accent.fontSize,
      fontWeight: typography.hero.accent.fontWeight,
      lineHeight: typography.hero.accent.lineHeight,
      letterSpacing: typography.hero.accent.letterSpacing,
      fontFamily: "var(--font-mont)",
      color: "#ffffff",
      textShadow: "0 2px 18px rgba(0,0,0,.28)",
      display: "block"
    };

    return (
      <section
        ref={ref}
        className={cn(
          'relative w-full min-h-[100svh] overflow-hidden bg-[#09090b] flex flex-col justify-center',
          className
        )}
        {...props}
      >
        {/* BackgroundLayer (z-0) — video only, no fallback image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.06 }}
            animate={shouldZoom ? { scale: 1.00 } : { scale: 1.06 }}
            transition={{ duration: heroMotion.duration.zoom, ease: "linear" }}
          >
            {renderedVideo}
          </motion.div>

          {/* Left-to-right dark gradient overlay */}
          <FadeIn
            delay={heroMotion.delay.overlay}
            duration={heroMotion.duration.fade}
            viewport={{ once: true, margin: "200px" }}
            className="absolute inset-0 z-10"
            style={{
              background: "linear-gradient(90deg, rgba(9,9,11,.92) 0%, rgba(9,9,11,.82) 20%, rgba(9,9,11,.64) 40%, rgba(9,9,11,.36) 60%, rgba(9,9,11,.12) 80%, rgba(9,9,11,.00) 100%)"
            }}
          >
            <div className="w-full h-full" />
          </FadeIn>

          {/* Radial vignette */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,.18) 100%)"
            }}
          />

          {/* Noise texture */}
          <div
            className="absolute inset-0 z-25 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: "url('/textures/noise.webp')",
              backgroundRepeat: "repeat",
              opacity: 0.018
            }}
          />
        </div>

        {/* Inset Border Frame — visible luxury framing */}
        <div className="absolute inset-0 z-40 pointer-events-none p-5 md:p-6">
          <div className="w-full h-full border border-white/10" />
        </div>

        {/* ContentLayer (z-30) */}
        <PageContainer size="hero" className="relative z-30 w-full px-10 md:px-16 lg:px-24 xl:px-28 mx-auto max-w-[1440px]">
          <div className="w-full text-left" style={{ maxWidth: "580px" }}>
            <FadeUp delay={heroMotion.delay.heading1} duration={heroMotion.duration.fade} yOffset={heroMotion.yOffset.heading1} viewport={{ once: true, margin: "200px" }} style={{ marginBottom: "36px" }}>
              <span style={primaryStyle}>Growth Marketing</span>
            </FadeUp>
            <FadeUp delay={heroMotion.delay.heading2} duration={heroMotion.duration.fade} yOffset={heroMotion.yOffset.heading2} viewport={{ once: true, margin: "200px" }} style={{ marginBottom: "36px" }}>
              <span style={secondaryStyle}>That Delivers</span>
            </FadeUp>
            <FadeUp delay={heroMotion.delay.heading3} duration={heroMotion.duration.fade} yOffset={heroMotion.yOffset.heading3} viewport={{ once: true, margin: "200px" }}>
              <span style={accentStyle}>Results.</span>
            </FadeUp>
          </div>
        </PageContainer>
      </section>
    );
  }
);
HeroBlock.displayName = 'HeroBlock';
