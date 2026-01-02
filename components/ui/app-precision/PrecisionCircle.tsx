
interface PrecisionCircleProps {
  className?: string;
  size?: number | string;
}

export function PrecisionCircle({ className }: PrecisionCircleProps) {
  return (
    <div className={`absolute pointer-events-none rounded-full border border-[var(--color-circle-border)] ${className}`} />
  );
}
