import { TransitionClasses } from '@headlessui/react'
import { cn } from '@/utils/cn'

export type Size = 'sm' | 'md' | 'lg' | undefined
export type Speed = 'slow' | 'normal' | 'fast' | undefined

export type ScaleFadeCommonProps = {
  size?: Size
  speed?: Speed
}

export const getScaleFadeProps = (
  size: Size = 'md',
  speed: Speed = 'normal',
): TransitionClasses => {
  const durationClassName = cn({
    'duration-[.3s]': speed === 'slow',
    'duration-[.25s]': speed === 'normal',
    'duration-[.2s]': speed === 'fast',
  })

  const transitionClassName = cn({
    'opacity-0': true,
    'scale-[.98]': size === 'sm',
    'scale-[.95]': size === 'md',
    'scale-[.92]': size === 'lg',
  })

  return {
    enter: durationClassName,
    leave: durationClassName,
    enterFrom: transitionClassName,
    enterTo: 'opacity-100 scale-100',
    leaveTo: transitionClassName,
  }
}
