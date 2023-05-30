import { MainLayout } from '@/layouts/main'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RandomPhoto',
  description: 'RandomPhoto deserves random description!',
  viewport: 'width=device-width, initial-scale=1',
  appleWebApp: {
    statusBarStyle: 'default',
  },
  themeColor: '#000000',
  icons: '/favicon.ico',
}

export default MainLayout
