import { Hero } from '@/components/sections/Hero'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { ContactForm } from '@/components/forms/ContactForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ContactForm />
    </>
  )
}
