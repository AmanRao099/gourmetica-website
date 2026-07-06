import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LogoCloudBlock } from './LogoCloudBlock';

const meta: Meta<typeof LogoCloudBlock> = {
  title: 'Blocks/LogoCloudBlock',
  component: LogoCloudBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LogoCloudBlock>;

const sampleLogos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', alt: 'Google' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', alt: 'IBM' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', alt: 'Netflix' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', alt: 'Amazon' },
];

export const Inline: Story = {
  args: {
    title: 'Trusted by the best',
    logos: sampleLogos,
    variant: 'inline',
  },
};

export const Grid: Story = {
  args: {
    ...Inline.args,
    variant: 'grid',
  },
};

export const Marquee: Story = {
  args: {
    ...Inline.args,
    variant: 'marquee',
  },
};
