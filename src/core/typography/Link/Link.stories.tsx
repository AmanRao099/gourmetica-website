import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Link } from './Link';
import { Stack } from '@/core/primitives';

const meta: Meta<typeof Link> = {
  title: 'Core/Typography/Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Variants: Story = {
  render: () => (
    <Stack gap="md">
      <Link href="#" variant="default">Default Link</Link>
      <Link href="#" variant="subtle">Subtle Link</Link>
      <Link href="#" variant="nav">Navigation Link</Link>
    </Stack>
  ),
};

export const External: Story = {
  args: {
    href: 'https://google.com',
    isExternal: true,
    children: 'External Link',
  },
};
