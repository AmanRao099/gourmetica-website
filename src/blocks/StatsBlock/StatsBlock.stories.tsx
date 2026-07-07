import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StatsBlock } from './StatsBlock';

const meta: Meta<typeof StatsBlock> = {
  title: 'Blocks/StatsBlock',
  component: StatsBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatsBlock>;

const statsList = [
  { label: 'Founded', value: '2019' },
  { label: 'Employees', value: '120' },
  { label: 'Countries', value: '15' },
  { label: 'Revenue', value: '$50M' },
];

export const Split: Story = {
  args: {
    title: 'Growing fast, scaling globally',
    description: 'We are on a mission to bring culinary excellence to every household in the world, backed by the best investors.',
    stats: statsList,
    layout: 'split',
  },
};

export const InlineBrand: Story = {
  args: {
    stats: statsList,
    layout: 'inline',
    theme: 'brand',
  },
};
