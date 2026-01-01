import Link from 'next/link'
import { Container, Card, Button } from '@/components/ui'

const services = [
  {
    title: 'Kitchen Renovations',
    description:
      'Complete kitchen transformations from design to installation. Licensed contractor with expertise in modern, functional kitchen spaces.',
    icon: '🍳',
  },
  {
    title: 'Bathroom Renovations',
    description:
      'Expert bathroom remodeling services. Create your dream bathroom with our licensed professionals.',
    icon: '🚿',
  },
  {
    title: 'Interior Design',
    description:
      'Professional interior design consultation and planning. Maximize ROI with smart, design-led solutions.',
    icon: '✨',
  },
  {
    title: 'Project Management',
    description:
      'End-to-end project management from concept to completion. Stay on budget and on schedule.',
    icon: '📋',
  },
]

export const ServicesOverview = () => {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)]">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[var(--font-size-headline-lg)] md:text-[var(--font-size-display-sm)] font-bold text-[var(--color-on-surface)] mb-4 md:mb-6">
            Our Services
          </h2>
          <p className="text-[var(--font-size-body-lg)] md:text-[var(--font-size-title-md)] text-[var(--color-on-surface)] max-w-2xl mx-auto leading-relaxed px-4">
            Comprehensive renovation services for homeowners and property investors across
            Sydney
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16">
          {services.map((service) => (
            <Card key={service.title} variant="elevated" className="hover:shadow-[var(--shadow-level-4)] transition-all duration-300">
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-[var(--font-size-headline-sm)] font-bold text-[var(--color-on-surface)] mb-4">
                {service.title}
              </h3>
              <p className="text-[var(--font-size-body-lg)] text-[var(--color-on-surface)] leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg">View All Services</Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
