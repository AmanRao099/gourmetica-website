import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { IconButton } from './IconButton';
import { Flex } from '@/core/primitives';
import { Settings, Heart, Share, Trash } from 'lucide-react';

const meta: Meta<typeof IconButton> = {
  title: 'Core/Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Variants: Story = {
  render: () => (
    <Flex gap="sm">
      <IconButton icon={Settings} aria-label="Settings" variant="primary" />
      <IconButton icon={Heart} aria-label="Like" variant="secondary" />
      <IconButton icon={Share} aria-label="Share" variant="outline" />
      <IconButton icon={Trash} aria-label="Delete" variant="ghost" tone="danger" />
    </Flex>
  ),
};
