import { cn } from '@/utils/cn'
import Link from 'next/link'
import { ReactElement } from 'react'

export type SectionLinkProps = {
  name: string
  href: string
}

export const SectionLink = ({ name, href }: SectionLinkProps): ReactElement => {
  return (
    <Link
      key={name}
      className={cn(
        'text-sm underline decoration-transparent underline-offset-4 transition-colors',
        'hover:text-primary-500 hover:decoration-current',
      )}
      href={href}
    >
      {name}
    </Link>
  )
}
