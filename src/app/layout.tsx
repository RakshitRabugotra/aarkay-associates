import type { Metadata } from 'next'
import './font.css'
import './globals.css'

// Constants
import {
  TITLE as title,
  DESCRIPTION as description,
} from '@/constants/constants'

export const metadata: Metadata = {
  title,
  description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-stone-50'>{children}</body>
    </html>
  )
}
