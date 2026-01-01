import Link from 'next/link'
import { Container, Button } from '@/components/ui'

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[var(--color-primary-container)] to-[var(--color-surface)] py-20 md:py-32">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-[var(--font-size-display-md)] md:text-[var(--font-size-display-lg)] font-bold text-[var(--color-on-surface)] mb-6 leading-tight">
            Transform Your Space with Expert Kitchen & Bathroom Renovations
          </h1>
          <p className="text-[var(--font-size-title-md)] md:text-[var(--font-size-title-lg)] text-[var(--color-on-surface-variant)] mb-8 leading-relaxed">
            Licensed renovation specialists in Sydney, NSW. We deliver end-to-end design
            and construction services that maximize your return on investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
