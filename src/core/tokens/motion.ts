export const motion = {
  durations: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    'very-slow': '800ms',
  },
  easings: {
    'ease-out': [0.2, 0.8, 0.2, 1],
    'ease-in': [0.4, 0, 1, 1],
    'ease-in-out': [0.4, 0, 0.2, 1],
    'ease-expo': [0.19, 1, 0.22, 1],
  }
} as const;
