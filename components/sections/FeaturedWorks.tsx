'use client';

import { PROJECTS } from '@/lib/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export function FeaturedWorks() {
  // Show only first 2 projects
  const featured = PROJECTS.slice(0, 2);

  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div>
              <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-6 text-[var(--color-muted)]">
                Selected Works
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                RECENT <br /> TRANSFORMATIONS
              </h2>
           </div>
           <Button href="/projects" variant="secondary" className="hidden md:flex">
             View All Projects
           </Button>
        </div>

        <div className="flex flex-col gap-24">
           {featured.map((project, index) => (
             <Link href={`/projects/${project.slug}`} key={project.id} className="group block">
               <article className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12`}>
                  <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                     <div className="aspect-[16/10] relative overflow-hidden bg-zinc-200">
                        <Image 
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                     </div>
                  </div>
                  <div className={`lg:col-span-4 flex flex-col justify-end ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                     <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] mb-4">
                       {project.location}
                     </span>
                     <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 group-hover:underline decoration-2 underline-offset-8">
                       {project.title}
                     </h3>
                     <p className="text-[var(--color-muted)] line-clamp-3 leading-relaxed mb-8">
                       {project.description}
                     </p>
                     <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 w-fit">
                       View Case Study <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                     </div>
                  </div>
               </article>
             </Link>
           ))}
        </div>

        <div className="mt-16 md:hidden">
           <Button href="/projects" variant="secondary" className="w-full justify-center">
             View All Projects
           </Button>
        </div>
      </div>
    </section>
  )
}
