import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Heading } from './Heading';
import { Stack } from '@/core/primitives';

const meta: Meta<typeof Heading> = {
  title: 'Core/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Scale: Story = {
  render: () => (
    <Stack gap="lg">
      <Heading size="display-xl">Display XL</Heading>
      <Heading size="display-lg">Display LG</Heading>
      <Heading size="heading-xl">Heading XL</Heading>
      <Heading size="heading-lg">Heading LG</Heading>
      <Heading size="heading-md">Heading MD</Heading>
      <Heading size="heading-sm">Heading SM</Heading>
    </Stack>
  ),
};
