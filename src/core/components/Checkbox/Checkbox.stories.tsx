import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Checkbox } from './Checkbox';
import { Label } from '@/core/typography';
import { Flex, Stack } from '@/core/primitives';

const meta: Meta<typeof Checkbox> = {
  title: 'Core/Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Variants: Story = {
  render: () => (
    <Stack gap="md">
      <Flex gap="sm" align="center">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </Flex>
      <Flex gap="sm" align="center">
        <Checkbox id="error-cb" hasError />
        <Label htmlFor="error-cb">Error state</Label>
      </Flex>
      <Flex gap="sm" align="center">
        <Checkbox id="disabled-cb" disabled />
        <Label htmlFor="disabled-cb">Disabled state</Label>
      </Flex>
    </Stack>
  ),
};
