'use client';

import { Navbar } from '@/components/ui/Navbar'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export default function JoineryPage() {
  const categories = [
    {
      title: "Wardrobes & Storage",
      description: "Bespoke walk-in wardrobes and intelligent storage solutions that de-clutter your life without compromising on style.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Entertainment Units",
      description: "Custom-designed media units that hide cables and blend seamlessly with your living room's architecture.",
      image: "https://images.unsplash.com/photo-1600566776438-5f712a1bd916?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Home Office",
      description: "Productive, ergonomic workspaces built into alcoves, spare rooms, or dedicated studies.",
      image: "https://images.unsplash.com/photo-1595514020148-52b7c631c9dd?q=80&w=1200&auto=format&fit=crop"
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
            JOINERY & <br /> UPGRADES
          </h1>
          <div className="aspect-[21/9] relative bg-zinc-200 overflow-hidden">
             <Image 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
              alt="Custom Joinery"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </section>

        {/* Intro */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto text-center mb-32">
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1]">
             ELEVATE YOUR SPACE WITH CUSTOM DETAILS.
           </h2>
           <p className="text-xl leading-relaxed text-[var(--color-muted)] max-w-2xl mx-auto">
             Mass-produced furniture rarely fits perfectly. Our custom joinery is designed to the millimeter, maximizing every corner of your home while adding significant value and character.
           </p>
        </section>

        {/* Categories */}
         <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {categories.map((cat, i) => (
                <div key={i} className="group cursor-default">
                   <div className="aspect-square relative overflow-hidden bg-zinc-100 mb-8">
                     <Image
                       src={cat.image}
                       alt={cat.title}
                       fill
                       unoptimized
                       className="object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                   </div>
                   <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{cat.title}</h3>
                   <p className="text-[var(--color-muted)] leading-relaxed">{cat.description}</p>
                </div>
             ))}
           </div>
         </section>

        {/* Materials */}
        <section className="bg-zinc-50 py-24 px-6 md:px-12 mb-32">
           <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                  PREMIUM MATERIALS
                </h2>
                <ul className="space-y-6">
                  <li className="flex flex-col">
                    <span className="font-bold uppercase tracking-wide border-b border-black/10 pb-2 mb-2">TIMBER VENEERS</span>
                    <span className="text-[var(--color-muted)]">American Oak, Walnut, Blackbutt, and custom stains.</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-bold uppercase tracking-wide border-b border-black/10 pb-2 mb-2">POLYURETHANE</span>
                    <span className="text-[var(--color-muted)]">High-durability finishes in any Dulux colour, from matte to high gloss.</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-bold uppercase tracking-wide border-b border-black/10 pb-2 mb-2">HARDWARE</span>
                    <span className="text-[var(--color-muted)]">Blum soft-close hinges and drawer runners as standard.</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-[4/3] relative bg-zinc-200 overflow-hidden">
                 <Image 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                  alt="Material Swatches"
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
              CUSTOMIZE YOUR HOME
            </h2>
            <Button href="/contact" variant="primary" size="lg">Get a Fixed Quote</Button>
        </section>

      </main>
    </>
  )
}
