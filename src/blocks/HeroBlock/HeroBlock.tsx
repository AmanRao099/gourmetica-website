"use client";

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/core/utils';
import { motion } from 'framer-motion';
import { heroMotion } from '@/core/motion';
import { HeroBlockProps } from './HeroBlock.types';

/* CSS-driven entrance (see .hero-fade-up in globals.css): the hero headline is
   the LCP element, so its animation must not wait for JS hydration. */
const fadeUp = (delay: number, y = 0): React.CSSProperties => ({
  animationDelay: `${delay}s`,
  ['--hero-y' as string]: `${y}px`,
});

/** Inset of the decorative luxury border frame from the section edges. */
const FRAME_INSET = 20;

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
    /* The video is deferred off the critical path: a 60KB poster frame paints
       immediately (it is the LCP element), and the multi-MB video only mounts
       once the browser is idle after load. */
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
      const start = () => {
        const idle = (window as any).requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 200));
        idle(() => setShowVideo(true));
      };
      if (document.readyState === 'complete') {
        start();
      } else {
        window.addEventListener('load', start, { once: true });
      }

      const zoomTimer = setTimeout(() => {
        setShouldZoom(true);
      }, 1200);

      return () => {
        window.removeEventListener('load', start);
        clearTimeout(zoomTimer);
      };
    }, []);

    useEffect(() => {
      // Force play on mount for browsers that block autoplay
      if (showVideo && videoRef.current && typeof videoRef.current.play === 'function') {
        videoRef.current.play().catch(() => { });
      }
    }, [showVideo]);

    // Clone the video element with proper attributes
    const renderedVideo = React.isValidElement(media)
      ? React.cloneElement(media as React.ReactElement<any>, {
        ref: videoRef,
        preload: "metadata",
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
          // absolute: must stack above the absolutely-positioned poster frame
          "absolute inset-0 w-full h-full object-cover",
          (media.props as any).className
        )
      })
      : null;

    const boldWhiteStyle: React.CSSProperties = {
      fontSize: "clamp(2.5rem, 4.5vw + 1.5rem, 5.25rem)",
      fontWeight: "800",
      lineHeight: "0.95",
      letterSpacing: "-0.03em",
      fontFamily: "var(--font-mont)",
      color: "#ffffff",
      textShadow: "0 2px 18px rgba(0,0,0,.28)",
      display: "block",
    };

    const regularWhiteStyle: React.CSSProperties = {
      fontSize: "clamp(1.25rem, 1.4vw + 0.9rem, 2.25rem)",
      fontWeight: "400",
      lineHeight: "1.3",
      letterSpacing: "-0.01em",
      fontFamily: "var(--font-mont)",
      color: "#ffffff",
      opacity: 0.9,
      textShadow: "0 2px 18px rgba(0,0,0,.28)",
      display: "block",
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
        {/* ── BackgroundLayer ── instant poster frame, video swaps in when idle */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.06 }}
            animate={shouldZoom ? { scale: 1.00 } : { scale: 1.06 }}
            transition={{ duration: heroMotion.duration.zoom, ease: "linear" }}
          >
            <img
              src="/HOME PAGE/VIDEO BANNER/hero-poster.jpg"
              alt=""
              aria-hidden
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectPosition: "65% center",
                filter: "brightness(0.68) contrast(0.95) saturate(0.82) grayscale(0.05)",
              }}
            />
            {showVideo && renderedVideo}
          </motion.div>

          {/* Left-to-right dark gradient overlay */}
          <div
            className="hero-fade-up absolute inset-0 z-10"
            style={{
              ...fadeUp(heroMotion.delay.overlay),
              background: "linear-gradient(90deg, rgba(9,9,11,.92) 0%, rgba(9,9,11,.82) 20%, rgba(9,9,11,.64) 40%, rgba(9,9,11,.36) 60%, rgba(9,9,11,.12) 80%, rgba(9,9,11,.00) 100%)"
            }}
          />

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

        {/* ── Inset Border Frame ── visible luxury border */}
        <div
          className="absolute z-40 pointer-events-none"
          style={{
            top: FRAME_INSET,
            left: FRAME_INSET,
            right: FRAME_INSET,
            bottom: FRAME_INSET,
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        />

        {/* ── ContentLayer ── shares the responsive page gutter with the Header */}
        <div
          className="relative z-30 w-full max-w-[1440px] mx-auto"
          style={{ paddingLeft: 'var(--page-gutter)', paddingRight: 'var(--page-gutter)' }}
        >
          <div
            className={cn("w-full", alignment === 'center' ? "text-center mx-auto" : "text-left")}
            style={{ maxWidth: alignment === 'center' ? 'none' : 640 }}
          >
            {title ? (
              <>
                {subtitle && (
                  <div className="hero-fade-up" style={{ ...fadeUp(heroMotion.delay.heading1, heroMotion.yOffset.heading1), marginBottom: 12 }}>
                    <span style={regularWhiteStyle}>{subtitle}</span>
                  </div>
                )}
                <div className="hero-rise" style={{ ...fadeUp(heroMotion.delay.heading2, heroMotion.yOffset.heading2), marginBottom: 20 }}>
                  <h1 style={boldWhiteStyle}>{title}</h1>
                </div>
                {description && (
                  <div className="hero-fade-up" style={fadeUp(heroMotion.delay.heading3, heroMotion.yOffset.heading3)}>
                    <p style={regularWhiteStyle}>{description}</p>
                  </div>
                )}
                {actions && (
                  <div className="hero-fade-up" style={fadeUp(heroMotion.delay.heading3 + 0.1, heroMotion.yOffset.heading3)}>
                    <div className="mt-8">{actions}</div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="hero-rise" style={{ ...fadeUp(heroMotion.delay.heading1, heroMotion.yOffset.heading1), marginBottom: 12 }}>
                  <span style={boldWhiteStyle}>Growth</span>
                </div>
                <div className="hero-rise" style={{ ...fadeUp(heroMotion.delay.heading1 + 0.1, heroMotion.yOffset.heading1), marginBottom: 12 }}>
                  <span style={boldWhiteStyle}>Marketing</span>
                </div>
                <div className="hero-rise" style={{ ...fadeUp(heroMotion.delay.heading2, heroMotion.yOffset.heading2), marginBottom: 12 }}>
                  <span style={boldWhiteStyle}>That</span>
                </div>
                <div className="hero-rise" style={{ ...fadeUp(heroMotion.delay.heading2 + 0.15, heroMotion.yOffset.heading2), marginBottom: 32 }}>
                  <span style={boldWhiteStyle}>Delivers</span>
                </div>
                <div className="hero-fade-up" style={fadeUp(heroMotion.delay.heading3, heroMotion.yOffset.heading3)}>
                  <span style={regularWhiteStyle}>For Ambitious Brands.</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
);
HeroBlock.displayName = 'HeroBlock';
