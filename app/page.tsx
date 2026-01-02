import { Navbar } from '@/components/ui/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Partners } from '@/components/sections/Partners'
import { Process } from '@/components/sections/Process'
import { ServicesScroll } from '@/components/sections/ServicesScroll'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Process />
      <ServicesScroll />
      <Contact />
    </>
  )
}
