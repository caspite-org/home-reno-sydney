import { ReactNode } from "react";

interface BoxGridProps {
  children: ReactNode;
  className?: string;
}

interface BoxItemProps {
  children: React.ReactNode;
  className?: string;
}

export function BoxGrid({ children, className = "" }: BoxGridProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 border-l border-t border-[var(--color-border)] ${className}`}>
      {children}
    </div>
  );
}

export function BoxItem({ children, className = "" }: BoxItemProps) {
  return (
    <div className={`relative group border-r border-b border-[var(--color-border)] p-8 flex items-center justify-center aspect-[4/3] ${className}`}>
        {/* Crosshair markers on corners could be added here if needed, 
            but standard grid borders usually suffice for this look. 
            We can add subtle corner accents for extra "tech" feel. 
        */}
        <div className="absolute -top-px -left-px w-2 h-px bg-foreground/10 group-hover:bg-foreground/30 transition-colors" />
        <div className="absolute -top-px -left-px w-px h-2 bg-foreground/10 group-hover:bg-foreground/30 transition-colors" />

        {children}
    </div>
  );
}
