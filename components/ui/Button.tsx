import Link from "next/link";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function Button({ 
  href, 
  variant = "primary", 
  size = "md",
  children, 
  icon, 
  className,
  onClick 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-foreground text-background border border-transparent hover:bg-background hover:text-foreground hover:border-foreground",
    secondary: "border-2 border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background",
  };

  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-8 py-4 text-sm tracking-widest",
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className, "group")}
    >
      {children}
      {icon && <span className="ml-2 group-hover:translate-x-1 transition-transform">{icon}</span>}
    </Link>
  );
}
