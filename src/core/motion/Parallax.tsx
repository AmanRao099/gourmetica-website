"use client";

import * as React from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform, HTMLMotionProps } from 'framer-motion';

interface ParallaxProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  offset?: number; // Distance in px to shift (positive or negative)
}

export const Parallax = React.forwardRef<HTMLDivElement, ParallaxProps>(
  ({ children, offset = 50, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement | null>(null);
    const combinedRef = (ref as React.MutableRefObject<HTMLDivElement | null>) || internalRef;

    const { scrollYProgress } = useScroll({
      target: combinedRef,
      offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
      <motion.div ref={combinedRef} style={{ y }} {...props}>
        {children}
      </motion.div>
    );
  }
);
Parallax.displayName = 'Parallax';
