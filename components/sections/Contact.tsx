'use client';

import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', projectType: '', budget: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--color-background)] px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-8 text-[var(--color-muted)] text-center">
          Get a Quote
        </span>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-16 md:mb-24 leading-[0.9]">
          START YOUR PROJECT
        </h2>

        {status === 'success' ? (
          <div className="bg-foreground text-background p-12 text-center animate-in fade-in duration-500">
            <h3 className="text-2xl font-bold mb-4">Request Received</h3>
            <p className="opacity-80 text-background">Thank you for your interest. We will be in touch shortly to discuss your renovation.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-8 text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:opacity-50 transition-opacity"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="FIRST NAME"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-lg focus:outline-none focus:border-black transition-colors placeholder:text-[var(--color-muted)] placeholder:text-sm placeholder:font-bold placeholder:tracking-widest"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="LAST NAME"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-lg focus:outline-none focus:border-black transition-colors placeholder:text-[var(--color-muted)] placeholder:text-sm placeholder:font-bold placeholder:tracking-widest"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-lg focus:outline-none focus:border-black transition-colors placeholder:text-[var(--color-muted)] placeholder:text-sm placeholder:font-bold placeholder:tracking-widest"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE (OPTIONAL)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-lg focus:outline-none focus:border-black transition-colors placeholder:text-[var(--color-muted)] placeholder:text-sm placeholder:font-bold placeholder:tracking-widest"
                />
              </div>
            </div>
            <div className="relative">
               <select
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-lg focus:outline-none focus:border-black transition-colors text-[var(--foreground)]"
              >
                <option value="" disabled>PROJECT TYPE</option>
                <option value="complete-home">Whole Home Renovation</option>
                <option value="kitchen">Kitchen Renovation</option>
                <option value="bathroom">Bathroom Renovation</option>
                <option value="extension">Extension / Addition</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="relative">
              <textarea
                name="message"
                required
                placeholder="TELL US ABOUT YOUR PROJECT"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-lg focus:outline-none focus:border-black transition-colors resize-none placeholder:text-[var(--color-muted)] placeholder:text-sm placeholder:font-bold placeholder:tracking-widest"
              />
            </div>

            <div className="flex justify-center pt-8">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-foreground text-background px-12 py-5 text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-opacity disabled:opacity-50 w-full md:w-auto min-w-[300px]"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Request'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
