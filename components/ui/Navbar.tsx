'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-background/80 backdrop-blur-sm transition-all duration-300">
      <div className="flex items-center gap-8 text-foreground">
        <div className="flex items-center gap-2">
           {/* Simple Architectural Icon/Logo placeholder */}
          <div className="w-4 h-4 bg-current" />
          <Link href="/" className="text-lg font-bold tracking-tight uppercase">
            Home Reno Sydney
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <Link href="/services" className="hover:opacity-70 transition-opacity">
            Services
          </Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity">
            About
          </Link>
          <Link href="/#projects" onClick={(e) => handleScroll(e, '#projects')} className="hover:opacity-70 transition-opacity">
            Projects
          </Link>
          <Link href="/#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </div>
      </div>

      {/* Solid Button - Using reusable component */}
      <Button 
        href="/#contact" 
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
        className="md:hidden pointer-events-auto mix-blend-exclusion text-white uppercase text-xs font-bold z-50"
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold uppercase tracking-tighter">
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70">
            Services
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70">
            About
          </Link>
          <Link href="/#projects" onClick={(e) => handleScroll(e, '#projects')} className="hover:opacity-70">
            Projects
          </Link>
          <Link href="/#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:opacity-70">
            Contact
          </Link>
          <Button 
            href="/#contact" 
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
