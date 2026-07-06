import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MetricsBlock } from './MetricsBlock';

const meta: Meta<typeof MetricsBlock> = {
  title: 'Blocks/MetricsBlock',
  component: MetricsBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MetricsBlock>;

const metricsList = [
  { label: 'Michelin Chefs', value: '50+' },
  { label: 'Premium Recipes', value: '2,000+' },
  { label: 'Active Students', value: '100k' },
  { label: 'Hours of Video', value: '500+' },
];

export const Default: Story = {
  args: {
    title: 'Trusted by culinary enthusiasts globally',
    subtitle: 'By the numbers',
    metrics: metricsList,
  },
};

export const BrandTheme: Story = {
  args: {
    ...Default.args,
    theme: 'brand',
  },
};
