import * as React from 'react';
import { Stack, Flex, Box } from '@/core/primitives';
import { Heading, Text, Eyebrow } from '@/core/typography';
import { cn } from '@/core/utils';
import { SectionHeaderBlockProps } from './SectionHeaderBlock.types';

export const SectionHeaderBlock = React.forwardRef<HTMLDivElement, SectionHeaderBlockProps>(
  (
    {
      title,
      subtitle,
      description,
      actions,
      theme = 'light',
      alignment = 'left',
      className,
      ...props
    },
    ref
  ) => {
    const isDark = theme === 'dark';
    const isCenter = alignment === 'center';
    const isSplit = alignment === 'split';
    
    const textContent = (
      <Stack gap="sm" align={isCenter ? 'center' : 'start'} className={cn(isCenter && 'text-center', isSplit && 'flex-1')}>
        {subtitle && (
          <Eyebrow color={isDark ? 'brand' : 'neutral'}>
            {subtitle}
          </Eyebrow>
        )}
        <Heading level={2} size="heading-xl">
          {title}
        </Heading>
        {description && (
          <Text size="body-lg" className="max-w-3xl text-neutral-500">
            {description}
          </Text>
        )}
      </Stack>
    );

    if (isSplit) {
      return (
        <Box ref={ref} className={cn('w-full', isDark && 'dark text-white', className)} {...props}>
          <Flex direction="col" gap="xl" justify="between" className="md:flex-row items-start md:items-end">
            {textContent}
            {actions && (
              <Box className="shrink-0">
                {actions}
              </Box>
            )}
          </Flex>
        </Box>
      );
    }

    return (
      <Box ref={ref} className={cn('w-full', isDark && 'dark text-white', className)} {...props}>
        <Stack gap="lg" align={isCenter ? 'center' : 'start'}>
          {textContent}
          {actions && (
            <Flex gap="md" align="center" justify={isCenter ? 'center' : 'start'}>
              {actions}
            </Flex>
          )}
        </Stack>
      </Box>
    );
  }
);
SectionHeaderBlock.displayName = 'SectionHeaderBlock';
