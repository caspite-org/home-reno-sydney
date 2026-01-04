import type { Metadata } from 'next'
import { Host_Grotesk } from 'next/font/google'
import './globals.css'

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  variable: '--font-host-grotesk',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
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
    <html lang="en" className={`${hostGrotesk.variable} antialiased`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-sans">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
