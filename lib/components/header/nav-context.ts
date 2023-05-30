import { createContext, useContext } from 'react'

type DisclosureContextProps = {
  isMobile: boolean
}

export const NavContext = createContext<DisclosureContextProps>({ isMobile: false })

export const useNav = (): DisclosureContextProps => {
  const context = useContext(NavContext)

  if (!context) {
    throw new Error('Nav context missing!')
  }

  return context
}
