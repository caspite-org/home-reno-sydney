'use client';

import { Navbar } from '@/components/ui/Navbar'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'
import Image from 'next/image'

export default function WalkInRobesPage() {
  const features = [
    { title: "Custom Display", desc: "Open shelving and glass-fronted cabinets to showcase your collection." },
    { title: "Island Benches", desc: "Central islands with velvet-lined jewellery drawers and stone tops." },
    { title: "Integrated Lighting", desc: "Sensor-activated LED strip lighting in hangers and shelving." },
    { title: "Shoe Library", desc: "Angled shelving with heel stops to display footwear collections." }
  ]

  const budgetRanges = [
    {
      label: "Classic Walk-in",
      price: "$15k - $25k",
      desc: "Open shelving layout. Melamine finishes, standard hanging rails, and drawer banks."
    },
    {
      label: "Premium Dressing Room",
      price: "$25k - $45k",
      desc: "Polyurethane finish, island bench, LED lighting, and soft-close Blum hardware."
    },
    {
      label: "Boutique Luxury",
      price: "$50k+",
      desc: "Timber veneer, glass cabinets, stone island, leather accents, and full automation."
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
            WALK-IN <br /> ROBES
          </h1>
          <div className="aspect-video relative bg-zinc-200 overflow-hidden">
             <Image 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop"
              alt="Luxury Walk-in Robe"
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
                YOUR PRIVATE BOUTIQUE.
              </h2>
              <p className="text-xl leading-relaxed text-[var(--color-muted)]">
                Start and end your day in luxury. A well-designed walk-in robe isn't just storage—it's a personal sanctuary where everything is organized, visible, and beautiful.
              </p>
           </div>
           <div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-6 border-b border-black pb-4">Who This Is For</h3>
              <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                    <span className="text-[var(--color-muted)]">Fashion enthusiasts who need specialized storage for shoes and bags.</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                    <span className="text-[var(--color-muted)]">Couples requiring distinct 'his and hers' zones.</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                    <span className="text-[var(--color-muted)]">Homeowners with spare rooms ready to convert into a dressing room.</span>
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

        {/* Budget Guidance */}
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
           <p className="text-center text-xs text-[var(--color-muted)] mt-8 max-w-2xl mx-auto">
             *Estimates are based on average Sydney pricing. Final costs depend on material selection, room size, and joinery complexity.
           </p>
        </section>

        {/* Gallery Grid */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-square relative bg-zinc-100">
                <Image 
                  src="https://images.unsplash.com/photo-1560598613-2ffd99a32c28?q=80&w=1200"
                  alt="Walk in robe detail"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative bg-zinc-100">
                <Image 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200"
                  alt="Wardrobe storage"
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
              READY TO ORGANIZE?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button href="/contact" variant="primary" size="lg">Get a Robe Quote</Button>
               <Button href="/renomate" variant="secondary" size="lg">Estimate with AI</Button>
            </div>
        </section>

      </main>
    </>
  )
}
