import type { Variants } from 'framer-motion';
import { motion as motionTokens } from '../tokens';

const { easings, durations } = motionTokens;

/**
 * Standardized Framer Motion variants.
 * Do not invent one-off animations in components; reuse these.
 */
export const fade: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { duration: parseFloat(durations.normal) / 1000, ease: easings['ease-out'] } 
  },
  exit: { 
    opacity: 0, 
    transition: { duration: parseFloat(durations.fast) / 1000, ease: easings['ease-in'] } 
  }
};

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: parseFloat(durations.slow) / 1000, ease: easings['ease-expo'] } 
  },
  exit: { 
    opacity: 0, 
    y: 12, 
    transition: { duration: parseFloat(durations.normal) / 1000, ease: easings['ease-in'] } 
  }
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};
