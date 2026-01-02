import { Navbar } from '@/components/ui/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Partners } from '@/components/sections/Partners'
import { ServicesScroll } from '@/components/sections/ServicesScroll'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <ServicesScroll />
      <Contact />
    </>
  )
}
