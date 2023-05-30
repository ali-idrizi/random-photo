'use client'

import { PropsOf } from '@/types/react'
import { Disclosure } from '@/ui/disclosure'
import { ReactElement, useMemo, useState } from 'react'
import { AccordionContext } from './accordion-context'
import { AccordionItem } from './accordion-item'

type AccordionProps = PropsOf<'div'>

export const Accordion = ({ children, ...props }: AccordionProps): ReactElement => {
  const [openId, setOpenId] = useState<string | null>(null)
  const contextValue = useMemo(() => ({ openId, setOpenId }), [openId])

  return (
    <div {...props}>
      <AccordionContext.Provider value={contextValue}>{children}</AccordionContext.Provider>
    </div>
  )
}

Accordion.Item = AccordionItem
Accordion.Button = Disclosure.Button
Accordion.Panel = Disclosure.Panel
