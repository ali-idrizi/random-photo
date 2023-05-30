import { createContext, useContext } from 'react'

type AccordionContextProps = {
  openId: string | null
  setOpenId: (id: string | null) => void
}

export const AccordionContext = createContext<AccordionContextProps | null>(null)

export const useAccordion = (): AccordionContextProps => {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error('Accordion context missing!')
  }

  return context
}
