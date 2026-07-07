import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Surface } from './Surface';
import { Box } from '../Box';

const meta: Meta<typeof Surface> = {
  title: 'Core/Primitives/Surface',
  component: Surface,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Surface>;

export const Variants: Story = {
  render: () => (
    <Box className="flex flex-col gap-8 p-12 bg-neutral-100 min-h-[400px]">
      <Surface variant="default" className="p-6">Default Surface</Surface>
      <Surface variant="card" className="p-6">Card Surface</Surface>
      <Surface variant="elevated" className="p-6">Elevated Surface</Surface>
      <Surface variant="interactive" className="p-6">Interactive Surface</Surface>
      <Surface variant="glass" className="p-6">Glass Surface</Surface>
      <Surface variant="dark" className="p-6">Dark Surface</Surface>
    </Box>
  ),
};
