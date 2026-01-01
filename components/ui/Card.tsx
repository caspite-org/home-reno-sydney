import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'elevated' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  children: ReactNode
}

/**
 * Card Component - Material Design 3 Expressive
 * Rounded containers with elevation and surface variants
 */
export const Card = ({
  variant = 'elevated',
  padding = 'md',
  className,
  children,
  ...props
}: CardProps) => {
  const baseStyles = 'rounded-[var(--radius-expressive-lg)] transition-all duration-200'

  const variants = {
    surface: 'bg-[var(--color-surface)]',
    elevated:
      'bg-[var(--color-surface)] shadow-[var(--shadow-level-2)] hover:shadow-[var(--shadow-level-3)]',
    outlined:
      'bg-[var(--color-background)] border-2 border-[var(--color-surface-variant)]',
  }

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={cn(baseStyles, variants[variant], paddings[padding], className)}
      {...props}
    >
      {children}
    </div>
  )
}
