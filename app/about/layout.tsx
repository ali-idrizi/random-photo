import { PropsWithChildren, ReactElement } from 'react'

type Props = PropsWithChildren

const Layout = ({ children }: Props): ReactElement => {
  return <>{children}</>
}

export default Layout
