import { serviceTokens } from './services.tokens';

export const servicesDesign = {
  heroHeight: `min-h-[${serviceTokens.heroHeight}] min-h-[620px] max-h-[760px]`,
  sectionSpacing: `py-[${serviceTokens.sectionSpacing}px]`,
  introSpacing: "py-[96px]",
  radius: `rounded-[${serviceTokens.radius}px]`,
  contentWidth: `max-w-[${serviceTokens.contentWidth}px]`,
  heroWidth: `max-w-[${serviceTokens.heroWidth}px]`,
} as const;
