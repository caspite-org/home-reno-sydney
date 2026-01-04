'use client';

import { Navbar } from '@/components/ui/Navbar'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export default function BathroomPage() {
  const features = [
    {
      title: "Spa-Inspired",
      description: "Create a private sanctuary with rain showers, freestanding tubs, and mood lighting."
    },
    {
      title: "Waterproofing",
      description: "Guaranteed membrane installation and compliance with Australian Standards (AS 3740)."
    },
    {
      title: "Custom Vanities",
      description: "Floating or floor-standing vanities designed to maximize space and storage."
    },
    {
      title: "High-End Fixtures",
      description: "Selection of premium tapware (brass, brushed nickel, matte black) that lasts."
    }
  ]

  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        
        {/* Hero */}
        <section className="px-6 md:px-12 mb-24 max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
            <div>
              <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-6 text-[var(--color-muted)]">
                Services
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
                LUXURY <br /> BATHROOMS
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-[var(--color-muted)] max-w-lg leading-relaxed md:mb-4">
              Step into a space designed for relaxation. We turn functional wet areas into architectural sanctuaries.
            </p>
          </div>
          
          <div className="aspect-[16/9] relative bg-zinc-200 overflow-hidden">
             <Image 
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2000&auto=format&fit=crop"
              alt="Luxury Bathroom Renovation"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </section>

        {/* Process/Approach */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 mb-32 items-center">
          <div className="order-2 md:order-1 relative aspect-square bg-zinc-100 p-8 flex items-center justify-center">
             <div className="w-full h-full relative">
                 <Image 
                  src="https://images.unsplash.com/photo-1620626012053-93f2c850a3ee?q=80&w=1000&auto=format&fit=crop"
                  alt="Minimalist Bathroom Detail"
                  fill
                  unoptimized
                  className="object-cover"
                />
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-[1.1]">
              FORM MEETS FUNCTION.
            </h2>
             <p className="text-xl leading-relaxed text-[var(--color-muted)] mb-8">
               Bathrooms require a unique balance of aesthetic restraint and technical rigor. We handle everything from the initial waterproofing layout to the final silicone seal.
             </p>
             <p className="text-xl leading-relaxed text-[var(--color-muted)]">
               Our designs prioritize natural light, ventilation, and material texture—creating spaces that feel clean, warm, and timeless.
             </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-zinc-900 text-white py-24 px-6 md:px-12 mb-32">
          <div className="max-w-[1800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
              THE DETAILS MATTER
            </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {features.map((feature, i) => (
                 <div key={i} className="space-y-4 border-t border-white/20 pt-6">
                   <h3 className="text-lg font-bold uppercase tracking-tight">{feature.title}</h3>
                   <p className="text-white/60">{feature.description}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              UPGRADE YOUR SANCTUARY
            </h2>
            <Button href="/contact" variant="primary" size="lg">Get a Fixed Quote</Button>
        </section>

      </main>
    </>
  )
}
