import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from './Tooltip';
import { IconButton } from '../IconButton';
import { Info } from 'lucide-react';
import { Flex } from '@/core/primitives';

const meta: Meta<typeof Tooltip> = {
  title: 'Core/Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Flex align="center" justify="center" className="h-[200px]">
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton icon={Info} variant="ghost" aria-label="More information" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </Flex>
  ),
};
