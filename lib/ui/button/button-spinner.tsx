import { Spinner } from '@/ui/spinner'
import { ReactElement } from 'react'
import { ButtonProps } from './button'

const buttonSpinnerSize = {
  none: 'xs',
  sm: 'xs',
  md: 'sm',
  lg: 'md',
} as const

type ButtonSpinnerProps = {
  buttonSize: ButtonProps['size']
}

export const ButtonSpinner = ({ buttonSize }: ButtonSpinnerProps): ReactElement => {
  return (
    <span className="absolute">
      <Spinner colorScheme="white" size={buttonSpinnerSize[buttonSize ?? 'none']} />
    </span>
  )
}
