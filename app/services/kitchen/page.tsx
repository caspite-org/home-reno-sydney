'use client';

import { Navbar } from '@/components/ui/Navbar'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export default function KitchenPage() {
  const features = [
    {
      title: "Bespoke Joinery",
      description: "Custom cabinetry designed and built in Sydney to your exact specifications."
    },
    {
      title: "Natural Stone",
      description: "Premium marble, granite, and quartzite benchtops sourced from the finest suppliers."
    },
    {
      title: "Smart Integration",
      description: "Seamless integration of high-end appliances and intelligent lighting solutions."
    },
    {
      title: "Layout Optimization",
      description: "Functional layouts that maximize flow, storage, and social interaction."
    }
  ]

  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        
        {/* Hero */}
        <section className="px-6 md:px-12 mb-24 max-w-[1800px] mx-auto">
          <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-6 text-[var(--color-muted)]">
            Services
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12">
            BESPOKE <br /> KITCHENS
          </h1>
          <div className="aspect-video relative bg-zinc-200 overflow-hidden">
             <Image 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
              alt="Luxury Kitchen Renovation"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </section>

        {/* Introduction */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-32">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
              THE HEART OF THE HOME, REIMAGINED.
            </h2>
          </div>
          <div>
             <p className="text-xl leading-relaxed text-[var(--color-muted)] mb-8">
               We believe the kitchen is more than just a place to cook; it's the center of family life. Our approach to kitchen design combines high-performance functionality with breathable, minimalist aesthetics.
             </p>
             <p className="text-xl leading-relaxed text-[var(--color-muted)]">
               From the tactile quality of the joinery to the precise lighting placement, every element is considered to create a space that feels both inviting and architectural.
             </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-zinc-50 py-24 px-6 md:px-12 mb-32">
          <div className="max-w-[1800px] mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {features.map((feature, i) => (
                 <div key={i} className="space-y-4">
                   <h3 className="text-lg font-bold uppercase tracking-tight">{feature.title}</h3>
                   <p className="text-[var(--color-muted)]">{feature.description}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Gallery/Process Hint */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="aspect-[4/5] relative bg-zinc-200 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop"
                    alt="Kitchen Detail"
                    fill
                    unoptimized
                    className="object-cover"
                  />
               </div>
               <div className="aspect-[4/5] relative bg-zinc-200 overflow-hidden md:mt-24">
                  <Image 
                    src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=1200&auto=format&fit=crop"
                    alt="Kitchen Cabinetry"
                    fill
                    unoptimized
                    className="object-cover"
                  />
               </div>
            </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              START YOUR KITCHEN REMODEL
            </h2>
            <Button href="/contact" variant="primary" size="lg">Get a Fixed Quote</Button>
        </section>

      </main>
    </>
  )
}
