import Link from "next/link";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps {
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  disabled?: boolean;
}

export function Button({ 
  href, 
  type = "button",
  variant = "primary", 
  size = "md",
  children, 
  icon, 
  className,
  onClick,
  disabled
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-foreground text-background border border-transparent hover:bg-background hover:text-foreground hover:border-foreground",
    secondary: "border-2 border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background",
  };

  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-8 py-4 text-sm tracking-widest",
    lg: "px-12 py-5 text-base tracking-widest",
  };

  const combinedClasses = cn(baseClasses, variantClasses[variant], sizeClasses[size], className, "group");

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick as (e: React.MouseEvent<HTMLAnchorElement>) => void}
        className={combinedClasses}
      >
        {children}
        {icon && <span className="ml-2 group-hover:translate-x-1 transition-transform">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick as (e: React.MouseEvent<HTMLButtonElement>) => void}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
      {icon && <span className="ml-2 group-hover:translate-x-1 transition-transform">{icon}</span>}
    </button>
  );
}
