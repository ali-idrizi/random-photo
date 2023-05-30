import { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './spinner'

export default {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    controls: {
      exclude: 'className',
    },
  },
} as Meta<typeof Spinner>

type Story = StoryObj<typeof Spinner>

const Basic: Story = {
  args: {
    colorScheme: 'primary',
    size: 'md',
  },
}

export { Basic as Spinner }
