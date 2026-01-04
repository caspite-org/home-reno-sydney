import { Navbar } from '@/components/ui/Navbar'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, ShieldCheck, Calculator, PenTool, Hammer, Star } from 'lucide-react'

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "01. Initial Consultation",
      description: "We meet on-site to understand your vision, assess the space, and discuss your lifestyle requirements and budget expectations."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "02. Design & Selection",
      description: "Our designers create detailed 3D models and help you select premium materials, fixtures, and finishes that align with your aesthetic."
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "03. Detailed Quoting",
      description: "Transparency is key. We provide a fixed-price contract with a clear breakdown of costs, so there are no surprises during the build."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "04. Compliance & Prep",
      description: "We handle all necessary council approvals (CDC/DA) and ensure all insurance and structural warranties are in place before we begin."
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "05. Precision Build",
      description: "Our master tradesmen execute the design with obsessive attention to detail, maintaining a clean site and providing regular updates."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "06. Handover",
      description: "A final walkthrough to ensure every detail meets our high standards. We provide all certificates and a detailed maintenance guide."
    }
  ]

  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        
        {/* Hero */}
        <section className="px-6 md:px-12 mb-24 max-w-[1800px] mx-auto">
          <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-6 text-[var(--color-muted)]">
            Our Process
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
            HOW IT WORKS
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-muted)] mt-12 max-w-2xl leading-relaxed">
            A structured, transparent approach to architectural renovations. We take the stress out of building by managing every detail from first sketch to final sweep.
          </p>
        </section>

        {/* Steps Grid */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-32">
          {steps.map((step, index) => (
            <div key={index} className="space-y-6">
              <div className="text-foreground">{step.icon}</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight">{step.title}</h3>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </section>

        {/* Budget Clarity Section */}
        <section className="bg-zinc-50 px-6 py-24 md:px-12 md:py-32">
          <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                BUDGET CLARITY & ROI
              </h2>
              <p className="text-xl text-[var(--color-muted)] leading-relaxed mb-8">
                We believe a renovation should be a calculated investment. We provide expert advice on where to invest for maximum value increase and lifestyle impact.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-lg font-medium">
                  <span className="w-2 h-2 bg-black rounded-full" />
                  Fixed-price contracts
                </li>
                <li className="flex items-center gap-3 text-lg font-medium">
                  <span className="w-2 h-2 bg-black rounded-full" />
                  Detailed material specifications
                </li>
                <li className="flex items-center gap-3 text-lg font-medium">
                  <span className="w-2 h-2 bg-black rounded-full" />
                  Staged payment schedules
                </li>
              </ul>
              <Button href="/contact" variant="primary">Discuss Your Budget</Button>
            </div>
            <div className="aspect-video bg-zinc-200 relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center text-[var(--color-muted)] italic p-12 text-center border border-zinc-300">
                    "Precision Reno delivered exactly what they promised, on budget and ahead of time. Their process is foolproof." — David S., Mosman
                </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-32 px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              START YOUR JOURNEY TODAY
            </h2>
            <Button href="/contact" variant="primary" size="lg">Book a Consultation</Button>
        </section>

      </main>
    </>
  )
}
