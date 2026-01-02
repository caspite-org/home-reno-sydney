import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Home Reno Sydney | Architectural Renovations',
  description: 'Premium home, kitchen, and bathroom renovations in Sydney.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="flex flex-col min-h-screen font-sans">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
