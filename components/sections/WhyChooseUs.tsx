'use client';

import { ShieldCheck, HardHat, CalendarClock, Scale } from 'lucide-react'

export function WhyChooseUs() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-black" />,
      title: "Licensed & Insured",
      description: "Fully licensed NSW builder (345672C) with comprehensive HBCF insurance for projects over $20k."
    },
    {
      icon: <Scale className="w-8 h-8 md:w-10 md:h-10 text-black" />,
      title: "Fixed Price Contracts",
      description: "We use standard NSW Fair Trading contracts with itemized scopes. No hidden variations."
    },
    {
      icon: <HardHat className="w-8 h-8 md:w-10 md:h-10 text-black" />,
      title: "Design & Construct",
      description: "One team for design, council approval, and construction. We stay accountable from start to finish."
    },
    {
      icon: <CalendarClock className="w-8 h-8 md:w-10 md:h-10 text-black" />,
      title: "On-Time Guarantee",
      description: "We provide a detailed critical path schedule and commit to handover dates."
    }
  ]

  return (
    <section className="bg-zinc-50 py-24 px-6 md:px-12 border-y border-zinc-200">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
           <div className="max-w-2xl">
              <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-6 text-[var(--color-muted)]">
                Why Us
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                BUILDING WITH <br /> INTEGRITY.
              </h2>
           </div>
           <p className="text-xl text-[var(--color-muted)] max-w-xl leading-relaxed">
             We stripped away the typical builder jargon and sales tactics. Just transparent quoting, quality materials, and a team that shows up.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
           {benefits.map((item, i) => (
             <div key={i} className="bg-white p-8 md:p-12 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed text-sm">{item.description}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
