import { Heading } from '@/ui/heading'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../button'
import { Modal } from './modal'

export default {
  title: 'UI/Modal',
  component: Modal,
} as Meta

const Template: StoryFn<typeof Heading> = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header title="Sample Modal" />
        <Modal.Section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officia, temporibus
          asperiores magnam cumque animi autem laborum deleniti iure aliquid amet nesciunt molestiae
          provident! Similique recusandae rem libero ut autem.
        </Modal.Section>
      </Modal>
    </>
  )
}

export const Basic = Template.bind({})
