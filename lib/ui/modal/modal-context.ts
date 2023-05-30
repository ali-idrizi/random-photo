import { createContext, useContext } from 'react'
import { ModalProps } from './modal'

type ModalContextProps = {
  closeModal: () => void
  defaultPaddingSize: ModalProps['defaultPaddingSize']
}

export const ModalContext = createContext<ModalContextProps | null>(null)

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('Modal context missing!')
  }

  return context
}
