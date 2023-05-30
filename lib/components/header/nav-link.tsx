import { cn } from '@/utils/cn'
import { cva } from '@/utils/cva'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { PropsWithChildren, ReactElement } from 'react'
import { useNav } from './nav-context'

const variants = cva(
  'relative flex items-center rounded-[.33rem] text-sm leading-none transition-colors',
  {
    variants: {
      isMobile: {
        true: 'rounded-none hover:bg-gray-700/75',
        false: [
          'hover:bg-white/[.075]',
          'after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:rounded after:bg-primary-600 after:transition-all',
        ],
      },
      isActive: {
        true: 'after:scale-100 after:opacity-100 hover:after:opacity-50 hover:after:scale-75',
        false: 'after:scale-50 after:opacity-0',
      },
    },
  },
)

type NavLinkProps = PropsWithChildren<{
  href?: string
  targetSegment?: string | null
}>
export const NavLink = ({ children, targetSegment, href }: NavLinkProps): ReactElement => {
  const activeSegment = useSelectedLayoutSegment()
  const isActive = targetSegment === activeSegment
  const { isMobile } = useNav()

  return (
    <Link href={href ?? '#'} className={variants({ isMobile, isActive })}>
      <span
        className={cn('block', {
          'px-4': !isMobile,
          'px-5 py-4': isMobile,
        })}
      >
        {children}
      </span>
    </Link>
  )
}
