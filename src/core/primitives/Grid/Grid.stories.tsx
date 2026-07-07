import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Grid } from './Grid';
import { Box } from '../Box';

const meta: Meta<typeof Grid> = {
  title: 'Core/Primitives/Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    gap: 'md',
    children: (
      <>
        <Box className="bg-primary/20 p-4 w-full h-24" />
        <Box className="bg-primary/20 p-4 w-full h-24" />
        <Box className="bg-primary/20 p-4 w-full h-24" />
        <Box className="bg-primary/20 p-4 w-full h-24" />
      </>
    ),
  },
};
