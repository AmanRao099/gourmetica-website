"use client";

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { PageContainer } from '@/core/primitives';
import { cn } from '@/core/utils';
import { motion } from 'framer-motion';
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
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
      // Show video after 400ms delay for a smooth luxury fade-in
      const timer = setTimeout(() => {
        setIsVideoVisible(true);
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            // Autoplay blocked handling
          });
        }
      }, 400);
      return () => clearTimeout(timer);
    }, []);

    // Custom video component clone to apply ref, playsInline, autoPlay control
    const renderedVideo = React.isValidElement(media)
      ? React.cloneElement(media as React.ReactElement<any>, {
          ref: videoRef,
          autoPlay: false, // controlled by our 400ms timer
          loop: true,
          muted: true,
          playsInline: true,
          className: cn("w-full h-full object-cover transition-opacity duration-1000", isVideoVisible ? "opacity-100" : "opacity-0")
        })
      : null;

    return (
      <section
        ref={ref}
        className={cn(
          'relative w-full h-[95vh] min-h-[750px] overflow-hidden bg-black flex items-center',
          className
        )}
        {...props}
      >
        {/* Background Media with slow 12s scale-down animation */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          <motion.div 
            className="w-full h-full"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.00 }}
            transition={{ duration: 12, ease: "easeOut" }}
          >
            {renderedVideo}
          </motion.div>
          {/* Dark luxury gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/85 z-2" />
        </div>

        {/* Content Container aligned perfectly with global PageContainer */}
        <PageContainer size="hero" className="relative z-10 w-full pt-[104px]">
          <div className="max-w-4xl text-left">
            {/* 1. Eyebrow/Subtitle (0ms delay) */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-xs font-bold text-[#e62656] tracking-[0.25em] uppercase font-sans mb-4"
              >
                {subtitle}
              </motion.p>
            )}

            {/* 2. Headline (120ms delay) */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-white font-sans text-5xl sm:text-7xl lg:text-[88px] font-extrabold tracking-tight leading-[0.95] max-w-[10ch]"
            >
              {title}
            </motion.h1>

            {/* 3. Paragraph/Description (220ms delay) */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-white/80 font-sans text-lg sm:text-xl lg:text-[22px] font-medium max-w-[34ch] leading-[1.8] mt-6 mb-10"
              >
                {description}
              </motion.p>
            )}

            {/* 4. Actions/Buttons (320ms delay) */}
            {actions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-wrap gap-4 items-center"
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
HeroBlock.displayName = 'HeroBlock';
