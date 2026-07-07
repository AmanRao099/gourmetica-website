import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Core/Primitives/Box',
  component: Box,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: 'This is a Box component',
    className: 'bg-neutral-100 p-4 rounded-md',
  },
};

export const AsSection: Story = {
  args: {
    as: 'section',
    children: 'This Box renders as a <section>',
    className: 'bg-primary/10 text-primary p-4 rounded-md',
  },
};
