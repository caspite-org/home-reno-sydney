import { Navbar } from '@/components/ui/Navbar'
import { Hero } from '@/components/sections/Hero'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Partners } from '@/components/sections/Partners'
import { Process } from '@/components/sections/Process'
import { ServicesScroll } from '@/components/sections/ServicesScroll'
import { RenomateTeaser } from '@/components/sections/RenomateTeaser'
import { FeaturedWorks } from '@/components/sections/FeaturedWorks'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ServicesScroll />
      <Process />
      <RenomateTeaser />
      <FeaturedWorks />
      <Partners />
      <Contact />
    </>
  )
}
