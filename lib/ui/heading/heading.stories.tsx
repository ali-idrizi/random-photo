import { Heading } from '@/ui/heading'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'UI/Heading',
  component: Heading,
} as Meta<typeof Heading>

type Story = StoryObj<typeof Heading>

export const Heading1: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1',
  },
}

export const Heading2: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2',
  },
}

export const Heading3: Story = {
  args: {
    as: 'h3',
    children: 'Heading 3',
  },
}

export const Heading4: Story = {
  args: {
    as: 'h4',
    children: 'Heading 4',
  },
}

export const Heading5: Story = {
  args: {
    as: 'h5',
    children: 'Heading 5',
  },
}

export const Heading6: Story = {
  args: {
    as: 'h6',
    children: 'Heading 6',
  },
}
