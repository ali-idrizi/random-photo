import { Meta, StoryObj } from '@storybook/react'
import { Home } from '.'

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen pt-16">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Home>

type Story = StoryObj<typeof Home>

const Default: Story = {}

export { Default as Home }
