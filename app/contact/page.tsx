'use client';

import { Navbar } from '@/components/ui/Navbar'
import { Button } from '@/components/ui/Button'
import { useActionState } from 'react'
import { submitInquiry } from '../actions'

const initialState = {
  success: false,
  message: ''
}

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitInquiry, initialState)

  if (state.success) {
    return (
      <>
        <Navbar />
        <main className="bg-background pt-32 pb-24 min-h-screen flex flex-col items-center justify-center text-center px-6">
          <section className="max-w-2xl animate-in fade-in zoom-in duration-500">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Thank You</h1>
            <p className="text-xl text-[var(--color-muted)] mb-12">
              Your inquiry has been received. Our team will review your project details and contact you shortly at simon@caspite.com.
            </p>
            <Button href="/" variant="primary">
              Back to Home
            </Button>
          </section>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        
        {/* Header */}
        <section className="px-6 md:px-12 mb-24 max-w-[1800px] mx-auto">
          <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-6 text-[var(--color-muted)]">
            Enquiry
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
            GET A QUOTE
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-muted)] mt-12 max-w-2xl leading-relaxed">
            Ready to start your renovation journey? Fill out the form below and we'll be in touch to discuss your vision, budget, and timeline.
          </p>
        </section>

        <section className="px-6 md:px-12 max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Form */}
          <div>
            <form action={formAction} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-4 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-4 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-4 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="+61 400 000 000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Service Interested In</label>
                  <select 
                    name="service"
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-4 focus:outline-none focus:border-foreground transition-colors"
                    defaultValue="kitchen"
                  >
                    <option value="kitchen">Kitchen Renovation</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="joinery">Joinery & Interior Upgrades</option>
                    <option value="structural">Structural / Full Home</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Estimated Budget</label>
                <select 
                  name="budget"
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 focus:outline-none focus:border-foreground transition-colors"
                  defaultValue="50k-100k"
                >
                  <option value="30k-50k">$30,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-200k">$100,000 - $200,000</option>
                  <option value="200k+">$200,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">About Your Project</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Tell us about your dream space..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full md:w-auto px-16" disabled={isPending}>
                {isPending ? 'Sending...' : 'Send Inquiry'}
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-12">
             <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[var(--color-muted)]">Our Studio</h3>
                <p className="text-2xl font-medium uppercase tracking-tight">Surry Hills, Sydney</p>
                <p className="text-lg text-[var(--color-muted)] mt-2">Available for consultations across Greater Sydney.</p>
             </div>

             <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[var(--color-muted)]">Direct Contact</h3>
                <p className="text-2xl font-medium"><a href="mailto:hello@homerenosydney.com.au">hello@homerenosydney.com.au</a></p>
                <p className="text-2xl font-medium mt-2"><a href="tel:0459700999">0459 700 999</a></p>
             </div>

             <div className="pt-12 border-t border-[var(--color-border)]">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[var(--color-muted)]">Warranty & Insurance</h3>

                <p className="text-[var(--color-muted)] mt-2">All work is covered by Home Building Compensation Fund (HBCF) insurance and structural warranties.</p>
             </div>
          </div>

        </section>

      </main>
    </>
  )
}

