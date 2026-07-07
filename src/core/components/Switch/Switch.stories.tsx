import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Switch } from './Switch';
import { Label } from '@/core/typography';
import { Flex, Stack } from '@/core/primitives';

const meta: Meta<typeof Switch> = {
  title: 'Core/Components/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Variants: Story = {
  render: () => (
    <Stack gap="md">
      <Flex gap="sm" align="center">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </Flex>
      <Flex gap="sm" align="center">
        <Switch id="disabled" disabled />
        <Label htmlFor="disabled">Disabled</Label>
      </Flex>
    </Stack>
  ),
};
