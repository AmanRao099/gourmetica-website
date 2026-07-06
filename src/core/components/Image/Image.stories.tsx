import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Image } from './Image';
import { Flex } from '@/core/primitives';

const meta: Meta<typeof Image> = {
  title: 'Core/Components/Image',
  component: Image,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: () => (
    <Flex gap="md">
      <Image 
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400&h=300"
        alt="Gourmet food"
        width={400}
        height={300}
        radius="md"
        className="shadow-sm"
      />
      <Image 
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=300&h=300"
        alt="Gourmet food square"
        width={300}
        height={300}
        aspectRatio="square"
        radius="full"
      />
    </Flex>
  ),
};
