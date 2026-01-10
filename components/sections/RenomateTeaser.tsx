'use client';

import { Button } from '@/components/ui/Button'
import { Sparkles, ArrowRight } from 'lucide-react'

export function RenomateTeaser() {
  return (
    <section className="bg-blue-600 text-white py-24 px-6 md:px-12 overflow-hidden relative">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[100px] opacity-50 pointer-events-none translate-x-1/2 -translate-y-1/2" />

       <div className="max-w-[1800px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-2xl">
               <div className="flex items-start gap-4 mb-8">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="space-y-4 flex-1">
                     <div className="bg-white/90 p-4 rounded-lg rounded-tl-none text-blue-900 text-sm font-medium shadow-lg">
                       "I want a coastal bathroom with terrazzo tiles, under $25k."
                     </div>
                     <div className="bg-blue-800/80 p-4 rounded-lg rounded-tr-none text-white text-sm ml-auto w-fit max-w-[90%] shadow-lg">
                        Based on your budget, I recommend 600x600 terrazzo-look porcelain tiles. Here are 3 supplier options in Sydney...
                     </div>
                  </div>
               </div>
               <div className="text-center pt-8 border-t border-white/10">
                 <span className="text-sm font-bold tracking-widest uppercase opacity-80">AI-Powered Renovation Assistant</span>
               </div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
             <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
               <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
               Beta Access
             </span>
             <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
               IMAGINE IT. <br />
               COST IT. <br />
               BUILD IT.
             </h2>
             <p className="text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed mb-10">
               Renomate helps you validate your renovation ideas instantly. Get design inspiration, material costs, and compliance checks before you spend a dollar.
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/renomate" variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-white/90 border-transparent">
                  Meet Renomate
                </Button>
                <Button href="/renomate" variant="secondary" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                  Read the Strategy <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
             </div>
          </div>
       </div>
    </section>
  )
}
