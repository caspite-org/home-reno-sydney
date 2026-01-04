'use client';

import { Navbar } from '@/components/ui/Navbar'
import { Button } from '@/components/ui/Button'
import { PROJECTS } from '@/lib/data/projects'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        
        {/* Header */}
        <section className="px-6 md:px-12 mb-24 max-w-[1800px] mx-auto">
          <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-6 text-[var(--color-muted)]">
            Portfolio
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
            SELECTED <br /> WORKS
          </h1>
        </section>

        {/* Projects Grid */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto space-y-32">
           {PROJECTS.map((project, index) => (
             <Link href={`/projects/${project.slug}`} key={project.id} className="block group">
               <article className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                  
                  {/* Image */}
                  <div className="w-full lg:w-3/5 aspect-[16/10] relative overflow-hidden bg-zinc-200">
                     <Image 
                       src={project.coverImage}
                       alt={project.title}
                       fill
                       unoptimized
                       className="object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-2/5">
                     <div className="flex flex-col gap-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">
                          {project.location} — {project.year}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight group-hover:underline decoration-2 underline-offset-8 decoration-gray-300">
                          {project.title}
                        </h2>
                        <span className="inline-block px-4 py-2 border border-black/10 text-xs font-bold uppercase tracking-wider w-fit">
                          {project.category}
                        </span>
                        <p className="text-lg text-[var(--color-muted)] line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                        <span className="text-sm font-bold uppercase tracking-widest mt-4">
                          View Project &rarr;
                        </span>
                     </div>
                  </div>

               </article>
             </Link>
           ))}
        </section>

        {/* CTA */}
        <section className="mt-32 px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              LIKE WHAT YOU SEE?
            </h2>
            <Button href="/contact" variant="primary" size="lg">Discuss Your Project</Button>
        </section>

      </main>
    </>
  )
}
