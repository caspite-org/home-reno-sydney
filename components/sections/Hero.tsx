'use client'

import Link from 'next/link'
import { Container, Button } from '@/components/ui'
import { useEffect, useState } from 'react'

export const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[var(--color-surface)]">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-[20%] -right-[15%] w-[50%] h-[70%] rounded-[40%_60%_70%_30%/60%_30%_70%_40%] bg-[var(--color-primary-container)] opacity-60"
          style={{
            transform: mounted ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
            transition: 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />
        <div
          className="absolute top-[30%] -left-[10%] w-[35%] h-[50%] rounded-[60%_40%_30%_70%/40%_60%_50%_50%] bg-[var(--color-secondary-container)] opacity-50"
          style={{
            transform: mounted ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(10deg)',
            transition: 'transform 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s',
          }}
        />
      </div>

      <Container>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10 py-16 md:py-24">
          {/* Text Content - Asymmetric placement */}
          <div
            className="md:col-span-7 lg:col-span-6 px-4 md:px-0"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
            }}
          >
            <div className="inline-block mb-4 md:mb-6">
              <span className="text-[var(--color-primary)] text-sm font-semibold tracking-[0.15em] uppercase">
                Sydney's Finest
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[var(--color-tertiary)] mb-6 md:mb-8 leading-[1.1]">
              Transform
              <span className="block text-[var(--color-primary)] italic" style={{ fontWeight: 700 }}>
                Your Space
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-on-surface-variant)] mb-8 md:mb-12 leading-relaxed max-w-xl font-light">
              Expert kitchen and bathroom renovations that blend thoughtful design
              with masterful craftsmanship. Licensed specialists serving Sydney, NSW.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s',
              }}
            >
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg rounded-full"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-transparent border-2 border-[var(--color-tertiary)] text-[var(--color-tertiary)] hover:bg-[var(--color-tertiary)] hover:text-white transition-all duration-300 px-8 py-6 text-lg rounded-full"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Element - Stats/Info Card */}
          <div
            className="md:col-span-5 lg:col-span-6 px-4 md:px-0"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateX(0)' : 'translateX(50px)',
              transition: 'opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s',
            }}
          >
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-[var(--color-tertiary-container)]">
                <div className="space-y-8">
                  <div className="flex items-baseline gap-3 pb-6 border-b border-[var(--color-tertiary-container)]">
                    <span className="text-6xl md:text-7xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-fraunces), serif' }}>15+</span>
                    <span className="text-lg text-[var(--color-on-surface-variant)]">Years of Excellence</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0" />
                      <p className="text-[var(--color-on-surface)] text-base md:text-lg">
                        Licensed & fully insured renovation specialists
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mt-2 flex-shrink-0" />
                      <p className="text-[var(--color-on-surface)] text-base md:text-lg">
                        End-to-end design & construction services
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0" />
                      <p className="text-[var(--color-on-surface)] text-base md:text-lg">
                        Maximizing ROI for Sydney homeowners
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[var(--color-secondary)] opacity-20 -z-10"
                style={{
                  transform: mounted ? 'scale(1)' : 'scale(0)',
                  transition: 'transform 0.6s ease-out 0.8s',
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
