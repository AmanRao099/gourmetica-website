import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';
import { Button } from '../Button';
import { Label, Text } from '@/core/typography';
import { Input } from '../Input';
import { Stack, Flex } from '@/core/primitives';

const meta: Meta<typeof Popover> = {
  title: 'Core/Components/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Settings</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Stack gap="md">
          <Stack gap="xs">
            <Text weight="medium">Dimensions</Text>
            <Text size="body-sm" className="text-neutral-500">Set the dimensions for the layer.</Text>
          </Stack>
          <Flex align="center" justify="between" gap="sm">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" className="h-8 w-2/3" />
          </Flex>
          <Flex align="center" justify="between" gap="sm">
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="25px" className="h-8 w-2/3" />
          </Flex>
        </Stack>
      </PopoverContent>
    </Popover>
  ),
};
