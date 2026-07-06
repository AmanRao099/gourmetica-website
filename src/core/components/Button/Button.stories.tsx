import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './Button';
import { Flex, Stack } from '@/core/primitives';
import { Icon } from '../Icon';
import { Settings, ArrowRight } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Core/Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <Stack gap="md">
      <Flex gap="sm">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </Flex>
      <Flex gap="sm">
        <Button variant="primary" tone="danger">Danger Primary</Button>
        <Button variant="outline" tone="danger">Danger Outline</Button>
        <Button variant="primary" tone="neutral">Neutral Primary</Button>
        <Button variant="outline" tone="neutral">Neutral Outline</Button>
      </Flex>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap="sm" align="center">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </Flex>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Flex gap="sm">
      <Button>
        <Icon icon={Settings} size="sm" />
        Settings
      </Button>
      <Button variant="outline">
        Continue
        <Icon icon={ArrowRight} size="sm" />
      </Button>
    </Flex>
  ),
};
