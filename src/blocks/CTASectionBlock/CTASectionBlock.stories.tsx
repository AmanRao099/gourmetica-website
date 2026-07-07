import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CTASectionBlock } from './CTASectionBlock';
import { Button } from '@/core/components';

const meta: Meta<typeof CTASectionBlock> = {
  title: 'Blocks/CTASectionBlock',
  component: CTASectionBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CTASectionBlock>;

export const CenteredBrand: Story = {
  args: {
    title: 'Ready to elevate your business?',
    subtitle: 'Get Started',
    description: 'Join thousands of satisfied clients who have transformed their culinary experiences with Gourmetica.',
    theme: 'brand',
    variant: 'centered',
    actions: (
      <>
        <Button size="lg" variant="secondary">Contact Sales</Button>
      </>
    ),
  },
};

export const BannerLight: Story = {
  args: {
    ...CenteredBrand.args,
    theme: 'light',
    variant: 'banner',
    actions: (
      <Button size="lg">Get Started</Button>
    ),
  },
};

export const SplitDark: Story = {
  args: {
    ...CenteredBrand.args,
    theme: 'dark',
    variant: 'split',
    actions: (
      <Button size="lg" variant="primary">Get Started</Button>
    ),
  },
};
