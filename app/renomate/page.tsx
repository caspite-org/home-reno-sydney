'use client';

import { Navbar } from '@/components/ui/Navbar'
import { Button } from '@/components/ui/Button'
import { BrainCircuit, Sparkles, MessageSquareCode, Ruler } from 'lucide-react'

export default function RenomatePage() {
  const features = [
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Smart Design Logic",
      description: "Our AI analyzes thousands of successful renovation layouts to suggest the optimal floor plan for your specific dimensions."
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Instant Estimation",
      description: "Get a real-time, data-backed cost estimate based on current Sydney material and labor rates."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Material Matching",
      description: "Upload a photo of a style you love, and Renomate will identify similar materials and suppliers available locally."
    },
    {
      icon: <MessageSquareCode className="w-8 h-8" />,
      title: "24/7 Consultation",
      description: "Ask technical questions about compliance, council approvals (CDC/DA), or construction methods at any time."
    }
  ]

  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        
        {/* Hero */}
        <section className="px-6 md:px-12 mb-24 max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1">
              <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-6 text-indigo-600">
                Beta Access
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
                MEET <br /> RENOMATE
              </h1>
              <p className="text-xl md:text-2xl text-[var(--color-muted)] max-w-xl leading-relaxed mb-12">
                Your intelligent renovation assistant. Renomate combines architectural expertise with generative AI to streamline planning, budgeting, and design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#" variant="primary" size="lg">Join Waitlist</Button>
                <Button href="/contact" variant="secondary" size="lg">Talk to a Human</Button>
              </div>
            </div>
            <div className="flex-1 w-full aspect-square relative bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl overflow-hidden border border-indigo-200">
               <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="relative w-full h-full bg-white rounded-xl shadow-2xl p-6 flex flex-col gap-4 border border-indigo-50">
                     {/* UI Mockup */}
                     <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-sm font-bold">Renomate AI</div>
                     </div>
                     <div className="flex-1 space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg rounded-tl-none text-sm text-gray-600">
                          Based on your 4x3m bathroom dimensions, I recommend a walk-in shower layout to maximize flow. Here is a generated cost estimate...
                        </div>
                         <div className="bg-indigo-600 text-white p-4 rounded-lg rounded-tr-none self-end text-sm w-3/4 ml-auto">
                          Can you show me options with terrazzo tiles?
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg rounded-tl-none text-sm text-gray-600">
                          Certainly. Here are 3 locally sourced terrazzo options within your budget...
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-zinc-900 text-white py-24 px-6 md:px-12 mb-32">
          <div className="max-w-[1800px] mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {features.map((feature, i) => (
                 <div key={i} className="space-y-6">
                   <div className="text-indigo-400">{feature.icon}</div>
                   <h3 className="text-xl font-bold uppercase tracking-tight">{feature.title}</h3>
                   <p className="text-white/60 leading-relaxed">{feature.description}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* How it works simple */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
              INTELLIGENCE IN EVERY STEP
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-8 border border-zinc-200 bg-zinc-50">
                  <span className="text-6xl font-bold text-black/5 mb-6 block">01</span>
                  <h3 className="text-lg font-bold uppercase mb-4">Input Vision</h3>
                  <p className="text-[var(--color-muted)]">Describe your dream space or upload inspiration photos.</p>
               </div>
               <div className="p-8 border border-zinc-200 bg-zinc-50">
                  <span className="text-6xl font-bold text-black/5 mb-6 block">02</span>
                  <h3 className="text-lg font-bold uppercase mb-4">AI Analysis</h3>
                  <p className="text-[var(--color-muted)]">Renomate cross-references building codes and design principles.</p>
               </div>
               <div className="p-8 border border-zinc-200 bg-zinc-50">
                  <span className="text-6xl font-bold text-black/5 mb-6 block">03</span>
                  <h3 className="text-lg font-bold uppercase mb-4">Plan Generation</h3>
                  <p className="text-[var(--color-muted)]">Receive a preliminary plan and quote to start your journey.</p>
               </div>
            </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 text-center">
            <p className="text-sm font-bold tracking-widest uppercase mb-6 text-indigo-600">The Future of Renovation</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              EXPERIENCE THE BETA
            </h2>
            <Button href="#" variant="primary" size="lg">Request Early Access</Button>
        </section>

      </main>
    </>
  )
}
