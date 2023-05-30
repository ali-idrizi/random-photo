import { ScaleFade } from '@/transitions/scale-fade'
import { PropsOf } from '@/types/react'
import { cn } from '@/utils/cn'
import { Disclosure as HeadlessDisclosure } from '@headlessui/react'
import { ReactElement, ReactNode, TransitionEvent, useRef } from 'react'
import { useDisclosure } from './disclosure-context'

export type DisclosurePanelProps = PropsOf<'div'> & {
  children?: ReactNode | ((args: { isOpen: boolean }) => ReactNode)
}

export const DisclosurePanel = ({ children, ...props }: DisclosurePanelProps): ReactElement => {
  const { isOpen, scrollIntoView, transitionHeight } = useDisclosure()
  const panelRef = useRef<HTMLDivElement>(null)

  const handleTransitionEnd = (e: TransitionEvent) => {
    const trackingProperty = transitionHeight ? 'grid-template-rows' : 'opacity'

    if (e.propertyName === trackingProperty && scrollIntoView) {
      panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  const content = (
    <HeadlessDisclosure.Panel {...props} ref={panelRef}>
      {typeof children === 'function' ? children({ isOpen }) : children}
    </HeadlessDisclosure.Panel>
  )

  return (
    <ScaleFade
      className={cn({
        '!grid grid-rows-[0fr] transition-all': transitionHeight,
        'grid-rows-[1fr]': transitionHeight && isOpen,
      })}
      show={isOpen}
      speed="fast"
      appear
      onTransitionEnd={handleTransitionEnd}
      unmount={false}
    >
      {transitionHeight ? <div className="overflow-hidden">{content}</div> : content}
    </ScaleFade>
  )
}
