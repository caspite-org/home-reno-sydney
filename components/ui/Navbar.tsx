'use client';

import Link from 'next/link';
import { MouseEvent } from 'react';

export function Navbar() {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-[#F4F4F2]/80 backdrop-blur-sm transition-all duration-300">
      <div className="flex items-center gap-8 text-[#111]">
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
          <a href="/#projects" onClick={(e) => handleScroll(e, '#projects')} className="hover:opacity-70 transition-opacity">
            Projects
          </a>
          <a href="/#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:opacity-70 transition-opacity">
            Contact
          </a>
        </div>
      </div>

      {/* Solid Button - No Blend Mode */}
      <Link 
        href="/#contact" 
        className="pointer-events-auto hidden md:block px-5 py-2.5 bg-[#111] text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors text-xs font-bold uppercase tracking-wider"
      >
        Get a Quote
      </Link>
      
      {/* Mobile Menu Toggle - Blend Mode needed? Probably yes as it replaces links */}
      <button className="md:hidden pointer-events-auto mix-blend-exclusion text-white uppercase text-xs font-bold">
        Menu
      </button>
    </nav>
  );
}
