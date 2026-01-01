'use client'

import Link from 'next/link'
import { Container, Card, Button } from '@/components/ui'
import { useState } from 'react'

const services = [
  {
    title: 'Kitchen Renovations',
    description:
      'Complete kitchen transformations from design to installation. Licensed contractor with expertise in modern, functional kitchen spaces.',
    number: '01',
    color: 'var(--color-primary)',
  },
  {
    title: 'Bathroom Renovations',
    description:
      'Expert bathroom remodeling services. Create your dream bathroom with our licensed professionals.',
    number: '02',
    color: 'var(--color-secondary)',
  },
  {
    title: 'Interior Design',
    description:
      'Professional interior design consultation and planning. Maximize ROI with smart, design-led solutions.',
    number: '03',
    color: 'var(--color-primary-light)',
  },
  {
    title: 'Project Management',
    description:
      'End-to-end project management from concept to completion. Stay on budget and on schedule.',
    number: '04',
    color: 'var(--color-secondary-dark)',
  },
]

export const ServicesOverview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[var(--color-secondary-container)] rounded-full blur-3xl opacity-40" />

      <Container>
        <div className="mb-16 md:mb-20 max-w-3xl">
          <span className="text-[var(--color-primary)] text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-tertiary)] mb-6 leading-tight">
            Comprehensive
            <span className="block text-[var(--color-primary)] italic">Renovation Services</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed">
            Tailored solutions for homeowners and property investors across Sydney, NSW.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-[var(--color-surface)] rounded-3xl p-8 md:p-10 border-2 border-[var(--color-tertiary-container)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-2xl"
            >
              {/* Large decorative number */}
              <div
                className="absolute top-6 right-8 text-8xl md:text-9xl font-bold opacity-5 transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  color: service.color,
                  opacity: hoveredIndex === index ? 0.1 : 0.05,
                }}
              >
                {service.number}
              </div>

              <div className="relative z-10">
                <div className="mb-6">
                  <span
                    className="text-3xl font-bold transition-all duration-300"
                    style={{
                      fontFamily: 'var(--font-fraunces), serif',
                      color: service.color,
                      transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                      display: 'inline-block',
                    }}
                  >
                    {service.number}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-tertiary)] mb-4 leading-tight">
                  {service.title}
                </h3>

                <p className="text-base md:text-lg text-[var(--color-on-surface-variant)] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Decorative line */}
                <div
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: service.color,
                    width: hoveredIndex === index ? '60px' : '40px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore All Services
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
