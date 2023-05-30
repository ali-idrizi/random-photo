'use client'

import { ScaleFade } from '@/transitions/scale-fade'
import { Button } from '@/ui/button'
import { cn } from '@/utils/cn'
import { Menu } from '@headlessui/react'
import { PropsWithChildren, ReactElement } from 'react'

type MenuItemProps = PropsWithChildren<{
  activeClassName?: string
}>

const MenuItem = ({
  children,
  activeClassName = 'bg-primary-600',
}: MenuItemProps): ReactElement => {
  return (
    <Menu.Item as="li">
      {({ active }) => (
        <button
          className={cn(
            'w-full rounded-md px-2 py-1.5 text-start text-sm text-black transition-colors duration-75',
            {
              'text-white': active,
              [activeClassName]: active,
            },
          )}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  )
}

export const AccountMenu = (): ReactElement => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button as={Button} size="sm" colorScheme="dark">
        Account
      </Menu.Button>
      <ScaleFade speed="fast">
        <Menu.Items className="absolute right-0 mt-3 w-48 origin-top-right divide-y divide-gray-50/75 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul className="p-1">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Security</MenuItem>
            <MenuItem>Subscription</MenuItem>
            <MenuItem>Help & Support</MenuItem>
          </ul>
          <ul className="p-1">
            <MenuItem activeClassName="bg-red-600">Logout</MenuItem>
          </ul>
        </Menu.Items>
      </ScaleFade>
    </Menu>
  )
}
