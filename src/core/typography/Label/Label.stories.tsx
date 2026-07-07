import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Label } from './Label';
import { Stack } from '@/core/primitives';

const meta: Meta<typeof Label> = {
  title: 'Core/Typography/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Scale: Story = {
  render: () => (
    <Stack gap="lg">
      <Label size="large">Large Label</Label>
      <Label size="default">Default Label</Label>
    </Stack>
  ),
};
