import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { HeroBlock } from './HeroBlock';
import { Button } from '@/core/components';
import { Image } from '@/core/components';

const meta: Meta<typeof HeroBlock> = {
  title: 'Blocks/HeroBlock',
  component: HeroBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeroBlock>;

export const MinimalLeft: Story = {
  args: {
    title: 'Transform your culinary experience.',
    subtitle: 'Gourmetica Platform',
    description: 'We bring the world’s finest ingredients to your kitchen, paired with exceptional recipes and masterclasses from Michelin-starred chefs.',
    alignment: 'left',
    variant: 'minimal',
    actions: (
      <>
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="ghost">Learn More</Button>
      </>
    ),
  },
};

export const MinimalCenter: Story = {
  args: {
    ...MinimalLeft.args,
    alignment: 'center',
  },
};

export const Split: Story = {
  args: {
    ...MinimalLeft.args,
    variant: 'split',
    media: (
      <Image 
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800&h=800"
        alt="Gourmet dish"
        width={800}
        height={800}
        aspectRatio="square"
        radius="lg"
        className="shadow-xl"
      />
    ),
  },
};

export const ImageBackground: Story = {
  args: {
    ...MinimalCenter.args,
    variant: 'image',
    theme: 'dark',
    media: (
      <Image 
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1920&h=1080"
        alt="Gourmet dish background"
        width={1920}
        height={1080}
        radius="none"
        className="object-cover h-full w-full"
      />
    ),
  },
};
