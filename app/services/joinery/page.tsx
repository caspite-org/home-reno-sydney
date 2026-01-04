'use client';

import { Navbar } from '@/components/ui/Navbar'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'
import Image from 'next/image'

export default function JoineryPage() {
  const features = [
    { title: "Walk-in Wardrobes", desc: "Custom configuration with islands, shoe display, and integrated lighting." },
    { title: "Entertainment Units", desc: "Floating or floor-standing units designed to hide cables and showcase style." },
    { title: "Home Office", desc: "Ergonomic workspaces built into alcoves or dedicated rooms." },
    { title: "Wine Cellars", desc: "Climate-controlled or ambient storage solutions for collectors." }
  ]

  const budgetRanges = [
    {
      label: "Built-in Wardrobe",
      price: "$3k - $8k",
      desc: "Standard melamine internals, sliding or hinged doors, simple finishes."
    },
    {
      label: "Custom Unit / Study",
      price: "$8k - $15k",
      desc: "Polyurethane finish, LED lighting, custom layout, soft-close hardware."
    },
    {
      label: "Walk-in / Full Room",
      price: "$20k+",
      desc: "Premium veneer, glass displays, island bench, intricate detailing."
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

        {/* Intro / Who It's For */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32">
           <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
                ELEVATE YOUR SPACE WITH CUSTOM DETAILS.
              </h2>
              <p className="text-xl leading-relaxed text-[var(--color-muted)]">
                Mass-produced furniture rarely fits perfectly. Our custom joinery is designed to the millimeter, maximizing every corner of your home while adding significant value and character.
              </p>
           </div>
           <div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-6 border-b border-black pb-4">Who This Is For</h3>
              <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                    <span className="text-[var(--color-muted)]">Those needing to maximize storage in smaller Sydney apartments.</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                    <span className="text-[var(--color-muted)]">Homeowners creating a dedicated, productive home office.</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                    <span className="text-[var(--color-muted)]">Anyone wanting a unified aesthetic flow throughout their home.</span>
                 </li>
              </ul>
           </div>
        </section>

        {/* Scope & Features Grid */}
        <section className="bg-zinc-50 py-24 px-6 md:px-12 mb-32 border-y border-zinc-200">
          <div className="max-w-[1800px] mx-auto">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-12 text-[var(--color-muted)]">Typical Scope & Inclusions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {features.map((feature, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials / Budget */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
             INVESTMENT GUIDE
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {budgetRanges.map((range, i) => (
                <div key={i} className="border border-zinc-200 p-8 hover:border-black transition-colors">
                   <h3 className="text-lg font-bold uppercase tracking-tight mb-4 text-[var(--color-muted)]">{range.label}</h3>
                   <div className="text-3xl md:text-4xl font-bold mb-6">{range.price}</div>
                   <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                     {range.desc}
                   </p>
                </div>
              ))}
           </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-[4/5] relative bg-zinc-100">
                <Image 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200"
                  alt="Detail 1"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/5] relative bg-zinc-100">
                <Image 
                  src="https://images.unsplash.com/photo-1600566776438-5f712a1bd916?q=80&w=1200"
                  alt="Detail 2"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
               <div className="aspect-[4/5] relative bg-zinc-100">
                <Image 
                  src="https://images.unsplash.com/photo-1595514020148-52b7c631c9dd?q=80&w=1200"
                  alt="Detail 3"
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button href="/contact" variant="primary" size="lg">Get a Joinery Quote</Button>
               <Button href="/renomate" variant="secondary" size="lg">Estimate with AI</Button>
            </div>
        </section>

      </main>
    </>
  )
}
