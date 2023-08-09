import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ProviderSession } from './components/ProviderSession'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pomo Community',
  description: 'Shared rooms of focus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <ProviderSession>
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </ProviderSession>
    </html>
  )
}
