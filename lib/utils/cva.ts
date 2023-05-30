import { cn } from '@/utils/cn'
import { type VariantProps, cva } from 'class-variance-authority'

type CvaOptions<T> = Parameters<typeof cva<T>>
type CvaReturn<T> = ReturnType<typeof cva<T>>

/**
 * A `cva` wrapper that calls `cn` on the results. `cn` in return calls `twMerge`, which
 * merges tailwind classes without style conflicts
 */
const cvaWrapper = <T>(...args: CvaOptions<T>): CvaReturn<T> => {
  const result = cva(...args)

  return (props) => cn(result(props))
}

export { type VariantProps, cvaWrapper as cva }
