import { ReactTag, WithAsProp } from '@/types/react'
import { cva } from '@/utils/cva'
import { ForwardedRef, ReactElement, forwardRef } from 'react'

type HeadingElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
const defaultElement = 'h1'

const variants = cva('font-display', {
  variants: {
    type: {
      h1: 'text-4xl tracking-tight',
      h2: 'text-3xl tracking-tight',
      h3: 'text-2xl tracking-tight',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-md',
    },
  },
})

type HeadingProps<E extends HeadingElementType> = WithAsProp<E>

const Heading = <E extends HeadingElementType = typeof defaultElement>(
  { as, className, ...props }: HeadingProps<E>,
  ref: ForwardedRef<E>,
): ReactElement => {
  const type = as ?? defaultElement
  const Component = type as ReactTag

  return <Component {...props} className={variants({ type, className })} ref={ref} />
}

export const ForwardedHeading = forwardRef(Heading) as <
  E extends HeadingElementType = typeof defaultElement,
>(
  props: HeadingProps<E>,
) => ReactElement

export { ForwardedHeading as Heading }
