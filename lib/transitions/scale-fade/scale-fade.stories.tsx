import { ScaleFade } from '@/transitions/scale-fade'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Transitions/Scale Fade',
  component: ScaleFade,
  argTypes: {
    show: { name: 'Show' },
    size: { name: 'Size' },
    speed: { name: 'Speed' },
  },
  parameters: {
    controls: {
      exclude: 'as|appear|isGroup|unmount',
    },
  },
} as Meta

const Placeholder = () => (
  <div className="bg-rose-600 p-4">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
  </div>
)

type Story = StoryObj<typeof ScaleFade>

export const Basic: Story = {
  args: {
    show: true,
    size: 'md',
    speed: 'normal',
  },
  render: (props) => (
    <ScaleFade appear {...props} className="w-80">
      <Placeholder />
    </ScaleFade>
  ),
}

export const Grouped: Story = {
  args: {
    show: true,
    size: 'md',
    speed: 'normal',
  },
  render: ({ show, ...props }) => (
    <ScaleFade isGroup appear show={show} className="flex w-80 flex-col gap-1">
      <ScaleFade.Child {...props}>
        <Placeholder />
      </ScaleFade.Child>
      <ScaleFade.Child {...props}>
        <Placeholder />
      </ScaleFade.Child>
      <ScaleFade.Child {...props}>
        <Placeholder />
      </ScaleFade.Child>
    </ScaleFade>
  ),
}
