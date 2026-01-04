"use client";

import { PrecisionCircle } from "@/components/ui/app-precision/PrecisionCircle";
import { Button } from "@/components/ui/Button";
import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Dot grid configuration
    const dotSpacing = 24;
    const dotRadius = 1;
    const maxGlowRadius = 120; // Distance at which dots start glowing

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dots
      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
          
          if (distance < maxGlowRadius) {
            // Calculate opacity based on distance (smooth falloff)
            const intensity = 1 - distance / maxGlowRadius;
            const opacity = 0.12 + intensity * 0.18; // Subtle opacity change only

            ctx.beginPath();
            ctx.arc(x, y, dotRadius, 0, Math.PI * 2); // Keep size constant
            ctx.fillStyle = `rgba(17, 17, 17, ${opacity})`;
            ctx.fill();
          } else {
            // Normal dot
            ctx.beginPath();
            ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(17, 17, 17, 0.12)";
            ctx.fill();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden bg-background">
      {/* Interactive Dot Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ width: "100%", height: "100%", pointerEvents: "none" }}
      />

      {/* Decorative Circles with Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center">
        <PrecisionCircle className="w-[140vh] h-[140vh] opacity-[0.08] animate-[spin_60s_linear_infinite]" />
        <PrecisionCircle className="w-[110vh] h-[110vh] opacity-[0.12] animate-[spin_40s_linear_infinite_reverse]" />
        <PrecisionCircle className="w-[80vh] h-[80vh] opacity-[0.18]" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto w-full">
        <span className="block text-xs font-bold tracking-[0.25em] uppercase mb-10 text-foreground/60 animate-[fadeIn_0.8s_ease-out]">
          Sydney&apos;s Architectural Renovation Specialists
        </span>
        
        <h1 className="flex flex-col font-bold leading-[1.05] tracking-[-0.02em] text-foreground">
          <span className="text-[10vw] md:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem] animate-[slideInLeft_0.8s_ease-out]">
            TRANSFORM
          </span>
          <span className="text-[10vw] md:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem] ml-[8vw] md:ml-[12vw] animate-[slideInLeft_0.9s_ease-out]"
          >
            YOUR SPACE
          </span>
        </h1>

        <div className="mt-16 md:mt-20 max-w-xl ml-auto md:mr-[12vw] animate-[fadeIn_1s_ease-out_0.3s_both]">
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-medium mb-10">
            Precision-engineered renovations that blend architectural excellence with livable design. 
            <span className="block mt-3 text-foreground/60">
              Fixed quotes • Transparent timelines • Zero surprises
            </span>
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              href="#process"
              variant="primary"
              icon={
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              }
            >
              See Our Process
            </Button>
            <Button 
              href="#contact"
              variant="secondary"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 right-6 md:right-12 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-wider uppercase text-foreground/40">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-foreground/40 to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
