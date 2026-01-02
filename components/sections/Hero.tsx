export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden bg-[var(--color-background)]">
      {/* Decorative Grid Lines - common in architectural sites */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-black/5" />
        <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-black/5" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/5 hidden md:block" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto w-full">
        <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-6 text-[var(--color-muted)]">
          Est. 2024 — Sydney, Australia
        </span>
        
        <h1 className="flex flex-col font-bold leading-[0.9] tracking-tighter text-[var(--foreground)]">
          <span className="text-[12vw] md:text-[8rem] lg:text-[10rem] xl:text-[11rem]">HOME</span>
          <span className="text-[12vw] md:text-[8rem] lg:text-[10rem] xl:text-[11rem] ml-[5vw] md:ml-[10vw]">RENOVATION</span>
          <span className="text-[12vw] md:text-[8rem] lg:text-[10rem] xl:text-[11rem] self-end md:mr-[5vw]">SYDNEY</span>
        </h1>

        <div className="mt-12 md:mt-24 max-w-xl ml-auto md:mr-[10vw]">
          <p className="text-lg md:text-xl leading-relaxed text-[var(--color-foreground)] font-medium">
            We design sustainable interiors that reflect your unique style, enhance lifestyle, and bring timeless beauty to every corner of your home.
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 right-6 md:right-12 animate-pulse">
        <div className="w-px h-16 bg-black mx-auto" />
      </div>
    </section>
  );
}
