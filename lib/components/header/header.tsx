import { Button } from '@/ui/button'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { AccountMenu } from './account-menu'
import { MobileMenu } from './mobile-menu'
import { Nav } from './nav'
import Logo from '/public/logo.png'
import { ReactElement } from 'react'

export const Header = (): ReactElement => {
  return (
    <header
      className={cn(
        'sticky top-0 z-20 flex h-16 items-stretch bg-black/75 px-4 py-2',
        'gap-4 text-white backdrop-blur-sm',
        'lg:gap-6',
      )}
    >
      <div className="flex items-center">
        <Image
          className="w-[9rem] lg:w-[10rem]"
          src={Logo}
          alt="Logo"
          width={1200}
          height={1200}
          quality={100}
          priority
        />
      </div>

      <Nav className="hidden items-stretch justify-center self-stretch lg:flex" />

      <div className="ml-auto hidden items-center lg:flex">
        <AccountMenu />
      </div>

      <Button as={Link} href="/login" className="hidden py-0 lg:flex">
        Login
      </Button>

      <div className="ml-auto flex items-center lg:hidden">
        <MobileMenu />
      </div>
    </header>
  )
}
