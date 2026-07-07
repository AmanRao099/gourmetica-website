import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TestimonialsBlock } from './TestimonialsBlock';

const meta: Meta<typeof TestimonialsBlock> = {
  title: 'Blocks/TestimonialsBlock',
  component: TestimonialsBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestimonialsBlock>;

const testimonialsList = [
  {
    quote: "Gourmetica changed the way our kitchen operates. The masterclasses elevated our staff's skills entirely.",
    author: {
      name: 'Gordon R.',
      role: 'Executive Chef',
      company: 'Hell\'s Kitchen',
      avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=150&h=150',
    }
  },
  {
    quote: "The ingredient sourcing feature alone is worth the investment. We get the freshest organic produce delivered consistently.",
    author: {
      name: 'Alice W.',
      role: 'Owner',
      company: 'Chez Panisse',
    }
  },
  {
    quote: "I started as a home cook and now I'm opening my own restaurant. The recipes and techniques here are unparalleled.",
    author: {
      name: 'Marco P.',
      role: 'Food Enthusiast',
    }
  },
  {
    quote: "We use the platform to train all our new sous-chefs. It's incredibly comprehensive and easy to follow.",
    author: {
      name: 'Julia C.',
      role: 'Head of Training',
      company: 'Culinary Institute',
    }
  }
];

export const Grid: Story = {
  args: {
    title: 'Trusted by culinary professionals',
    subtitle: 'Testimonials',
    description: 'See what our community has to say about their experience with Gourmetica.',
    testimonials: testimonialsList.slice(0, 3),
    layout: 'grid',
  },
};

export const Featured: Story = {
  args: {
    ...Grid.args,
    testimonials: testimonialsList,
    layout: 'featured',
  },
};

export const Dark: Story = {
  args: {
    ...Grid.args,
    theme: 'dark',
  },
};
