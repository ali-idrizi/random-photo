import { FooterSections } from '@/data/footer'
import { Heading } from '@/ui/heading'
import { cn } from '@/utils/cn'
import { ReactElement } from 'react'
import { SectionLink } from './section-link'

type DesktopSectionsProps = {
  className?: string
  sections: FooterSections
}
export const DesktopSections = ({ className, sections }: DesktopSectionsProps): ReactElement => {
  return (
    <div
      className={cn(
        'flex flex-row items-start justify-between px-10 py-16 xl:justify-evenly',
        className,
      )}
    >
      {sections.map(({ title, links }) => (
        <div key={title} className="flex flex-col gap-6">
          <Heading as="h4" className="text-white/[.65]">
            {title}
          </Heading>
          <div className="flex flex-col items-start gap-4">
            {links.map((props) => (
              <SectionLink key={props.name} {...props} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
