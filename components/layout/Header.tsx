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
    <header className="sticky top-0 z-50 bg-[var(--color-background)]/95 backdrop-blur-md border-b border-[var(--color-tertiary-container)]">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-[var(--color-tertiary)] hover:text-[var(--color-primary)] transition-colors"
            style={{ fontFamily: 'var(--font-fraunces), serif' }}
          >
            Home Reno Sydney
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary)] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-md hover:shadow-lg transition-all duration-300"
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
          <nav className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-[var(--color-on-surface)] hover:bg-[var(--color-surface)] rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center px-4 py-3 text-sm font-semibold rounded-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-md transition-all duration-300"
            >
              Get Quote
            </Link>
          </nav>
        )}
      </Container>
    </header>
  )
}
