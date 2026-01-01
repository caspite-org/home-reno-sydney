'use client'

import { useState, type FormEvent } from 'react'
import { Container, Card, Input, Button } from '@/components/ui'

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // TODO: Implement actual form submission (Formspree or similar)
    // For now, simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus('success')
  }

  return (
    <section id="contact" className="py-32 md:py-48 bg-[var(--color-primary-container)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-5 rounded-full blur-xl" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--color-secondary)] opacity-5 rounded-full blur-xl" />

      <Container size="md">
        <div className="text-center mb-24 md:mb-28 relative z-10 px-6 md:px-0">
          <span className="text-[var(--color-primary)] text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
            Let's Talk
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-tertiary)] mb-6 leading-tight">
            Start Your
            <span className="block text-[var(--color-primary)] italic">Transformation</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed mx-auto" style={{ maxWidth: '42rem' }}>
            Tell us about your vision and we'll get back to you within 24 hours with a personalized quote
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-[var(--color-tertiary-container)] relative z-10 mx-6 md:mx-0" style={{ padding: 'clamp(48px, 5vw, 80px)' }}>
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Input
                label="First Name"
                type="text"
                name="firstName"
                placeholder="John"
                required
              />
              <Input
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Smith"
                required
              />
            </div>

            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="john.smith@example.com"
              required
            />

            <Input
              label="Phone"
              type="tel"
              name="phone"
              placeholder="+61 4XX XXX XXX"
              required
            />

            <div>
              <label
                htmlFor="projectType"
                className="block text-sm font-semibold text-[var(--color-on-surface)] mb-3"
              >
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                className="w-full px-5 py-4 rounded-2xl border-2 border-[var(--color-tertiary-container)] text-[var(--color-on-surface)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-300 appearance-none cursor-pointer hover:border-[var(--color-primary)] text-base"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23C4633F' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1.25rem center',
                }}
              >
                <option value="">Select a project type</option>
                <option value="kitchen">Kitchen Renovation</option>
                <option value="bathroom">Bathroom Renovation</option>
                <option value="both">Kitchen & Bathroom</option>
                <option value="design">Interior Design Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[var(--color-on-surface)] mb-3"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Share your vision, budget range, timeline, and any specific requirements..."
                required
                className="w-full px-5 py-4 rounded-2xl border-2 border-[var(--color-tertiary-container)] text-[var(--color-on-surface)] bg-[var(--color-surface)] placeholder:text-[var(--color-on-surface-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-300 resize-none hover:border-[var(--color-primary)] text-base"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-5 bg-[var(--color-success-container)] text-[var(--color-on-success-container)] rounded-2xl border-2 border-[var(--color-success)] animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="font-semibold">Thank you for reaching out!</p>
                <p className="text-sm mt-1">We'll review your project and get back to you within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-5 bg-[var(--color-error-container)] text-[var(--color-on-error-container)] rounded-2xl border-2 border-[var(--color-error)]">
                <p className="font-semibold">Oops! Something went wrong.</p>
                <p className="text-sm mt-1">Please try again or email us directly.</p>
              </div>
            )}

            <div className="pt-6">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] px-10 py-5 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Your Message...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}
