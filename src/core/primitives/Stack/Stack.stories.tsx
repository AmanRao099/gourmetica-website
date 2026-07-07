import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Stack } from './Stack';
import { Box } from '../Box';

const meta: Meta<typeof Stack> = {
  title: 'Core/Primitives/Stack',
  component: Stack,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    className: 'gap-4',
    children: (
      <>
        <Box className="bg-primary/20 p-4 w-full">Item 1</Box>
        <Box className="bg-primary/20 p-4 w-full">Item 2</Box>
        <Box className="bg-primary/20 p-4 w-full">Item 3</Box>
      </>
    ),
  },
};
