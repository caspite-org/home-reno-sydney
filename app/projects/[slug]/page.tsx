import { Navbar } from '@/components/ui/Navbar'
import { Button } from '@/components/ui/Button'
import { PROJECTS } from '@/lib/data/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">
        
        {/* Hero */}
        <section className="relative h-[80vh] w-full bg-zinc-900">
           <Image 
             src={project.coverImage}
             alt={project.title}
             fill
             unoptimized
             className="object-cover opacity-80"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end px-6 md:px-12 pb-24">
              <span className="text-white/80 font-bold tracking-widest uppercase mb-4 block">
                {project.category} — {project.location}
              </span>
              <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 shadow-sm">
                {project.title}
              </h1>
              <div className="flex gap-12 text-white border-t border-white/20 pt-8 max-w-2xl">
                 {project.stats.map((stat, i) => (
                   <div key={i}>
                     <span className="block text-xs uppercase tracking-widest text-white/60 mb-1">{stat.label}</span>
                     <span className="block text-xl md:text-2xl font-medium">{stat.value}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Content */}
        <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-4">
                 <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 border-t border-black pt-4">Project Brief</h2>
              </div>
              <div className="lg:col-span-8">
                 <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-muted)]">
                   {project.description}
                 </p>
              </div>
           </div>
        </section>

        {/* Image Grid */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32 space-y-8">
           {project.images.map((img, index) => (
             <div key={index} className="aspect-video relative bg-zinc-100 overflow-hidden">
                <Image 
                  src={img}
                  alt={`${project.title} detail ${index + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                />
             </div>
           ))}
        </section>

        {/* Navigation */}
        <section className="py-24 border-t border-[var(--color-border)] px-6 md:px-12">
            <div className="max-w-[1800px] mx-auto flex justify-between items-center">
               <Link href="/projects" className="text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
                 &larr; All Projects
               </Link>
               <Button href="/contact" variant="primary">Start Your Project</Button>
            </div>
        </section>

      </main>
    </>
  )
}
