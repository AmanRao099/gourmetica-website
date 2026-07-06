import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AspectRatio } from './AspectRatio';
import { Box } from '../Box';

const meta: Meta<typeof AspectRatio> = {
  title: 'Core/Primitives/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default1by1: Story = {
  args: {
    ratio: 1,
    children: <Box className="bg-primary/20 w-full h-full flex items-center justify-center">1:1</Box>,
    className: 'w-64',
  },
};

export const Video16by9: Story = {
  args: {
    ratio: 16/9,
    children: <Box className="bg-primary/20 w-full h-full flex items-center justify-center">16:9</Box>,
    className: 'w-96',
  },
};
