import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from './Drawer';
import { Button } from '../Button';
import { Flex } from '@/core/primitives';

const meta: Meta<typeof Drawer> = {
  title: 'Core/Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Sides: Story = {
  render: () => (
    <Flex gap="md">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Left Drawer</Button>
        </DrawerTrigger>
        <DrawerContent side="left">
          <DrawerHeader>
            <DrawerTitle>Left Drawer</DrawerTitle>
            <DrawerDescription>This drawer slides in from the left.</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
      
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Right Drawer</Button>
        </DrawerTrigger>
        <DrawerContent side="right">
          <DrawerHeader>
            <DrawerTitle>Right Drawer</DrawerTitle>
            <DrawerDescription>This drawer slides in from the right.</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </Flex>
  ),
};
