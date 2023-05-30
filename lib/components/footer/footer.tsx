import { footerSections } from '@/data/footer'
import { ReactElement } from 'react'
import { DesktopSections } from './desktop-sections'
import { MobileSections } from './mobile-sections'

export const Footer = (): ReactElement => {
  return (
    <footer className="bg-black/50">
      <DesktopSections className="max-lg:hidden" sections={footerSections} />
      <MobileSections className="lg:hidden" sections={footerSections} />
    </footer>
  )
}
