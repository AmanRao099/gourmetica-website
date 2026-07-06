"use client";

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface StaggerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
}

export const Stagger = React.forwardRef<HTMLDivElement, StaggerProps>(
  (
    { 
      children, 
      staggerDelay = 0.1, 
      delayChildren = 0, 
      once = true,
      ...props 
    }, 
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-10%" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delayChildren,
            },
          },
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Stagger.displayName = 'Stagger';

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export const StaggerItem = React.forwardRef<HTMLDivElement, StaggerItemProps>(
  (
    { 
      children, 
      direction = 'up',
      distance = 20,
      ...props 
    }, 
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: {
            opacity: 0,
            y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
            x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              duration: 0.5,
              ease: [0.21, 0.47, 0.32, 0.98],
            },
          },
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
StaggerItem.displayName = 'StaggerItem';
