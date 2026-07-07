import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Icon } from './Icon';
import { Settings, Home, User, Mail } from 'lucide-react';
import { Flex } from '@/core/primitives';

const meta: Meta<typeof Icon> = {
  title: 'Core/Components/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Sizes: Story = {
  render: () => (
    <Flex gap="md" align="center">
      <Icon icon={Settings} size="sm" />
      <Icon icon={Settings} size="md" />
      <Icon icon={Settings} size="lg" />
      <Icon icon={Settings} size="xl" />
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex gap="md" align="center">
      <Icon icon={Home} className="text-brand-500" />
      <Icon icon={User} className="text-neutral-500" />
      <Icon icon={Mail} className="text-danger-500" />
    </Flex>
  ),
};
