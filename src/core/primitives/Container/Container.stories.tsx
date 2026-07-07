import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Core/Primitives/Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: 'Centered layout constraint',
    className: 'bg-primary/10 p-4 border border-primary text-center',
  },
};
