import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FeatureGridBlock } from './FeatureGridBlock';
import { Leaf, Award, ChefHat, Clock, Coffee, Heart } from 'lucide-react';

const meta: Meta<typeof FeatureGridBlock> = {
  title: 'Blocks/FeatureGridBlock',
  component: FeatureGridBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeatureGridBlock>;

const featuresList = [
  {
    title: 'Fresh Ingredients',
    description: 'We source only the freshest, organic ingredients from local farms.',
    icon: Leaf,
  },
  {
    title: 'Award Winning',
    description: 'Recognized by top culinary institutions worldwide.',
    icon: Award,
  },
  {
    title: 'Master Chefs',
    description: 'Learn and dine with Michelin-starred professionals.',
    icon: ChefHat,
  },
  {
    title: 'Quick Preparation',
    description: 'Master techniques that save time without compromising quality.',
    icon: Clock,
  },
  {
    title: 'Artisan Beverages',
    description: 'Pair your meals with expertly crafted drinks.',
    icon: Coffee,
  },
  {
    title: 'Made with Love',
    description: 'Every recipe is tested and perfected for the best experience.',
    icon: Heart,
  },
];

export const Minimal3Col: Story = {
  args: {
    title: 'Why choose Gourmetica?',
    subtitle: 'Our Advantages',
    description: 'Experience the ultimate platform designed for culinary excellence and learning.',
    features: featuresList,
    columns: 3,
    variant: 'minimal',
  },
};

export const Cards4Col: Story = {
  args: {
    title: 'Comprehensive Features',
    features: featuresList.slice(0, 4),
    columns: 2, // will be 2 on md, but we want 4 on lg if we override, wait, let's just pass 4. Actually, 4 columns for 4 items.
  },
};
// Overriding args to properly show 4 columns
Cards4Col.args!.columns = 4;
Cards4Col.args!.variant = 'cards';

export const CardsDark: Story = {
  args: {
    ...Minimal3Col.args,
    variant: 'cards',
    theme: 'dark',
  },
};
