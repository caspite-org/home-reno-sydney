'use client';

import { Navbar } from '@/components/ui/Navbar';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        <span className="block text-xs font-bold tracking-[0.25em] uppercase mb-8 text-black/40">
          Our Story
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-16">
          DRIVEN BY <br />
          <span className="text-black/20 italic">PRECISION</span>
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
            <p className="text-xl md:text-2xl leading-relaxed text-black/80 font-medium mb-8">
              Founded in 2018, Home Reno Sydney was born from a desire to bridge the gap between high-concept architectural design and practical, high-quality construction.
            </p>
            <p className="text-lg leading-relaxed text-black/60 mb-12">
              We believe that every renovation should be an investment in lifestyle. Our approach combines rigorous project management with an uncompromising eye for detail, ensuring that the results are as enduring as they are beautiful.
            </p>
            <Button href="/#contact" variant="primary">Work with us</Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-[#F4F4F2] px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <span className="text-4xl font-light text-black/20 mb-6 block">01</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Architectural Integrity</h3>
              <p className="text-black/60 leading-relaxed">
                We respect the bones of every building we touch, enhancing original features while introducing modern functionality.
              </p>
            </div>
            <div>
              <span className="text-4xl font-light text-black/20 mb-6 block">02</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Material Excellence</h3>
              <p className="text-black/60 leading-relaxed">
                From natural stone to custom timber joinery, we source only the finest materials that age gracefully and feel premium.
              </p>
            </div>
            <div>
              <span className="text-4xl font-light text-black/20 mb-6 block">03</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Fixed Certainty</h3>
              <p className="text-black/60 leading-relaxed">
                Our &quot;Zero Surprise&quot; policy means fixed quotes and transparent timelines are at the core of every project agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Philosophy Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 max-w-4xl mx-auto leading-[1.1]">
          WE ARE A COLLECTIVE OF DESIGNERS, MAKERS, AND PROBLEM SOLVERS.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[3/4] relative bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
               <Image 
                src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop`} 
                alt="Team member"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
