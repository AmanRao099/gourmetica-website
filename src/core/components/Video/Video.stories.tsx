import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Video } from './Video';

const meta: Meta<typeof Video> = {
  title: 'Core/Components/Video',
  component: Video,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Video>;

export const Default: Story = {
  render: () => (
    <Video 
      className="w-full max-w-md"
      controls
      poster="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400&h=300"
    >
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
    </Video>
  ),
};
