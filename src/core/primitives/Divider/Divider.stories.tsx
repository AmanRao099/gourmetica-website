import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Divider } from './Divider';
import { Box } from '../Box';
import { Flex } from '../Flex';

const meta: Meta<typeof Divider> = {
  title: 'Core/Primitives/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <Box className="w-full">
      <Box className="p-4">Top Content</Box>
      <Divider />
      <Box className="p-4">Bottom Content</Box>
    </Box>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Flex className="h-24">
      <Box className="p-4">Left Content</Box>
      <Divider orientation="vertical" />
      <Box className="p-4">Right Content</Box>
    </Flex>
  ),
};
