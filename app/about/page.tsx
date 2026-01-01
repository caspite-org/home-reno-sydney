import { Container, Card } from '@/components/ui'

export const metadata = {
  title: 'About Us | Home Reno Sydney',
  description:
    'Learn about Home Reno Sydney - licensed renovation specialists delivering quality kitchen and bathroom renovations across Sydney, NSW.',
}

export default function AboutPage() {
  return (
    <div className="py-20">
      <Container>
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-[var(--font-size-display-md)] md:text-[var(--font-size-display-lg)] font-bold text-[var(--color-on-surface)] mb-6">
            About Home Reno Sydney
          </h1>
          <p className="text-[var(--font-size-title-md)] md:text-[var(--font-size-title-lg)] text-[var(--color-on-surface-variant)] leading-relaxed">
            Your trusted partner for kitchen and bathroom renovations in Sydney, NSW
          </p>
        </div>

        {/* Story Section */}
        <Card variant="elevated" padding="lg" className="mb-12">
          <h2 className="text-[var(--font-size-headline-md)] font-bold text-[var(--color-on-surface)] mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-[var(--font-size-body-lg)] text-[var(--color-on-surface-variant)] leading-relaxed">
            <p>
              Home Reno Sydney is a licensed kitchen and bathroom renovation contractor
              serving residential clients across Sydney, NSW. We specialize in delivering
              end-to-end design and construction services that maximize your return on
              investment.
            </p>
            <p>
              Whether you're a homeowner looking to transform your living space, or a
              property investor preparing a home for sale, we provide expert guidance and
              quality craftsmanship throughout every stage of your renovation journey.
            </p>
          </div>
        </Card>

        {/* Values Grid */}
        <div className="mb-12">
          <h2 className="text-[var(--font-size-headline-md)] font-bold text-[var(--color-on-surface)] text-center mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="outlined">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-[var(--font-size-title-lg)] font-bold text-[var(--color-on-surface)] mb-3">
                Licensed & Insured
              </h3>
              <p className="text-[var(--font-size-body-md)] text-[var(--color-on-surface-variant)]">
                Fully licensed renovation contractor with comprehensive insurance coverage
                and NSW statutory warranties.
              </p>
            </Card>

            <Card variant="outlined">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-[var(--font-size-title-lg)] font-bold text-[var(--color-on-surface)] mb-3">
                ROI Focused
              </h3>
              <p className="text-[var(--font-size-body-md)] text-[var(--color-on-surface-variant)]">
                We help clients maximize return on investment through smart, design-led
                renovation solutions.
              </p>
            </Card>

            <Card variant="outlined">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-[var(--font-size-title-lg)] font-bold text-[var(--color-on-surface)] mb-3">
                End-to-End Service
              </h3>
              <p className="text-[var(--font-size-body-md)] text-[var(--color-on-surface-variant)]">
                From initial design consultation through to final construction - we manage
                every detail of your renovation.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card variant="elevated" padding="lg" className="bg-[var(--color-primary-container)]">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[var(--font-size-headline-md)] font-bold text-[var(--color-on-surface)] mb-4">
              Ready to Start Your Renovation?
            </h2>
            <p className="text-[var(--font-size-body-lg)] text-[var(--color-on-surface-variant)] mb-6">
              Get in touch today for a free consultation and quote
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-[var(--font-size-title-md)] font-medium rounded-[var(--radius-expressive-xl)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-[var(--shadow-level-2)] transition-all duration-200"
            >
              Get Free Quote
            </a>
          </div>
        </Card>
      </Container>
    </div>
  )
}
