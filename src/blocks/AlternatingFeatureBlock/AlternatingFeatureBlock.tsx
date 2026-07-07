import * as React from 'react';
import { Container, Stack, Flex, Box, Grid } from '@/core/primitives';
import { Heading, Text, Eyebrow } from '@/core/typography';
import { cn } from '@/core/utils';
import { AlternatingFeatureBlockProps, AlternatingFeatureItem } from './AlternatingFeatureBlock.types';

export const AlternatingFeatureBlock = React.forwardRef<HTMLDivElement, AlternatingFeatureBlockProps>(
  (
    {
      title,
      subtitle,
      description,
      features,
      theme = 'light',
      className,
      ...props
    },
    ref
  ) => {
    const isDark = theme === 'dark';

    const renderFeature = (feature: AlternatingFeatureItem, index: number) => {
      const isReversed = index % 2 !== 0;

      const content = (
        <Stack gap="sm" className="w-full">
          {feature.subtitle && (
            <Eyebrow color={isDark ? 'brand' : 'neutral'}>
              {feature.subtitle}
            </Eyebrow>
          )}
          <Heading level={3} size="heading-lg">
            {feature.title}
          </Heading>
          <Text size="body-lg" className={isDark ? 'text-neutral-400' : 'text-neutral-500'}>
            {feature.description}
          </Text>
          {feature.actions && (
            <Flex gap="md" align="center" className="mt-4">
              {feature.actions}
            </Flex>
          )}
        </Stack>
      );

      return (
        <Grid 
          key={index} 
          columns={1} 
          gap="xl" 
          className={cn('items-center md:grid-cols-2', index > 0 && 'mt-24 sm:mt-32')}
        >
          <Box className={cn('order-last md:order-none', isReversed && 'md:order-last')}>
            {content}
          </Box>
          <Box className={cn('w-full relative overflow-hidden rounded-2xl', isReversed && 'md:order-first')}>
            {feature.media}
          </Box>
        </Grid>
      );
    };

    return (
      <Box ref={ref} className={cn('w-full py-16 sm:py-32', isDark && 'dark bg-neutral-950 text-white', className)} {...props}>
        <Container>
          {(title || subtitle || description) && (
            <Stack gap="sm" align="center" className="text-center mb-16 sm:mb-24">
              {subtitle && (
                <Eyebrow color={isDark ? 'brand' : 'neutral'}>
                  {subtitle}
                </Eyebrow>
              )}
              {title && (
                <Heading level={2} size="heading-xl">
                  {title}
                </Heading>
              )}
              {description && (
                <Text size="body-lg" className={cn('max-w-2xl', isDark ? 'text-neutral-400' : 'text-neutral-500')}>
                  {description}
                </Text>
              )}
            </Stack>
          )}

          <Box>
            {features.map(renderFeature)}
          </Box>
        </Container>
      </Box>
    );
  }
);
AlternatingFeatureBlock.displayName = 'AlternatingFeatureBlock';
