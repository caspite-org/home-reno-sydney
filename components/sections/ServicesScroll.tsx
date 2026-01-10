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
        <div className="lg:w-1/2 p-6 md:p-8 lg:px-12 lg:py-8 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between">
          <div className="flex-none pt-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-muted)] block">
              Our Expertise
            </span>
          </div>
          
          <div className="flex-1 flex flex-col justify-between py-6 min-h-0">
            {services.map((service) => (
              <div 
                key={service.id} 
                onClick={() => {
                  document.getElementById(`service-img-${service.id}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group cursor-pointer flex-shrink-1 min-h-0 overflow-hidden"
              >
                <div className="flex items-baseline gap-4 mb-0.5">
                  <span className="text-xs lg:text-sm font-mono text-[var(--color-muted)]">{service.orderId}</span>
                  <h3 className="text-lg lg:text-xl xl:text-3xl font-bold group-hover:text-[var(--color-muted)] transition-colors truncate">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs lg:text-sm lg:leading-relaxed text-[var(--color-muted)] max-w-md ml-8 line-clamp-2">
                  {service.shortDescription}
                </p>
              </div>
            ))}
          </div>

          <div className="flex-none ml-8 pb-4">
             <Link href="/services" className="inline-block text-xs lg:text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
               View All Services
             </Link>
          </div>
        </div>

        {/* Right Side - Images (Just static stack for now, could be parallax) */}
        <div className="lg:w-1/2">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={`service-img-${service.id}`}
              className="h-[50vh] lg:h-screen sticky top-0 lg:static flex items-center justify-center overflow-hidden border-b border-white/10"
            >
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
