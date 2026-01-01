import { Container, Card } from '@/components/ui'

export const metadata = {
  title: 'Services | Home Reno Sydney',
  description:
    'Kitchen renovations, bathroom renovations, interior design, and project management services in Sydney, NSW. Licensed contractor with end-to-end solutions.',
}

const services = [
  {
    title: 'Kitchen Renovations',
    icon: '🍳',
    description:
      'Transform your kitchen into a functional, beautiful space that adds value to your home.',
    features: [
      'Custom cabinetry and joinery',
      'Benchtop selection and installation',
      'Appliance integration',
      'Plumbing and electrical work',
      'Lighting design',
      'Flooring and tiling',
    ],
  },
  {
    title: 'Bathroom Renovations',
    icon: '🚿',
    description:
      'Create your dream bathroom with expert design and quality construction.',
    features: [
      'Complete bathroom redesign',
      'Waterproofing and tiling',
      'Vanity and storage solutions',
      'Shower and bath installation',
      'Fixture and fitting selection',
      'Accessibility modifications',
    ],
  },
  {
    title: 'Interior Design & Consultation',
    icon: '✨',
    description:
      'Professional design services to maximize the impact of your renovation investment.',
    features: [
      'Space planning and layout',
      'Material and finish selection',
      'Color consultation',
      ' 3D visualization',
      'Budget optimization',
      'ROI analysis',
    ],
  },
  {
    title: 'Project Management',
    icon: '📋',
    description:
      'Comprehensive project management to keep your renovation on time and on budget.',
    features: [
      'Detailed project planning',
      'Contractor coordination',
      'Quality control',
      'Timeline management',
      'Budget tracking',
      'Regular progress updates',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 lg:py-28">
      <Container>
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-on-surface)] mb-4 md:mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-on-surface)] leading-relaxed">
            Comprehensive renovation services for homeowners and property investors across
            Sydney, NSW
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12 md:space-y-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              variant="elevated"
              padding="lg"
              className={`hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'bg-[var(--color-background)]' : 'bg-white'}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                  <div className="text-7xl mb-6">{service.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-on-surface)] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-[var(--color-on-surface)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold text-[var(--color-on-surface)] mb-4 md:mb-6">
                    What's Included
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm md:text-base text-[var(--color-on-surface)] leading-relaxed"
                      >
                        <span className="text-[var(--color-success)] mt-1 text-lg">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card
          variant="elevated"
          padding="lg"
          className="mt-16 md:mt-20 bg-gradient-to-br from-[var(--color-primary-container)] to-white shadow-xl"
        >
          <div className="text-center w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-on-surface)] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg text-[var(--color-on-surface)] mb-6 leading-relaxed max-w-2xl mx-auto">
              Contact us today for a free consultation and quote for your renovation project
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
