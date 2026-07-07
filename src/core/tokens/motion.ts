export const motionTokens = {
  fast: {
    duration: 0.18,
    ease: [0.16, 1, 0.3, 1], // ease-out equivalent or similar custom bezier
  },
  standard: {
    duration: 0.26,
    ease: [0.22, 0.61, 0.36, 1],
  },
  luxury: {
    duration: 0.42,
    ease: [0.19, 1, 0.22, 1],
  },
  hero: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1],
  },
} as const;

// Keep existing exports for backward compatibility
export const motion = {
  durations: {
    fast: '180ms',
    normal: '260ms',
    slow: '420ms',
    'very-slow': '700ms',
  },
  easings: {
    'ease-out': [0.16, 1, 0.3, 1],
    'ease-in': [0.4, 0, 1, 1],
    'ease-in-out': [0.4, 0, 0.2, 1],
    'ease-expo': [0.19, 1, 0.22, 1],
    'ease-standard': [0.22, 0.61, 0.36, 1],
    'ease-hero': [0.16, 1, 0.3, 1],
  }
} as const;
