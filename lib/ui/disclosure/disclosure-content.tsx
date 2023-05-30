import { MutableRefObject, ReactElement, useCallback, useMemo } from 'react'
import { DisclosureCommonProps } from './disclosure'
import { DisclosureContext } from './disclosure-context'

type DisclosureContentProps = {
  isOpen: boolean
  close: (focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>) => void
} & DisclosureCommonProps

export const DisclosureContent = ({
  isOpen,
  close,
  scrollIntoView,
  transitionHeight,
  children,
}: DisclosureContentProps): ReactElement => {
  const handleClose = useCallback(
    (restoreFocus = true) => {
      if (!restoreFocus) {
        const dummyElement = document.createElement('div')
        dummyElement.focus = () => {
          /* no-op */
        }
        return close(dummyElement)
      }
      close()
    },
    [close],
  )

  const contextValue = useMemo(
    () => ({
      isOpen,
      close: handleClose,
      scrollIntoView,
      transitionHeight,
    }),
    [isOpen, handleClose, scrollIntoView, transitionHeight],
  )

  return <DisclosureContext.Provider value={contextValue}>{children}</DisclosureContext.Provider>
}
