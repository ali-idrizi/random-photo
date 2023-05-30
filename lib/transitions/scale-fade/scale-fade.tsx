import { ReactTag, WithAsProp } from '@/types/react'
import { Transition } from '@headlessui/react'
import { ScaleFadeChild } from './scale-fade-child'
import { ScaleFadeCommonProps, getScaleFadeProps } from './scale-fade-props'
import { ElementType, ReactElement } from 'react'

type ScaleFadeProps<E extends ElementType> = WithAsProp<
  E,
  ScaleFadeCommonProps & {
    show?: boolean
    appear?: boolean
    isGroup?: boolean
    unmount?: boolean
  }
>
export const ScaleFade = <T extends ElementType = 'div'>({
  as,
  size,
  speed,
  isGroup = false,
  ...props
}: ScaleFadeProps<T>): ReactElement => {
  const Component = (as ?? 'div') as ReactTag
  const scaleFadeProps = isGroup ? null : getScaleFadeProps(size, speed)
  return <Transition as={Component} {...scaleFadeProps} {...props} />
}

ScaleFade.Child = ScaleFadeChild
