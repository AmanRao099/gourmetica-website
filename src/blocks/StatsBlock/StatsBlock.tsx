import * as React from 'react';
import { Container, Stack, Flex, Box, Grid } from '@/core/primitives';
import { Heading, Text } from '@/core/typography';
import { cn } from '@/core/utils';
import { StatsBlockProps, StatItem } from './StatsBlock.types';

export const StatsBlock = React.forwardRef<HTMLDivElement, StatsBlockProps>(
  (
    {
      title,
      description,
      stats,
      theme = 'light',
      layout = 'split',
      className,
      ...props
    },
    ref
  ) => {
    const isDark = theme === 'dark';
    const isBrand = theme === 'brand';
    const hasDarkText = isDark || isBrand;

    const bgClass = isBrand 
      ? 'bg-brand-600 text-white' 
      : isDark 
        ? 'bg-neutral-950 text-white dark' 
        : 'bg-white text-neutral-900 border-y border-neutral-200';

    const renderStat = (stat: StatItem, index: number) => {
      return (
        <Stack key={index} gap="xs">
          <Heading level={3} size="heading-xl" className={cn(hasDarkText && 'text-white')}>
            {stat.value}
          </Heading>
          <Text size="body" weight="medium" className={cn(hasDarkText ? 'text-brand-100' : 'text-neutral-500')}>
            {stat.label}
          </Text>
        </Stack>
      );
    };

    if (layout === 'inline') {
      return (
        <Box ref={ref} className={cn('w-full py-12', bgClass, className)} {...props}>
          <Container>
            <Flex wrap="wrap" justify="center" align="center" gap="xl" className="gap-y-12">
              {stats.map(renderStat)}
            </Flex>
          </Container>
        </Box>
      );
    }

    // split layout
    return (
      <Box ref={ref} className={cn('w-full py-16 sm:py-24', bgClass, className)} {...props}>
        <Container>
          <Grid columns={1} gap="xl" className="lg:grid-cols-2">
            <Box>
              <Stack gap="sm" className="max-w-xl">
                {title && (
                  <Heading level={2} size="heading-xl" className={cn(hasDarkText && 'text-white')}>
                    {title}
                  </Heading>
                )}
                {description && (
                  <Text size="body-lg" className={cn(hasDarkText ? 'text-brand-100' : 'text-neutral-500')}>
                    {description}
                  </Text>
                )}
              </Stack>
            </Box>
            
            <Box className="lg:pl-12">
              <Grid columns={2} gap="xl" className="sm:grid-cols-2">
                {stats.map(renderStat)}
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Box>
    );
  }
);
StatsBlock.displayName = 'StatsBlock';
