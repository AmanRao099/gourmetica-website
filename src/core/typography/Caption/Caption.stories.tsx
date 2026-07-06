import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Caption } from './Caption';
import { Stack } from '@/core/primitives';

const meta: Meta<typeof Caption> = {
  title: 'Core/Typography/Caption',
  component: Caption,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Caption>;

export const Variants: Story = {
  render: () => (
    <Stack gap="sm">
      <Caption color="default">Default caption text</Caption>
      <Caption color="error">Error caption text</Caption>
      <Caption color="success">Success caption text</Caption>
    </Stack>
  ),
};
