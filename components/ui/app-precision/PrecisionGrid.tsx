import React from "react";

interface PrecisionGridProps {
  className?: string;
  lineColor?: string;
}

export function PrecisionGrid({ className, lineColor = "bg-[var(--color-grid-line)]" }: PrecisionGridProps) {
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}>
      {/* Left Line */}
      <div className={`absolute left-6 md:left-12 top-0 bottom-0 w-px ${lineColor}`} />
      
      {/* Right Line */}
      <div className={`absolute right-6 md:right-12 top-0 bottom-0 w-px ${lineColor}`} />
      
      {/* Center Line (Hidden on mobile) */}
      <div className={`absolute left-1/2 top-0 bottom-0 w-px ${lineColor} hidden md:block`} />
      
      {/* Quarter Lines (Optional, for wider screens) */}
      <div className={`absolute left-1/4 top-0 bottom-0 w-px ${lineColor} hidden xl:block`} />
      <div className={`absolute left-3/4 top-0 bottom-0 w-px ${lineColor} hidden xl:block`} />
    </div>
  );
}
