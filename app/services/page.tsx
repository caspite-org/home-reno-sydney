import { Navbar } from '@/components/ui/Navbar'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      id: 'structural',
      title: 'Structural Renovation',
      description: 'We specialize in transformative structural changes that redefine the flow and function of your home. From opening up living spaces to complex extensions, our architectural approach ensures seamless integration.',
      features: [
        'Open-plan living configurations',
        'Load-bearing wall removal',
        'Second-story additions',
        'Ground-floor extensions',
        'Structural remediation'
      ],
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 'kitchen',
      title: 'Bespoke Kitchens',
      description: 'The heart of the home, reimagined. Our kitchen designs blend high-performance functionality with breathable, minimalist aesthetics using premium natural materials.',
      features: [
        'Custom joinery design',
        'Natural stone benchtops',
        'Smart appliance integration',
        'Butler’s pantry layout',
        'Lighting plans'
      ],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 'bathroom',
      title: 'Luxury Bathrooms',
      description: 'Create a sanctuary within your home. We design spa-inspired bathrooms that focus on material texture, light, and relaxation.',
      features: [
        'Walk-in rain showers',
        'Freestanding baths',
        'Custom vanity units',
        'Underfloor heating',
        'Natural light optimization'
      ],
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[var(--color-background)] min-h-screen pt-32 pb-24">
        
        {/* Header */}
        <section className="px-6 md:px-12 mb-24 max-w-[1800px] mx-auto">
          <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-6 text-[var(--color-muted)]">
            What We Do
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[var(--foreground)]">
            OUR SERVICES
          </h1>
        </section>

        {/* Services List */}
        <div className="px-6 md:px-12 max-w-[1800px] mx-auto space-y-32">
          {services.map((service, index) => (
            <section key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
              
              {/* Image */}
              <div className="w-full lg:w-1/2 aspect-[4/3] relative overflow-hidden bg-gray-200">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--foreground)]">
                  {service.title}
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-muted)] mb-12 max-w-xl">
                  {service.description}
                </p>
                
                <div className="mb-12">
                   <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Key Features</h3>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {service.features.map((feature) => (
                       <li key={feature} className="flex items-center gap-3 text-lg">
                         <span className="w-1.5 h-1.5 bg-black rounded-full" />
                         {feature}
                       </li>
                     ))}
                   </ul>
                </div>

              </div>

            </section>
          ))}
        </div>

        {/* Global CTA Section */}
        <section className="mt-32 px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              READY TO TRANSFORM YOUR HOME?
            </h2>
            <Link 
              href="/#contact"
              className="inline-block px-12 py-5 bg-[#111] text-white text-sm font-bold uppercase tracking-widest hover:bg-black/80 transition-colors"
            >
              Get a Quote
            </Link>
        </section>

      </main>
    </>
  )
}
