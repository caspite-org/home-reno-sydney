'use client';

import Link from 'next/link';

export function ServicesScroll() {
  const services = [
    {
      id: '01',
      title: 'Structural Renovation',
      description: 'Complete structural transformations, from open-plan living configurations to complex extensions and additions.',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: '02',
      title: 'Kitchen Design',
      description: 'Bespoke kitchen spaces that blend functionality with high-end aesthetic principles and premium materials.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop' 
    },
    {
      id: '03',
      title: 'Bathroom Luxury',
      description: 'Spa-like sanctuaries created within your home using natural stone, minimalist fixtures, and intelligent lighting.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="services" className="relative bg-[var(--color-card)] max-w-[1800px] mx-auto">
      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row">
        
        {/* Left Side - Sticky Text */}
        <div className="lg:w-1/2 p-6 md:p-12 lg:p-24 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center">
          <span className="text-xs font-bold tracking-[0.2em] uppercase mb-12 text-[var(--color-muted)]">
            Our Expertise
          </span>
          
          <div className="space-y-12">
            {services.map((service) => (
              <div key={service.id} className="group cursor-pointer">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm font-mono text-[var(--color-muted)]">{service.id}</span>
                  <h3 className="text-3xl md:text-4xl font-bold group-hover:text-[var(--color-muted)] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-lg text-[var(--color-muted)] max-w-md ml-10">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 ml-10">
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
                 <img 
                   src={service.image} 
                   alt={service.title}
                   className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
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
