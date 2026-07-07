import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Spinner } from './Spinner';
import { Flex } from '@/core/primitives';

const meta: Meta<typeof Spinner> = {
  title: 'Core/Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Sizes: Story = {
  render: () => (
    <Flex gap="md" align="center">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </Flex>
  ),
};

export const Tones: Story = {
  render: () => (
    <Flex gap="md" align="center" className="p-4 bg-neutral-100">
      <Spinner tone="brand" />
      <Spinner tone="neutral" />
      <div className="bg-neutral-900 p-2 rounded">
        <Spinner tone="white" />
      </div>
    </Flex>
  ),
};
