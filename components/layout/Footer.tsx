import Link from 'next/link'
import { Container } from '@/components/ui'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-tertiary)] text-white mt-auto relative overflow-hidden">
      {/* Decorative shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
              Home Reno Sydney
            </h3>
            <p className="text-base text-white/80 mb-6 leading-relaxed">
              Licensed kitchen & bathroom renovation specialists serving Sydney, NSW.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p>
                <span className="text-white/90 font-medium">Email:</span>{' '}
                <a href="mailto:contact@homerenosydney.com.au" className="hover:text-[var(--color-primary-light)] transition-colors">
                  contact@homerenosydney.com.au
                </a>
              </p>
              <p>
                <span className="text-white/90 font-medium">Phone:</span>{' '}
                <a href="tel:+61-2-XXXX-XXXX" className="hover:text-[var(--color-primary-light)] transition-colors">
                  +61 2 XXXX XXXX
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-base text-white/70 hover:text-[var(--color-primary-light)] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-base text-white/70 hover:text-[var(--color-primary-light)] transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block text-base text-white/70 hover:text-[var(--color-primary-light)] transition-colors"
              >
                Services
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-base text-white/70">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-light)]" />
                Kitchen Renovations
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-light)]" />
                Bathroom Renovations
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-light)]" />
                Interior Design
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-light)]" />
                Project Management
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8 relative z-10">
          <p className="text-center text-sm text-white/60">
            © {currentYear} Home Reno Sydney. All rights reserved. Licensed renovation
            contractor serving Sydney, NSW.
          </p>
        </div>
      </Container>
    </footer>
  )
}
