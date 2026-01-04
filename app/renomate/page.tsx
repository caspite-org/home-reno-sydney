'use client';

import { Navbar } from '@/components/ui/Navbar'
import { Button } from '@/components/ui/Button'
import { BrainCircuit, Calculator, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react'

export default function RenomatePage() {
  const problems = [
    {
      icon: <ShieldAlert className="w-8 h-8 text-red-500" />,
      title: "The Risk of Overcapitalizing",
      description: "Most homeowners spend 20% more than their home's value increase. Renomate checks your scope against local property data."
    },
    {
      icon: <Calculator className="w-8 h-8 text-blue-500" />,
      title: "Budget Blowouts",
      description: "Variations cost the average renovation $12,000 extra. Renomate provides detailed, fixed-price estimates before you start."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-indigo-500" />,
      title: "Design Paralysis",
      description: "Stuck on layout? Renomate generates optimized floor plans based on your specific room dimensions and lifestyle."
    }
  ]

  const tools = [
    "Instant Cost Estimator (Kitchen / Bath / Extension)",
    "ROI & Value Calculator",
    "Material & Style Matcher",
    "Compliance & CDC Checker"
  ]

  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        
        {/* Hero */}
        <section className="px-6 md:px-12 mb-24 max-w-[1800px] mx-auto text-center md:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
             <div>
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6">
                  Beta Access
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.95]">
                  YOUR AI <br /> PROJECT MANAGER.
                </h1>
                <p className="text-xl md:text-2xl text-[var(--color-muted)] max-w-xl leading-relaxed mb-12">
                  Eliminate the guesswork. Renomate uses generative AI towards architectural logic to plan, cost, and visualize your renovation in seconds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="#" variant="primary" size="lg" className="bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700">
                    Try Renomate Free
                  </Button>
                  <Button href="/contact" variant="secondary" size="lg">
                    Book a Developer Consultation
                  </Button>
                </div>
             </div>
             
             {/* Product Demo Graphic */}
             <div className="relative aspect-square md:aspect-[4/3] bg-indigo-50 rounded-2xl border border-indigo-100 p-8 flex flex-col shadow-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-12 bg-white border-b border-indigo-100 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400" />
                   <div className="w-3 h-3 rounded-full bg-yellow-400" />
                   <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mt-8 flex-1 space-y-6 font-mono text-sm">
                   <div className="bg-white p-4 rounded-lg shadow-sm w-3/4 animate-[fadeIn_0.5s_ease-out_0.2s_both]">
                     <span className="text-xs text-indigo-400 block mb-1">User</span>
                     Estimate a 3x3m bathroom renovation in Mosman with high-end finishes.
                   </div>
                   <div className="bg-indigo-600 text-white p-4 rounded-lg shadow-sm w-5/6 ml-auto animate-[fadeIn_0.5s_ease-out_0.8s_both]">
                     <span className="text-xs text-indigo-200 block mb-1">Renomate AI</span>
                     Based on Mosman labor rates and high-end specs (natural stone, brass fixtures):
                     <br/><br/>
                     <strong>Estimated Range: $42,000 - $48,500</strong>
                     <br/>
                     <ul className="mt-2 list-disc pl-4 opacity-90">
                       <li>Demolition: $3.5k</li>
                       <li>Waterproofing & Tiling: $12k</li>
                       <li>Fixtures & PC Items: $18k</li>
                     </ul>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="bg-zinc-50 py-24 px-6 md:px-12 mb-32 border-y border-zinc-200">
           <div className="max-w-[1800px] mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                WHY WE BUILT THIS
              </h2>
              <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
                Renovating is complex. We built Renomate to solve the three biggest killers of project success.
              </p>
           </div>
           
           <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((item, i) => (
                <div key={i} className="bg-white p-8 md:p-12 border border-zinc-100 rounded-xl">
                   <div className="mb-6">{item.icon}</div>
                   <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                   <p className="text-[var(--color-muted)] leading-relaxed">
                     {item.description}
                   </p>
                </div>
              ))}
           </div>
        </section>

        {/* Tools Included */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4 block">Included Tools</span>
                 <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                   EVERYTHING YOU NEED TO PLAN.
                 </h2>
                 <ul className="space-y-6">
                    {tools.map((tool, i) => (
                      <li key={i} className="flex items-center gap-4 text-xl font-medium">
                        <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                        {tool}
                      </li>
                    ))}
                 </ul>
              </div>
               <div className="bg-zinc-900 text-white p-12 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-indigo-400" />
                    Renomate Intelligence
                  </h3>
                  <div className="space-y-6 text-zinc-400">
                    <p>"I can analyze your Pinterest board to identify the exact stone, timber, and paint colors used, then find local Sydney suppliers."</p>
                    <p>"I cross-check your floor plan against NSW Complying Development Codes (CDC) to flag potential approval issues."</p>
                  </div>
                  <Button href="#" variant="primary" className="mt-8 w-full bg-white text-black hover:bg-zinc-200 border-transparent">
                    Test the Beta
                  </Button>
               </div>
           </div>
        </section>

        {/* Lead Capture  */}
        <section className="bg-indigo-900 text-white py-24 px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              START YOUR PROJECT SMART
            </h2>
            <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-12">
              Join 500+ Sydney homeowners utilizing AI to de-risk their renovations.
            </p>
            <div className="max-w-md mx-auto flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-6 py-4 rounded-none bg-indigo-800/50 border border-indigo-700 text-white placeholder:text-indigo-400 focus:outline-none focus:border-white transition-colors"
              />
              <Button href="#" variant="primary" size="lg" className="w-full bg-white text-indigo-900 border-transparent hover:bg-indigo-50">
                Get Early Access
              </Button>
            </div>
        </section>

      </main>
    </>
  )
}
