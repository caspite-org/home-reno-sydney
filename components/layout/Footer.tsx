import Link from 'next/link'
import { Container } from '@/components/ui'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-surface)] border-t-2 border-[var(--color-surface-variant)] mt-auto">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-[var(--font-size-title-lg)] font-bold text-[var(--color-primary)] mb-4">
              Home Reno Sydney
            </h3>
            <p className="text-[var(--font-size-body-md)] text-[var(--color-on-surface-variant)] mb-4">
              Licensed kitchen & bathroom renovation specialists serving Sydney, NSW.
            </p>
            <p className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">
              <strong>Email:</strong> contact@homerenosydney.com.au
              <br />
              <strong>Phone:</strong> +61 2 XXXX XXXX
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--font-size-title-md)] font-semibold text-[var(--color-on-surface)] mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-[var(--font-size-body-md)] text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-[var(--font-size-body-md)] text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block text-[var(--font-size-body-md)] text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
              >
                Services
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--font-size-title-md)] font-semibold text-[var(--color-on-surface)] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-[var(--font-size-body-md)] text-[var(--color-on-surface-variant)]">
              <li>Kitchen Renovations</li>
              <li>Bathroom Renovations</li>
              <li>Interior Design</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-surface-variant)] py-6">
          <p className="text-center text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">
            © {currentYear} Home Reno Sydney. All rights reserved. Licensed renovation
            contractor serving Sydney, NSW.
          </p>
        </div>
      </Container>
    </footer>
  )
}
