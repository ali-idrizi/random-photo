import { ReactTag, WithAsProp } from '@/types/react'
import { VariantProps, cva } from '@/utils/cva'
import { ElementType, ForwardedRef, ReactElement, forwardRef } from 'react'
import { ButtonSpinner } from './button-spinner'

const variants = cva(
  [
    'relative text-center overflow-hidden inline-flex items-center justify-center select-none',
    'rounded-md font-medium transition-[background-color,color,transform,filter,box-shadow] uppercase leading-none',
    'aria-[disabled=true]:pointer-events-none aria-[disabled=true]:before:opacity-50',
    'active:scale-95',
    'before:absolute before:w-full before:h-full before:bg-black/50 before:opacity-0 before:transition-opacity',
  ],
  {
    variants: {
      colorScheme: {
        none: null,
        primary: [
          'border border-primary-700 bg-gradient-to-b from-primary-600 to-primary-700',
          'hover:brightness-[1.15]',
        ],
        secondary: [
          'border border-secondary-800 bg-gradient-to-b from-secondary-600 to-secondary-800',
          'hover:brightness-[1.15]',
        ],
        danger: [
          'border border-red-800 bg-gradient-to-b from-red-600 to-red-800',
          'hover:brightness-[1.15]',
        ],
        success: [
          'border border-green-800 bg-gradient-to-b from-green-600 to-green-800',
          'hover:brightness-[1.15]',
        ],
        outline: [
          'border border-slate-200 hover:bg-white',
          'hover:text-black hover:brightness-[1.15]',
        ],
        dark: ['border border-slate-200/10 bg-gray-900/50', 'hover:bg-gray-900/25'],
      },
      size: {
        none: null,
        sm: 'rounded text-xs px-4 py-2',
        md: 'text-sm px-6 py-3.5',
        lg: 'text-sm px-6 py-3.5 active:scale-[.97] md:text-base md:px-8 md:py-4 md:active:scale-[.97]',
      },
      isLoading: {
        true: null,
      },
    },
    defaultVariants: {
      colorScheme: 'primary',
      size: 'md',
      isLoading: false,
    },
  },
)

export type ButtonProps<E extends ElementType = 'button'> = WithAsProp<
  E,
  VariantProps<typeof variants>
>

const Button = <E extends ElementType = 'button'>(
  {
    as,
    isLoading = false,
    className,
    disabled,
    colorScheme,
    size,
    children,
    type,
    ...props
  }: ButtonProps<E>,
  ref: ForwardedRef<E>,
): ReactElement => {
  const isDisabled = isLoading || disabled

  const Component = (as ?? 'button') as ReactTag

  return (
    <Component
      {...props}
      className={variants({ colorScheme, size, isLoading, className })}
      ref={ref}
      type={Component === 'button' ? type ?? 'button' : undefined}
      disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      {isLoading ? <span className="opacity-0">{children}</span> : children}
      {isLoading && <ButtonSpinner buttonSize={size} />}
    </Component>
  )
}

export const ForwardedButton = forwardRef(Button) as <E extends ElementType = 'button'>(
  props: ButtonProps<E>,
) => ReactElement

export { ForwardedButton as Button }
