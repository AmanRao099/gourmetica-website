import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { RadioGroup, RadioGroupItem } from './Radio';
import { Label } from '@/core/typography';
import { Flex } from '@/core/primitives';

const meta: Meta<typeof RadioGroup> = {
  title: 'Core/Components/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Variants: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <Flex gap="sm" align="center">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </Flex>
      <Flex gap="sm" align="center">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </Flex>
      <Flex gap="sm" align="center">
        <RadioGroupItem value="option-three" id="option-three" disabled />
        <Label htmlFor="option-three">Option Three (Disabled)</Label>
      </Flex>
      <Flex gap="sm" align="center">
        <RadioGroupItem value="option-error" id="option-error" hasError />
        <Label htmlFor="option-error">Option Error</Label>
      </Flex>
    </RadioGroup>
  ),
};
