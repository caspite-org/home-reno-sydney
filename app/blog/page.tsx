'use client';

import { Navbar } from '@/components/ui/Navbar'
import { Button } from '@/components/ui/Button'
import { POSTS } from '@/lib/data/posts'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-24">
        
        {/* Header */}
        <section className="px-6 md:px-12 mb-24 max-w-[1800px] mx-auto">
          <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-6 text-[var(--color-muted)]">
            Journal
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
            RESOURCES & <br /> INSIGHTS
          </h1>
        </section>

        {/* Blog Grid */}
        <section className="px-6 md:px-12 max-w-[1800px] mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {POSTS.map((post) => (
                <Link href="#" key={post.id} className="group block h-full">
                   <article className="flex flex-col h-full">
                      <div className="aspect-[4/3] relative bg-zinc-200 mb-8 overflow-hidden">
                         <Image 
                           src={post.image}
                           alt={post.title}
                           fill
                           unoptimized
                           className="object-cover transition-transform duration-700 group-hover:scale-105"
                         />
                         <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                           {post.category}
                         </div>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <span className="text-xs text-[var(--color-muted)] font-medium mb-3 block">
                          {post.date}
                        </span>
                        <h2 className="text-2xl font-bold tracking-tight mb-4 group-hover:underline decoration-2 underline-offset-4 decoration-gray-300">
                          {post.title}
                        </h2>
                        <p className="text-[var(--color-muted)] leading-relaxed mb-6 flex-1">
                          {post.excerpt}
                        </p>
                        <span className="text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform inline-block">
                          Read Strategy &rarr;
                        </span>
                      </div>
                   </article>
                </Link>
              ))}
           </div>
        </section>

        {/* Newsletter / Lead Mag */}
        <section className="mt-32 px-6 md:px-12">
            <div className="max-w-[1800px] mx-auto bg-zinc-100 p-12 md:p-24 text-center">
               <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                 PLANNING A RENOVATION?
               </h2>
               <p className="text-lg text-[var(--color-muted)] max-w-xl mx-auto mb-12">
                 Join our mailing list to receive our free "Renovation Survival Guide" — 10 things you must know before signing a contract.
               </p>
               <div className="max-w-md mx-auto flex gap-4">
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="flex-1 bg-white border-none px-6 py-4 focus:ring-1 ring-black outline-none"
                 />
                 <Button href="#" variant="primary" size="md">Subscribe</Button>
               </div>
            </div>
        </section>

      </main>
    </>
  )
}
