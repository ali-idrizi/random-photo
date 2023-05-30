'use client'

import { Button } from '@/ui/button'
import { Heading } from '@/ui/heading'
import { cn } from '@/utils/cn'
import { ReactElement, ReactNode } from 'react'
import { useModal } from './modal-context'
import { ModalSection, ModalSectionProps } from './modal-section'

type PropsWithTitle = {
  title?: string
  children?: never
}

type PropsWithChildren = {
  title?: never
  children: ReactNode
}

type ModalHeaderProps = (PropsWithTitle | PropsWithChildren) &
  ModalSectionProps & {
    closeButton?: boolean
  }

export const ModalHeader = ({
  children,
  title,
  className,
  paddingOptions,
  closeButton = true,
  ...props
}: ModalHeaderProps): ReactElement => {
  const { closeModal } = useModal()

  return (
    <ModalSection
      paddingOptions={{ ...paddingOptions, top: paddingOptions?.top ?? true }}
      className={cn('flex items-center gap-2', className)}
      {...props}
    >
      {title ? <div>{title && <Heading className="text-xl">{title}</Heading>}</div> : children}

      {closeButton && (
        <Button
          size="none"
          colorScheme="none"
          className="ml-auto h-10 w-10 shrink-0 text-2xl hover:bg-white/5"
          onClick={closeModal}
        >
          &times;
        </Button>
      )}
    </ModalSection>
  )
}
