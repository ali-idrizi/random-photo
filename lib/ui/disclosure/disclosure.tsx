'use client'

import {
  Disclosure as HeadlessDisclosure,
  DisclosureProps as HeadlessDisclosureProps,
} from '@headlessui/react'
import { PropsWithChildren, ReactElement } from 'react'
import { DisclosureButton } from './disclosure-button'
import { DisclosureContent } from './disclosure-content'
import { DisclosurePanel } from './disclosure-panel'

export type DisclosureCommonProps = PropsWithChildren<{
  scrollIntoView?: boolean
  transitionHeight?: boolean
}>

export type DisclosureProps = Omit<HeadlessDisclosureProps<'div'>, 'children'> &
  DisclosureCommonProps

export const Disclosure = ({
  children,
  scrollIntoView,
  transitionHeight,
  ...props
}: DisclosureProps): ReactElement => {
  return (
    <HeadlessDisclosure as="div" {...props}>
      {({ open, close }) => (
        <DisclosureContent
          isOpen={open}
          close={close}
          scrollIntoView={scrollIntoView}
          transitionHeight={transitionHeight}
        >
          {children}
        </DisclosureContent>
      )}
    </HeadlessDisclosure>
  )
}

Disclosure.Button = DisclosureButton
Disclosure.Panel = DisclosurePanel
