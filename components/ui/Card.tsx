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
  const baseStyles = 'rounded-3xl transition-all duration-200'

  const variants = {
    surface: 'bg-white',
    elevated:
      'bg-white shadow-lg hover:shadow-xl',
    outlined:
      'bg-[var(--color-background)] border-2 border-gray-200',
  }

  const paddings = {
    none: '',
    sm: 'p-4 md:p-6',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-10',
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
