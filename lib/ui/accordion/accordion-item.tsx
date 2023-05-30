import { Disclosure, DisclosureProps } from '@/ui/disclosure'
import { ReactElement, useId } from 'react'
import { AccordionItemContent } from './accordion-item-content'

type AccordionItemProps = DisclosureProps

export const AccordionItem = ({ children, ...props }: AccordionItemProps): ReactElement => {
  const id = useId()

  return (
    <Disclosure transitionHeight {...props}>
      <AccordionItemContent id={id}>{children}</AccordionItemContent>
    </Disclosure>
  )
}
