import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';
import { Surface, Stack } from '@/core/primitives';
import { Text } from '@/core/typography';

const meta: Meta<typeof Tabs> = {
  title: 'Core/Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="w-full grid grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Surface className="p-4">
          <Stack gap="sm">
            <Text weight="medium">Account Settings</Text>
            <Text size="body-sm" className="text-neutral-500">Make changes to your account here.</Text>
          </Stack>
        </Surface>
      </TabsContent>
      <TabsContent value="password">
        <Surface className="p-4">
          <Stack gap="sm">
            <Text weight="medium">Password</Text>
            <Text size="body-sm" className="text-neutral-500">Change your password here.</Text>
          </Stack>
        </Surface>
      </TabsContent>
    </Tabs>
  ),
};
