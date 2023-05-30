import { ReactTag, WithAsProp } from '@/types/react'
import { Transition } from '@headlessui/react'
import { ScaleFadeCommonProps, getScaleFadeProps } from './scale-fade-props'
import { ElementType, ReactElement } from 'react'

type ScaleFadeChildProps<E extends ElementType> = WithAsProp<E, ScaleFadeCommonProps>
export const ScaleFadeChild = <T extends ElementType = 'div'>({
  as,
  size,
  speed,
  ...props
}: ScaleFadeChildProps<T>): ReactElement => {
  const Component = (as ?? 'div') as ReactTag
  return <Transition.Child as={Component} {...getScaleFadeProps(size, speed)} {...props} />
}
