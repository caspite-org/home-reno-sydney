import Link from 'next/link'
import { Container, Button } from '@/components/ui'

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-tertiary-dark)] py-20 md:py-32 lg:py-40">
      <Container>
        <div className="max-w-4xl px-4">
          <h1 className="text-[var(--font-size-display-md)] md:text-[var(--font-size-display-lg)] font-bold text-white mb-4 md:mb-6 leading-tight">
            Transform Your Space with Expert Kitchen & Bathroom Renovations
          </h1>
          <p className="text-[var(--font-size-title-md)] md:text-[var(--font-size-title-lg)] text-white/90 mb-8 md:mb-10 leading-relaxed">
            Licensed renovation specialists in Sydney, NSW. We deliver end-to-end design
            and construction services that maximize your return on investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[var(--color-primary)] hover:bg-white/90 shadow-[var(--shadow-level-4)]">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
