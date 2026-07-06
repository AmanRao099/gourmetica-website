import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './Input';
import { Stack } from '@/core/primitives';

const meta: Meta<typeof Input> = {
  title: 'Core/Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Variants: Story = {
  render: () => (
    <Stack gap="md" className="max-w-sm">
      <Input placeholder="Default input" />
      <Input placeholder="Error input" hasError />
      <Input placeholder="Disabled input" disabled />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md" className="max-w-sm">
      <Input placeholder="Small" size="sm" />
      <Input placeholder="Medium" size="md" />
      <Input placeholder="Large" size="lg" />
    </Stack>
  ),
};
