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
    <section id="contact" className="py-20 bg-[var(--color-surface)]">
      <Container size="md">
        <div className="text-center mb-12">
          <h2 className="text-[var(--font-size-headline-lg)] md:text-[var(--font-size-display-sm)] font-bold text-[var(--color-on-surface)] mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-[var(--font-size-body-lg)] md:text-[var(--font-size-title-md)] text-[var(--color-on-surface-variant)]">
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </div>

        <Card variant="elevated" padding="lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="block text-[var(--font-size-label-lg)] font-medium text-[var(--color-on-surface)] mb-2"
              >
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                className="w-full px-4 py-3 rounded-[var(--radius-expressive-md)] border-2 border-[var(--color-surface-variant)] text-[var(--color-on-surface)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200"
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
                className="block text-[var(--font-size-label-lg)] font-medium text-[var(--color-on-surface)] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                required
                className="w-full px-4 py-3 rounded-[var(--radius-expressive-md)] border-2 border-[var(--color-surface-variant)] text-[var(--color-on-surface)] bg-[var(--color-surface)] placeholder:text-[var(--color-on-surface-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200 resize-none"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-[var(--color-success-container)] text-[var(--color-on-success-container)] rounded-[var(--radius-expressive-md)]">
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-[var(--color-error-container)] text-[var(--color-on-error-container)] rounded-[var(--radius-expressive-md)]">
                Something went wrong. Please try again.
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Card>
      </Container>
    </section>
  )
}
