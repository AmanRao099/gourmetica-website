"use client";

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface FadeUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  yOffset?: number;
}

export const FadeUp = React.forwardRef<HTMLDivElement, FadeUpProps>(
  ({ children, delay = 0, duration = 0.6, once = true, yOffset = 40, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: yOffset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, margin: "-10%" }}
        transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
FadeUp.displayName = 'FadeUp';
