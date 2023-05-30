import { usePrevious } from '@/hooks'
import { useDisclosure } from '@/ui/disclosure'
import { PropsWithChildren, ReactElement, useEffect } from 'react'
import { useAccordion } from './accordion-context'

type AccordionItemContentProps = PropsWithChildren<{
  id: string
}>

export const AccordionItemContent = ({ id, children }: AccordionItemContentProps): ReactElement => {
  const { isOpen, close } = useDisclosure()
  const { openId, setOpenId } = useAccordion()
  const prevIsOpen = usePrevious(isOpen)

  useEffect(() => {
    if (isOpen) {
      if (prevIsOpen !== isOpen) {
        setOpenId(id)
      } else if (openId !== id) {
        close(false)
      }
    }
  }, [prevIsOpen, isOpen, openId, id, setOpenId, close])

  return <>{children}</>
}
