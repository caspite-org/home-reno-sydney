'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Navbar Background */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm border-b border-border transition-all duration-300" />
      
      <div className="relative flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
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
            <Link href="/projects" className="hover:opacity-70 transition-opacity">
              Projects
            </Link>
            <Link href="/how-it-works" className="hover:opacity-70 transition-opacity">
              How It Works
            </Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              About
            </Link>
            <Link href="/renomate" className="hover:opacity-70 transition-opacity text-indigo-600 font-bold">
              Renomate
            </Link>
            <Link href="/blog" className="hover:opacity-70 transition-opacity">
              Resources
            </Link>
            <Link href="/contact" className="hover:opacity-70 transition-opacity">
              Contact
            </Link>
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
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70">
            Services
          </Link>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70">
            Projects
          </Link>
          <Link href="/how-it-works" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70">
            How It Works
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70">
            About
          </Link>
          <Link href="/renomate" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 text-indigo-600">
            Renomate
          </Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70">
            Resources
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70">
            Contact
          </Link>
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
