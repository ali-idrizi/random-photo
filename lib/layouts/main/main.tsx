import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/utils/cn'
import { bodyFont, displayFont } from '@/utils/fonts'
import { PropsWithChildren, ReactElement, ReactNode } from 'react'

export type MainLayoutProps = PropsWithChildren<{
  modal?: ReactNode
  auth?: ReactNode
}>

export const MainLayout = ({ children, modal, auth }: MainLayoutProps): ReactElement => {
  return (
    <html lang="en" className={cn(bodyFont.variable, displayFont.variable)}>
      <body className="bg-slate-900 font-body text-white">
        <div className="flex min-h-screen flex-col">
          <Header />
          {children}
        </div>
        <Footer />

        {modal}
        {auth}
      </body>
    </html>
  )
}
