export const motionTokens = {
  hover: 180, // ms
  standard: 260, // ms
  luxury: 420, // ms
  hero: 700, // ms
} as const;

export const motionEasings = {
  hover: 'easeOut',
  standard: [0.22, 0.61, 0.36, 1], // cubic-bezier(.22,.61,.36,1)
  luxury: [0.19, 1, 0.22, 1], // cubic-bezier(.19,1,.22,1)
  hero: [0.16, 1, 0.3, 1], // cubic-bezier(.16,1,.3,1)
} as const;
