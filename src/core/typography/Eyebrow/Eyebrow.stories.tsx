import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Eyebrow } from './Eyebrow';
import { Stack } from '@/core/primitives';

const meta: Meta<typeof Eyebrow> = {
  title: 'Core/Typography/Eyebrow',
  component: Eyebrow,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Eyebrow>;

export const Variants: Story = {
  render: () => (
    <Stack gap="md">
      <Eyebrow color="brand" size="md">Brand Eyebrow (MD)</Eyebrow>
      <Eyebrow color="brand" size="sm">Brand Eyebrow (SM)</Eyebrow>
      <Eyebrow color="neutral" size="md">Neutral Eyebrow (MD)</Eyebrow>
      <Eyebrow color="neutral" size="sm">Neutral Eyebrow (SM)</Eyebrow>
    </Stack>
  ),
};
