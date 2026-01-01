'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui'
import { cn } from '@/utils'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-background)] shadow-[var(--shadow-level-2)]">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-[var(--font-size-headline-md)] font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
          >
            Home Reno Sydney
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--font-size-body-lg)] font-medium text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-[var(--font-size-label-lg)] font-medium rounded-[var(--radius-expressive-lg)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-[var(--shadow-level-2)] transition-all duration-200"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-[var(--radius-expressive-md)] hover:bg-[var(--color-surface)] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[var(--color-on-surface)]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-[var(--font-size-body-lg)] font-medium text-[var(--color-on-surface)] hover:bg-[var(--color-surface)] rounded-[var(--radius-expressive-md)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center px-4 py-3 text-[var(--font-size-label-lg)] font-medium rounded-[var(--radius-expressive-lg)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-[var(--shadow-level-2)] transition-all duration-200"
            >
              Get Quote
            </Link>
          </nav>
        )}
      </Container>
    </header>
  )
}
