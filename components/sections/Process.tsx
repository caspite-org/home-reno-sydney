'use client';

const STEPS = [
  {
    id: '01',
    title: 'Architectural Discovery',
    description: 'We begin with an in-depth consultation to understand your lifestyle, aesthetic preferences, and the structural potential of your space.'
  },
  {
    id: '02',
    title: 'Precision Planning',
    description: 'Our design team develops detailed architectural plans and fixed-price quotes, ensuring transparency and technical feasibility from the start.'
  },
  {
    id: '03',
    title: 'Crafted Execution',
    description: 'Our specialist trades bring the vision to life with rigorous attention to detail, managed by a dedicated project lead.'
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-white px-6 md:px-12 border-t border-[var(--color-border)]">
      <div className="max-w-[1800px] mx-auto">
        <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-12 text-[var(--color-muted)]">
          The Journey
        </span>
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-24 max-w-4xl leading-[0.9]">
          BORN FROM PRECISION, <br />
          <span className="text-[var(--color-muted)]">BUILT FOR LIVING.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-24">
          {STEPS.map((step) => (
            <div key={step.id} className="relative group">
              <span className="text-sm font-mono text-[var(--color-muted)] block mb-6">
                Step {step.id}
              </span>
              <h3 className="text-3xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-300">
                {step.title}
              </h3>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                {step.description}
              </p>
              
              {/* Decorative Line */}
              <div className="mt-12 h-px bg-black/10 w-full relative">
                <div className="absolute top-0 left-0 h-px bg-black w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
