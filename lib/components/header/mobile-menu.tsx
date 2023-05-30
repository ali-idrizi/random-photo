'use client'

import { Button } from '@/ui/button'
import { Modal } from '@/ui/modal'
import { usePathname } from 'next/navigation'
import { ReactElement, useCallback, useEffect, useState } from 'react'
import { Nav } from './nav'

export const MobileMenu = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleClose = useCallback(() => setIsOpen(false), [])

  return (
    <>
      <Button colorScheme="dark" size="sm" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </Button>

      <Modal size="full" isOpen={isOpen} onClose={handleClose} panelClassName="bg-none bg-gray-800">
        <Modal.Header />

        <Modal.Section className="px-0">
          <Nav className="flex flex-col divide-y divide-gray-700" isMobile />
        </Modal.Section>
      </Modal>
    </>
  )
}
