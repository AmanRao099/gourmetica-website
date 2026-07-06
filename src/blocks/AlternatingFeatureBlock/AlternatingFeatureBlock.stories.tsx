import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AlternatingFeatureBlock } from './AlternatingFeatureBlock';
import { Image, Button } from '@/core/components';

const meta: Meta<typeof AlternatingFeatureBlock> = {
  title: 'Blocks/AlternatingFeatureBlock',
  component: AlternatingFeatureBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AlternatingFeatureBlock>;

const featuresList = [
  {
    title: 'Curated Recipes',
    subtitle: 'Step-by-step',
    description: 'Learn exactly how to prepare a dish with guided instructions from world-renowned chefs. Never get lost in the kitchen again.',
    media: (
      <Image 
        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800&h=600"
        alt="Chef cooking"
        width={800}
        height={600}
        aspectRatio="video"
        className="object-cover"
      />
    ),
    actions: <Button>View Recipes</Button>,
  },
  {
    title: 'Ingredient Sourcing',
    subtitle: 'Local & Organic',
    description: 'We connect you with local farmers and suppliers so you always have the best ingredients for your meals. Freshness guaranteed.',
    media: (
      <Image 
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800&h=600"
        alt="Fresh vegetables"
        width={800}
        height={600}
        aspectRatio="video"
        className="object-cover"
      />
    ),
  },
  {
    title: 'Masterclasses',
    subtitle: 'Learn from the best',
    description: 'Join exclusive live sessions with Michelin-starred chefs and learn their signature techniques in real-time.',
    media: (
      <Image 
        src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800&h=600"
        alt="Chef presenting"
        width={800}
        height={600}
        aspectRatio="video"
        className="object-cover"
      />
    ),
    actions: <Button variant="outline">Browse Classes</Button>,
  },
];

export const Default: Story = {
  args: {
    title: 'Everything you need to master your kitchen',
    subtitle: 'Features',
    description: 'Gourmetica provides a comprehensive suite of tools for culinary enthusiasts of all levels.',
    features: featuresList,
  },
};

export const Dark: Story = {
  args: {
    ...Default.args,
    theme: 'dark',
  },
};
