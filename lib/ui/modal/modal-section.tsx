'use client'

import { cva } from '@/utils/cva'
import { PropsWithChildren, ReactElement } from 'react'
import { useModal } from './modal-context'

const variants = cva(null, {
  variants: {
    paddingXSize: {
      none: null,
      sm: 'px-2',
      md: 'px-4',
      lg: 'px-6',
    },
    paddingYSize: {
      none: null,
      sm: 'pb-2',
      md: 'pb-4',
      lg: 'pb-6',
    },
    topPadding: {
      true: null,
    },
  },
  compoundVariants: [
    {
      topPadding: true,
      paddingYSize: 'sm',
      className: 'pt-2',
    },
    {
      topPadding: true,
      paddingYSize: 'md',
      className: 'pt-4',
    },
    {
      topPadding: true,
      paddingYSize: 'lg',
      className: 'pt-6',
    },
  ],
  defaultVariants: {
    paddingXSize: 'md',
    paddingYSize: 'md',
    topPadding: false,
  },
})

type PaddingSize = 'none' | 'sm' | 'md' | 'lg'

export type ModalSectionProps = PropsWithChildren<{
  className?: string
  paddingOptions?: {
    top?: boolean
    size?:
      | PaddingSize
      | {
          x?: PaddingSize
          y?: PaddingSize
        }
  }
}>

export const ModalSection = ({
  paddingOptions,
  className,
  children,
}: ModalSectionProps): ReactElement => {
  const { defaultPaddingSize } = useModal()

  const topPadding = paddingOptions?.top ?? false
  let paddingXSize = defaultPaddingSize
  let paddingYSize = defaultPaddingSize

  const paddingSize = paddingOptions?.size
  if (typeof paddingSize === 'string') {
    paddingXSize = paddingSize
    paddingYSize = paddingSize
  } else {
    paddingXSize = paddingSize?.x ?? paddingXSize
    paddingYSize = paddingSize?.y ?? paddingYSize
  }

  return (
    <div
      className={variants({
        paddingXSize,
        paddingYSize,
        topPadding,
        className,
      })}
    >
      {children}
    </div>
  )
}
