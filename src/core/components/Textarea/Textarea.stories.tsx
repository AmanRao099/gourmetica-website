import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Textarea } from './Textarea';
import { Stack } from '@/core/primitives';

const meta: Meta<typeof Textarea> = {
  title: 'Core/Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Variants: Story = {
  render: () => (
    <Stack gap="md" className="max-w-sm">
      <Textarea placeholder="Default textarea" />
      <Textarea placeholder="Error textarea" hasError />
      <Textarea placeholder="Disabled textarea" disabled />
    </Stack>
  ),
};
