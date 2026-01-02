import { BoxGrid, BoxItem } from "@/components/ui/app-precision/BoxGrid";

const PARTNERS = [
  "Reece", "Bunnings Trade", "Dulux", "Colorbond",
  "James Hardie", "Caesarstone", "Eco Outdoor", "Winning Appliances"
];

export function Partners() {
  return (
    <section className="relative py-24 bg-[var(--color-background)] overflow-hidden border-t border-[var(--color-border)]">


      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 mb-12">
            <div className="md:col-span-1"></div>
            <div className="md:col-start-2 md:col-span-1 text-center">
                 <p className="text-xl font-medium leading-relaxed mb-6">
                    We have partnered with 120+ companies to create positive impact.
                </p>
            </div>
            <div className="md:col-span-1"></div>
        </div>
       
        <BoxGrid>
          {PARTNERS.map((partner, index) => (
            <BoxItem key={index} className="flex flex-col items-center justify-center bg-[var(--color-card)]/50 hover:bg-[var(--color-card)] transition-colors duration-500">
               {/* Styled as a technical label since we don't have vector logos */}
               <span className="text-sm md:text-base font-bold text-[var(--color-foreground)] tracking-[0.2em] uppercase text-center transform group-hover:scale-105 transition-transform duration-500">
                 {partner}
               </span>
            </BoxItem>
          ))}
        </BoxGrid>
      </div>
    </section>
  );
}
