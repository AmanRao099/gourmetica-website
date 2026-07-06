"use client";

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface HoverLiftProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  amount?: number;
}

export const HoverLift = React.forwardRef<HTMLDivElement, HoverLiftProps>(
  ({ children, amount = -8, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: amount }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
HoverLift.displayName = 'HoverLift';
