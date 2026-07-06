"use client";

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface HoverScaleProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  amount?: number;
}

export const HoverScale = React.forwardRef<HTMLDivElement, HoverScaleProps>(
  ({ children, amount = 1.05, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ scale: amount }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
HoverScale.displayName = 'HoverScale';
