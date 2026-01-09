'use client';

import Link from 'next/link';
import Image from 'next/image';

import { SERVICES } from '@/lib/data/services';

export function ServicesScroll() {
  const services = SERVICES;

  return (
    <section id="services" className="relative bg-[var(--color-background)] max-w-[1800px] mx-auto">
      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row">
        
        {/* Left Side - Sticky Text */}
        <div className="lg:w-1/2 p-6 md:p-12 lg:p-12 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center">
          <span className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-[var(--color-muted)]">
            Our Expertise
          </span>
          
          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.id} className="group cursor-pointer">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm font-mono text-[var(--color-muted)]">{service.orderId}</span>
                  <h3 className="text-3xl md:text-4xl font-bold group-hover:text-[var(--color-muted)] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-lg text-[var(--color-muted)] max-w-md ml-10">
                  {service.shortDescription}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 ml-10">
             <Link href="/services" className="inline-block text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
               View All Services
             </Link>
          </div>
        </div>

        {/* Right Side - Images (Just static stack for now, could be parallax) */}
        <div className="lg:w-1/2">
          {services.map((service) => (
            <div key={service.id} className="h-[50vh] lg:h-screen sticky top-0 lg:static flex items-center justify-center overflow-hidden border-b border-white/10">
               <div className="relative w-full h-full">
                 <Image 
                   src={service.image} 
                   alt={service.title}
                   fill
                   unoptimized
                   className="object-cover transition-transform duration-700 hover:scale-105"
                   loading="lazy"
                 />
                 <div className="absolute inset-0 bg-black/10"></div>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
