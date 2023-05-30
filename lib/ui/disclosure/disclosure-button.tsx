import { Button, ButtonProps } from '@/ui/button'
import { Disclosure as HeadlessDisclosure } from '@headlessui/react'
import { ReactNode, forwardRef } from 'react'
import { useDisclosure } from './disclosure-context'

type DisclosureButtonProps = Omit<ButtonProps, 'children'> & {
  children?: ReactNode | ((args: { isOpen: boolean }) => ReactNode)
}

export const DisclosureButton = forwardRef<HTMLButtonElement, DisclosureButtonProps>(
  ({ children, ...props }, ref) => {
    const { isOpen } = useDisclosure()

    return (
      <HeadlessDisclosure.Button as={Button} {...props} ref={ref}>
        {typeof children === 'function' ? children({ isOpen }) : children}
      </HeadlessDisclosure.Button>
    )
  },
)
DisclosureButton.displayName = 'DisclosureButton'
