'use client';

import { Navbar } from '@/components/ui/Navbar';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        <span className="block text-xs font-bold tracking-[0.25em] uppercase mb-8 text-foreground/40">
          Our Story
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-16">
          DRIVEN BY <br />
          <span className="text-foreground/20 italic">PRECISION</span>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="aspect-[16/9] relative bg-gray-100 overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
              alt="Architectural detail" 
              fill
              unoptimized
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="max-w-xl">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-medium mb-8">
              Founded in 2018, Home Reno Sydney was born from a desire to bridge the gap between high-concept architectural design and practical, high-quality construction.
            </p>
            <p className="text-lg leading-relaxed text-foreground/60 mb-12">
              We believe that every renovation should be an investment in lifestyle. Our approach combines rigorous project management with an uncompromising eye for detail, ensuring that the results are as enduring as they are beautiful.
            </p>
            <Button href="/contact" variant="primary">Work with us</Button>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="bg-zinc-50 py-24 md:py-32 px-6 md:px-12 border-y border-zinc-200">
        <div className="max-w-[1800px] mx-auto text-center">
           <span className="block text-xs font-bold tracking-[0.25em] uppercase mb-8 text-foreground/40">
            Trust & Reliability
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16">
            LICENSED. INSURED. WARRANTED.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-white border border-zinc-200">
              <h3 className="text-xl font-bold uppercase mb-4">NSW LICENCE</h3>
              <p className="text-foreground/60">Fully licensed builders (Licence No. 345672C) ensuring all work meets strict Australian standards.</p>
            </div>
            <div className="p-8 bg-white border border-zinc-200">
              <h3 className="text-xl font-bold uppercase mb-4">HBCF INSURED</h3>
              <p className="text-foreground/60">Complete Home Building Compensation Fund (HBCF) insurance for every project over $20k.</p>
            </div>
            <div className="p-8 bg-white border border-zinc-200">
              <h3 className="text-xl font-bold uppercase mb-4">7-YEAR WARRANTY</h3>
              <p className="text-foreground/60">Peace of mind with a comprehensive 7-year structural warranty on all major renovations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-background px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <span className="text-4xl font-light text-foreground/20 mb-6 block">01</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Architectural Integrity</h3>
              <p className="text-foreground/60 leading-relaxed">
                We respect the bones of every building we touch, enhancing original features while introducing modern functionality.
              </p>
            </div>
            <div>
              <span className="text-4xl font-light text-foreground/20 mb-6 block">02</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Material Excellence</h3>
              <p className="text-foreground/60 leading-relaxed">
                From natural stone to custom timber joinery, we source only the finest materials that age gracefully and feel premium.
              </p>
            </div>
            <div>
              <span className="text-4xl font-light text-foreground/20 mb-6 block">03</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Fixed Certainty</h3>
              <p className="text-foreground/60 leading-relaxed">
                Our &quot;Zero Surprise&quot; policy means fixed quotes and transparent timelines are at the core of every project agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32 pb-32 px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            READY TO START?
          </h2>
          <Button href="/contact" variant="primary" size="lg">Get a Quote</Button>
      </section>
    </main>
  );
}
