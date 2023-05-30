'use client'

import { FooterSections } from '@/data/footer'
import { Accordion } from '@/ui/accordion'
import { cn } from '@/utils/cn'
import { ReactElement } from 'react'
import { SectionLink } from './section-link'

type MobileSectionsProps = {
  className?: string
  sections: FooterSections
}
export const MobileSections = ({ className, sections }: MobileSectionsProps): ReactElement => {
  return (
    <div className={cn('flex flex-col items-stretch gap-2 p-3 sm:p-6', className)}>
      <Accordion className="flex flex-col gap-1">
        {sections.map(({ links, title }) => (
          <Accordion.Item key={title} className="flex flex-col" scrollIntoView>
            <Accordion.Button
              colorScheme="dark"
              className="justify-between border-white/5 bg-transparent px-3 py-4 active:scale-[.99]"
            >
              {({ isOpen }) => (
                <>
                  <span>{title}</span>
                  <span className={cn('text-xs transition-transform', { 'rotate-180': isOpen })}>
                    ↓
                  </span>
                </>
              )}
            </Accordion.Button>
            <Accordion.Panel className="flex flex-col items-start gap-5 px-3 py-6">
              {links.map((props) => (
                <SectionLink key={props.name} {...props} />
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}
