import { MainLayout } from '@/layouts/main'
import { Meta, StoryObj } from '@storybook/react'
import { LibraryLayout } from '.'

export default {
  title: 'Layouts/Library',
  component: LibraryLayout,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MainLayout>
        <Story />
      </MainLayout>
    ),
  ],
} as Meta<typeof LibraryLayout>

type Story = StoryObj<typeof LibraryLayout>

const Default: Story = {
  render: () => (
    <LibraryLayout>
      <div className="flex w-full items-center justify-center text-xs uppercase text-gray-100">
        Content
      </div>
    </LibraryLayout>
  ),
}

export { Default as Library }
