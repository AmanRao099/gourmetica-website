import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Flex } from './Flex';
import { Box } from '../Box';

const meta: Meta<typeof Flex> = {
  title: 'Core/Primitives/Flex',
  component: Flex,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const DefaultRow: Story = {
  args: {
    direction: 'row',
    gap: 'md',
    children: (
      <>
        <Box className="bg-primary/20 p-4">Item 1</Box>
        <Box className="bg-primary/20 p-4">Item 2</Box>
        <Box className="bg-primary/20 p-4">Item 3</Box>
      </>
    ),
  },
};

export const JustifyBetween: Story = {
  args: {
    direction: 'row',
    justify: 'between',
    className: 'w-full bg-neutral-100 p-4',
    children: (
      <>
        <Box className="bg-primary text-white p-2">Left</Box>
        <Box className="bg-primary text-white p-2">Right</Box>
      </>
    ),
  },
};
