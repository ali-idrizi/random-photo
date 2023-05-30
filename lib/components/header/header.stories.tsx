import { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Header>

type Story = StoryObj<typeof Header>

export const LoggedIn: Story = {}
