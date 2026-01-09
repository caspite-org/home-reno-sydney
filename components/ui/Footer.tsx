'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-[var(--color-border)] px-6 py-12 md:px-12 md:py-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-4 h-4 bg-foreground" />
              <span className="text-xl font-bold tracking-tight uppercase">
                Home Reno Sydney
              </span>
            </div>
            <p className="text-lg text-[var(--color-muted)] max-w-sm">
              Architectural renovations driven by precision and executed with craftsmanship. Since 2018.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-foreground">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-medium uppercase tracking-wide">
              <li><Link href="/" className="hover:opacity-60 transition-opacity">Home</Link></li>
              <li><Link href="/services" className="hover:opacity-60 transition-opacity">Services</Link></li>
              <li><Link href="/projects" className="hover:opacity-60 transition-opacity">Projects</Link></li>
              <li><Link href="/how-it-works" className="hover:opacity-60 transition-opacity">How It Works</Link></li>
              <li><Link href="/renomate" className="hover:opacity-60 transition-opacity text-indigo-400">Renomate AI</Link></li>
              <li><Link href="/about" className="hover:opacity-60 transition-opacity">About</Link></li>
            </ul>
          </div>

          {/* Compliance & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-foreground">
              Trust & Contact
            </h4>
            <ul className="space-y-4 text-sm font-medium uppercase tracking-wide">
              <li className="text-[var(--color-muted)]">Licence No. 345672C</li>
              <li className="text-[var(--color-muted)]">HBCF Insured</li>
              <li className="pt-4"><a href="mailto:hello@homereno.sydney" className="hover:opacity-60 transition-opacity">hello@homereno.sydney</a></li>
              <li><a href="tel:+61290000000" className="hover:opacity-60 transition-opacity">+61 2 9234 5678</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-[var(--color-border)]">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            © {currentYear} HOME RENO SYDNEY — NSW LICENCE 345672C
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Get a Quote</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
