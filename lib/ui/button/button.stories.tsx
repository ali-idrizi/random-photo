import { Button } from '@/ui/button'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    isLoading: { name: 'Loading', type: 'boolean' },
    children: { name: 'Content' },
    colorScheme: { name: 'Color Scheme' },
    size: { name: 'Size' },
    onClick: { action: 'clicked' },
  },
  parameters: {
    controls: {
      exclude: 'as',
    },
  },
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    colorScheme: 'primary',
    children: 'Button',
    isLoading: false,
    size: 'md',
  },
}

export const Secondary: Story = {
  args: {
    colorScheme: 'secondary',
    children: 'Button',
    isLoading: false,
    size: 'md',
  },
}

export const Danger: Story = {
  args: {
    colorScheme: 'danger',
    children: 'Button',
    isLoading: false,
    size: 'md',
  },
}

export const Success: Story = {
  args: {
    colorScheme: 'success',
    children: 'Button',
    isLoading: false,
    size: 'md',
  },
}

export const Outline: Story = {
  args: {
    colorScheme: 'outline',
    variant: 'test',
    children: 'Button',
    isLoading: false,
    size: 'md',
  },
}

export const Dark: Story = {
  args: {
    colorScheme: 'dark',
    children: 'Button',
    isLoading: false,
    size: 'md',
  },
}
