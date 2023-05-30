import { Meta, StoryObj } from '@storybook/react'
import { Disclosure } from '.'

export default {
  title: 'UI/Disclosure',
  component: Disclosure,
  argTypes: {
    scrollIntoView: { name: 'scrollIntoView', type: 'boolean' },
    transitionHeight: { name: 'transitionHeight', type: 'boolean' },
  },
  parameters: {
    controls: {
      include: ['scrollIntoView', 'transitionHeight'],
    },
  },
  args: {
    scrollIntoView: false,
    transitionHeight: false,
  },
  render: ({ children, ...args }, { parameters }) => (
    <>
      {parameters.addContent && (
        <div className="mb-6 flex h-[80vh] items-center justify-center bg-white/5 text-xs uppercase text-gray-100">
          Content
        </div>
      )}
      <Disclosure className="md:w-[40rem]" {...args}>
        <Disclosure.Button>Toggle</Disclosure.Button>
        <Disclosure.Panel>{children}</Disclosure.Panel>
      </Disclosure>
    </>
  ),
} as Meta<typeof Disclosure>

type Story = StoryObj<typeof Disclosure>

export const Basic: Story = {
  args: {
    transitionHeight: false,
    children: <div className="mt-6 h-96 w-full bg-rose-600 py-2" />,
  },
}

export const HeightTransition: Story = {
  args: {
    transitionHeight: true,
    children: (
      <div className="mt-6 w-full bg-rose-600 p-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
    ),
  },
}

export const ScrollIntoView: Story = {
  args: {
    scrollIntoView: true,
    transitionHeight: true,
    children: (
      <div className="h-80 py-6">
        <div className="h-full bg-rose-600" />
      </div>
    ),
  },
  parameters: {
    addContent: true,
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
