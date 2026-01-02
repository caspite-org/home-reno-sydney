import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Home Reno Sydney | Architectural Renovations',
  description: 'Premium home, kitchen, and bathroom renovations in Sydney.',
}

import { Footer } from '@/components/ui/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-sans">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
