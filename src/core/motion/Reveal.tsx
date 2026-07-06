"use client";

import * as React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  once?: boolean;
}

export const Reveal = React.forwardRef<HTMLDivElement, RevealProps>(
  (
    { 
      children, 
      direction = 'up', 
      delay = 0, 
      duration = 0.6, 
      once = true,
      ...props 
    }, 
    ref
  ) => {
    const variants: Variants = {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
        x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98], // Custom ease-out
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-10%" }}
        variants={variants}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Reveal.displayName = 'Reveal';
