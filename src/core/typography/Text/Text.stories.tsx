import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Text } from './Text';
import { Stack } from '@/core/primitives';

const meta: Meta<typeof Text> = {
  title: 'Core/Typography/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Scale: Story = {
  render: () => (
    <Stack gap="lg">
      <Text size="body-xl">Body XL: The quick brown fox jumps over the lazy dog.</Text>
      <Text size="body-lg">Body LG: The quick brown fox jumps over the lazy dog.</Text>
      <Text size="body">Body: The quick brown fox jumps over the lazy dog.</Text>
      <Text size="body-sm">Body SM: The quick brown fox jumps over the lazy dog.</Text>
    </Stack>
  ),
};
