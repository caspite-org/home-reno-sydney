'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from './Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About' },
    { href: '/renomate', label: 'Renomate', special: true },
    { href: '/blog', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Navbar Background */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm border-b border-border transition-all duration-300" />
      
      <div className="relative flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
        <div className="flex items-center gap-8 text-foreground">
          <div className="flex items-center gap-2">
            {/* Simple Architectural Icon/Logo placeholder */}
            <div className="w-4 h-4 bg-current" />
            <div className="flex flex-col">
              <Link href="/" className="text-lg font-bold tracking-tight uppercase leading-none">
                Home Reno Sydney
              </Link>
              <span className="text-[10px] uppercase tracking-widest opacity-60 font-medium">Lic. 345672C</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`transition-all duration-300 ${
                  link.special 
                    ? 'text-indigo-600 font-bold hover:opacity-80' 
                    : isActive(link.href)
                      ? 'text-foreground opacity-100 font-bold decoration-2 underline-offset-8 underline'
                      : 'text-foreground/60 hover:text-foreground hover:opacity-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Solid Button - Using reusable component */}
        <Button 
          href="/contact" 
          variant="primary"
          size="sm"
          className="hidden md:flex"
        >
          Get a Quote
        </Button>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className={`md:hidden relative z-50 uppercase text-xs font-bold tracking-widest ${isMenuOpen ? 'text-black mix-blend-normal' : 'text-foreground'}`}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold uppercase tracking-tighter p-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              onClick={() => setIsMenuOpen(false)} 
              className={`hover:opacity-70 ${
                 link.special ? 'text-indigo-600' : ''
              } ${
                isActive(link.href) ? 'underline underline-offset-8' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button 
            href="/contact" 
            variant="primary"
            className="mt-8"
            onClick={() => setIsMenuOpen(false)}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </nav>
  );
}
