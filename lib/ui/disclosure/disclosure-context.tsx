import { createContext, useContext } from 'react'

type DisclosureContextProps = {
  isOpen: boolean
  scrollIntoView?: boolean
  transitionHeight?: boolean
  close: (restoreFocus?: boolean) => void
}

export const DisclosureContext = createContext<DisclosureContextProps | null>(null)

export const useDisclosure = (): DisclosureContextProps => {
  const context = useContext(DisclosureContext)

  if (!context) {
    throw new Error('Disclosure context missing!')
  }

  return context
}
