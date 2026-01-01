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

  const paddingValues = {
    none: '0',
    sm: 'clamp(24px, 3vw, 32px)',
    md: 'clamp(32px, 4vw, 48px)',
    lg: 'clamp(48px, 5vw, 64px)',
  }

  return (
    <div
      className={cn(baseStyles, variants[variant], className)}
      style={{ padding: paddingValues[padding] }}
      {...props}
    >
      {children}
    </div>
  )
}
