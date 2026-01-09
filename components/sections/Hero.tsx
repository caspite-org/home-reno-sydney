"use client";

import { PrecisionCircle } from "@/components/ui/app-precision/PrecisionCircle";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";
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
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-16 md:pt-24 pb-12 overflow-hidden bg-background">
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

      <div className="relative z-10 px-6 md:px-12 pt-12 md:pt-20 h-full flex flex-col justify-center max-w-[1800px] mx-auto">
        <div className="max-w-4xl">
          <span className="block text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-8 text-black/60 flex items-center gap-4">
             <span className="w-12 h-[1px] bg-black"></span>
             Licensed & Insured: 345672C
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
            DESIGN-LED.<br />
            <span className="text-black/40">LICENSED.</span><br />
            ON-BUDGET.
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-black/60 max-w-2xl mb-12">
            The complete renovation service for Sydney homeowners & investors. We bridge the gap between architectural design and reliable construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button href="/contact" variant="primary" size="lg">
              Get a Consultation
            </Button>
            <Button href="/renomate" variant="secondary" size="lg" icon={<Sparkles className="w-4 h-4" />}>
              Try Renomate AI
            </Button>
          </div>
          
          <div className="mt-16 flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-black/40">
             <span>NSW Builders Licence 345672C</span>
             <span className="w-1 h-1 bg-black/20 rounded-full"></span>
             <span>6-Year Structural Warranty</span>
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
