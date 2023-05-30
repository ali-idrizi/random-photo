import { Meta, StoryObj } from '@storybook/react'
import { Footer } from '.'

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Footer>

type Story = StoryObj<typeof Footer>

const Default: Story = {}

export { Default as Footer }
