import { Meta, StoryObj } from '@storybook/react'
import { MainLayout } from './main'

export default {
  title: 'Layouts/Main',
  component: MainLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof MainLayout>

type Story = StoryObj<typeof MainLayout>

const Default: Story = {
  render: () => (
    <MainLayout>
      <div className="flex w-full grow items-center justify-center text-xs uppercase text-gray-100">
        Content
      </div>
    </MainLayout>
  ),
}

export { Default as Main }
