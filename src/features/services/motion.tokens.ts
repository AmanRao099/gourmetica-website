export const motionTokens = {
  hover: {
    duration: 0.18,
    ease: "easeOut",
  },
  standard: {
    duration: 0.26,
    ease: [0.22, 0.61, 0.36, 1], // cubic-bezier(.22,.61,.36,1)
  },
  luxury: {
    duration: 0.42,
    ease: [0.19, 1, 0.22, 1], // cubic-bezier(.19,1,.22,1)
  },
  hero: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1], // cubic-bezier(.16,1,.3,1)
  },
} as const;
