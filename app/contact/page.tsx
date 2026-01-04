'use client';

import { Navbar } from '@/components/ui/Navbar'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'kitchen',
    message: '',
    budget: '50k-100k'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry. Our design team will contact you within 24 hours to schedule a consultation.')
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
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-4 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-4 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="john@example.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-4 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="+61 400 000 000"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Service Interested In</label>
                  <select 
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-4 focus:outline-none focus:border-foreground transition-colors"
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
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
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 focus:outline-none focus:border-foreground transition-colors"
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
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
                  rows={4}
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Tell us about your dream space..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <Button type="submit" variant="primary" className="w-full md:w-auto px-16">
                Send Inquiry
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
                <p className="text-2xl font-medium"><a href="mailto:hello@homereno.sydney">hello@homereno.sydney</a></p>
                <p className="text-2xl font-medium mt-2"><a href="tel:+61292345678">+61 2 9234 5678</a></p>
             </div>

             <div className="pt-12 border-t border-[var(--color-border)]">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[var(--color-muted)]">Licence & Warranty</h3>
                <p className="text-sm font-bold uppercase tracking-widest">NSW Licence 345672C</p>
                <p className="text-[var(--color-muted)] mt-2">All work is covered by Home Building Compensation Fund (HBCF) insurance and structural warranties.</p>
             </div>
          </div>

        </section>

      </main>
    </>
  )
}
