import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Skeleton } from './Skeleton';
import { Stack, Flex } from '@/core/primitives';

const meta: Meta<typeof Skeleton> = {
  title: 'Core/Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <Flex gap="md" align="center">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Stack gap="sm">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </Stack>
    </Flex>
  ),
};
