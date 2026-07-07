import * as React from 'react';
import { Container, Stack, Box, Grid, Surface } from '@/core/primitives';
import { Heading, Text, Eyebrow } from '@/core/typography';
import { Icon } from '@/core/components';
import { cn } from '@/core/utils';
import { FeatureGridBlockProps, FeatureItem } from './FeatureGridBlock.types';

export const FeatureGridBlock = React.forwardRef<HTMLDivElement, FeatureGridBlockProps>(
  (
    {
      title,
      subtitle,
      description,
      features,
      columns = 3,
      theme = 'light',
      variant = 'minimal',
      className,
      ...props
    },
    ref
  ) => {
    const isDark = theme === 'dark';
    const isCards = variant === 'cards';

    const renderFeature = (feature: FeatureItem, index: number) => {
      const content = (
        <Stack gap="sm">
          {feature.icon && (
            <Box className={cn('mb-4 flex h-12 w-12 items-center justify-center rounded-lg', isDark ? 'bg-brand-900/50 text-brand-300' : 'bg-brand-50 text-brand-600')}>
              <Icon icon={feature.icon} size="md" />
            </Box>
          )}
          <Heading level={3} size="heading-md">
            {feature.title}
          </Heading>
          <Text size="body" className={isDark ? 'text-neutral-400' : 'text-neutral-500'}>
            {feature.description}
          </Text>
        </Stack>
      );

      const Wrapper = isCards ? Surface : Box;
      const wrapperProps = isCards ? { 
        className: cn(
          'h-full p-8 sm:p-10 transition-all duration-500', 
          isDark 
            ? 'bg-neutral-900 border-neutral-800 hover:border-brand-500/50 hover:shadow-[0_0_30px_rgba(228,37,40,0.15)] hover:-translate-y-1' 
            : 'bg-white border-transparent shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-brand-500/20'
        ),
        border: true,
        radius: '2xl'
      } : { className: 'h-full' };

      const inner = (
        <Wrapper key={index} {...wrapperProps}>
          {content}
        </Wrapper>
      );

      if (feature.href) {
        return (
          <a key={index} href={feature.href} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-2xl">
            {inner}
          </a>
        );
      }
      return <React.Fragment key={index}>{inner}</React.Fragment>;
    };

    return (
      <Box ref={ref} className={cn('w-full py-16 sm:py-24', isDark && 'dark bg-neutral-950 text-white', className)} {...props}>
        <Container>
          {(title || subtitle || description) && (
            <Stack gap="sm" align="center" className="text-center mb-16">
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

          <Grid 
            columns={1} 
            gap={isCards ? 'xl' : 'xl'} 
            className={cn(
              'sm:grid-cols-2',
              columns === 3 && 'lg:grid-cols-3',
              columns === 4 && 'lg:grid-cols-4'
            )}
          >
            {features.map(renderFeature)}
          </Grid>
        </Container>
      </Box>
    );
  }
);
FeatureGridBlock.displayName = 'FeatureGridBlock';
