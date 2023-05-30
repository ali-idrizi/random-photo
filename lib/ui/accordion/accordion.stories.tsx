import { cn } from '@/utils/cn'
import { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '.'

export default {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
  render: ({ children }) => (
    <div className="md:w-[40rem]">
      <Accordion className="divide-y divide-white/10 ">{children}</Accordion>
    </div>
  ),
} as Meta<typeof Accordion>

type Story = StoryObj<typeof Accordion>

const Item = () => (
  <Accordion.Item className="bg-white/[.03]">
    <Accordion.Button
      colorScheme="none"
      className="w-full justify-between gap-2 rounded p-4 text-left normal-case hover:bg-white/5 active:transform-none"
    >
      {({ isOpen }) => (
        <>
          What is Lorem Ipsum?
          <span className={cn('text-xs transition-transform', { '-rotate-180': isOpen })}>↓</span>
        </>
      )}
    </Accordion.Button>
    <Accordion.Panel className="p-4 text-sm leading-6">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </Accordion.Panel>
  </Accordion.Item>
)

const Basic: Story = {
  args: {
    children: (
      <>
        <Item />
        <Item />
        <Item />
      </>
    ),
  },
}

export { Basic as Accordion }
