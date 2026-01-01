import type { Metadata } from 'next'
import './globals.css'
import { Header, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Home Reno Sydney | Kitchen & Bathroom Renovations',
  description:
    'Licensed kitchen and bathroom renovation contractor in Sydney, NSW. Expert design and construction services for residential clients.',
  keywords: [
    'kitchen renovation Sydney',
    'bathroom renovation Sydney',
    'home renovation',
    'interior design Sydney',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
