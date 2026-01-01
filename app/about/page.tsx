import { Container, Card } from '@/components/ui'

export const metadata = {
  title: 'About Us | Home Reno Sydney',
  description:
    'Learn about Home Reno Sydney - licensed renovation specialists delivering quality kitchen and bathroom renovations across Sydney, NSW.',
}

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 lg:py-28">
      <Container>
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-on-surface)] mb-4 md:mb-6">
            About Home Reno Sydney
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-on-surface)] leading-relaxed">
            Your trusted partner for kitchen and bathroom renovations in Sydney, NSW
          </p>
        </div>

        {/* Story Section */}
        <Card variant="elevated" padding="lg" className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-on-surface)] mb-4 md:mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-base md:text-lg text-[var(--color-on-surface)] leading-relaxed">
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
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-on-surface)] text-center mb-8 md:mb-12 px-4">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card variant="outlined" className="hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">
                Licensed & Insured
              </h3>
              <p className="text-base text-[var(--color-on-surface)] leading-relaxed">
                Fully licensed renovation contractor with comprehensive insurance coverage
                and NSW statutory warranties.
              </p>
            </Card>

            <Card variant="outlined" className="hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">
                ROI Focused
              </h3>
              <p className="text-base text-[var(--color-on-surface)] leading-relaxed">
                We help clients maximize return on investment through smart, design-led
                renovation solutions.
              </p>
            </Card>

            <Card variant="outlined" className="hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">
                End-to-End Service
              </h3>
              <p className="text-base text-[var(--color-on-surface)] leading-relaxed">
                From initial design consultation through to final construction - we manage
                every detail of your renovation.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card variant="elevated" padding="lg" className="bg-gradient-to-br from-[var(--color-primary-container)] to-[var(--color-surface)] shadow-xl">
          <div className="text-center w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-on-surface)] mb-4">
              Ready to Start Your Renovation?
            </h2>
            <p className="text-base md:text-lg text-[var(--color-on-surface)] mb-6 leading-relaxed max-w-2xl mx-auto">
              Get in touch today for a free consultation and quote
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-2xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-lg transition-all duration-200"
            >
              Get Free Quote
            </a>
          </div>
        </Card>
      </Container>
    </div>
  )
}
