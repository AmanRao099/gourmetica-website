import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SectionHeaderBlock } from './SectionHeaderBlock';
import { Button } from '@/core/components';
import { Container } from '@/core/primitives';

const meta: Meta<typeof SectionHeaderBlock> = {
  title: 'Blocks/SectionHeaderBlock',
  component: SectionHeaderBlock,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container className="py-12">
        <Story />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SectionHeaderBlock>;

export const Left: Story = {
  args: {
    title: 'Explore our services',
    subtitle: 'What we offer',
    description: 'We offer a wide variety of culinary services, designed to elevate your brand and impress your clients.',
    alignment: 'left',
  },
};

export const Center: Story = {
  args: {
    ...Left.args,
    alignment: 'center',
    actions: (
      <>
        <Button>View All Services</Button>
      </>
    ),
  },
};

export const Split: Story = {
  args: {
    ...Left.args,
    alignment: 'split',
    actions: (
      <Button variant="outline">View All Services</Button>
    ),
  },
};
