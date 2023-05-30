'use client'

import { ScaleFade } from '@/transitions/scale-fade'
import { VariantProps, cva } from '@/utils/cva'
import { Dialog } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { Fragment, PropsWithChildren, ReactElement, useMemo } from 'react'
import { ModalContext } from './modal-context'
import { ModalHeader } from './modal-header'
import { ModalSection } from './modal-section'

const containerVariants = cva(
  'flex items-center justify-center text-center px-2 py-4 sm:py-6 lg:py-10 sm:px-[5%]',
  {
    variants: {
      position: {
        top: null,
        center: 'min-h-full',
      },
      size: {
        sm: null,
        md: null,
        lg: null,
        xl: null,
        '2xl': null,
        full: 'min-h-full !p-0',
      },
    },
    defaultVariants: {
      position: 'center',
      size: 'md',
    },
  },
)
type ContainerVariants = VariantProps<typeof containerVariants>

const panelVariants = cva(
  'w-full transform overflow-hidden rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 text-left align-middle shadow-xl transition-all',
  {
    variants: {
      size: {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        '2xl': 'max-w-[100rem]',
        full: 'min-w-full min-h-full self-stretch rounded-none',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
)

export type ModalProps = ContainerVariants &
  PropsWithChildren<{
    isOpen?: boolean
    onClose?: () => void
    className?: string
    panelClassName?: string
    defaultPaddingSize?: 'none' | 'sm' | 'md' | 'lg'
  }>

export const Modal = ({
  children,
  position,
  size,
  className,
  panelClassName,
  defaultPaddingSize,
  onClose,
  isOpen = true,
}: ModalProps): ReactElement => {
  const router = useRouter()

  const context = useMemo(() => {
    return {
      closeModal: onClose ?? (() => router.back()),
      defaultPaddingSize: defaultPaddingSize ?? 'md',
    }
  }, [onClose, router, defaultPaddingSize])

  return (
    <ModalContext.Provider value={context}>
      <ScaleFade as={Fragment} appear isGroup show={isOpen}>
        <Dialog as="div" className="relative z-20" onClose={context.closeModal}>
          {size !== 'full' && (
            <ScaleFade.Child size="sm" speed="fast" as={Fragment}>
              <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px]" />
            </ScaleFade.Child>
          )}
          <div className="fixed inset-0 overflow-y-auto">
            <div className={containerVariants({ position, size, className })}>
              <ScaleFade.Child as={Fragment}>
                <Dialog.Panel className={panelVariants({ size, className: panelClassName })}>
                  {children}
                </Dialog.Panel>
              </ScaleFade.Child>
            </div>
          </div>
        </Dialog>
      </ScaleFade>
    </ModalContext.Provider>
  )
}

Modal.Header = ModalHeader
Modal.Section = ModalSection
