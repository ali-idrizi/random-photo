import { Meta, StoryObj } from '@storybook/react'
import { View } from '.'

export default {
  title: 'Pages/View',
  component: View,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof View>

type Story = StoryObj<typeof View>

const Default: Story = {
  args: {
    id: 123,
    withTitle: true,
  },
}

export { Default as View }
