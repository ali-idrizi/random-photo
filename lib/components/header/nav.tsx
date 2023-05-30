'use client'

import { ReactElement, useMemo } from 'react'
import { NavContext } from './nav-context'
import { NavLink } from './nav-link'
import { PricingButton } from './pricing-button'

type NavProps = {
  isMobile?: boolean
  className?: string
}
export const Nav = ({ className, isMobile = false }: NavProps): ReactElement => {
  const navContext = useMemo(() => {
    return { isMobile }
  }, [isMobile])

  return (
    <NavContext.Provider value={navContext}>
      <nav className={className}>
        <NavLink href="/" targetSegment={null}>
          Home
        </NavLink>
        <NavLink href="/library" targetSegment="(library)">
          Library
        </NavLink>
        <NavLink href="/about" targetSegment="about">
          About
        </NavLink>
        {isMobile ? <NavLink>Pricing</NavLink> : <PricingButton />}
      </nav>
    </NavContext.Provider>
  )
}
