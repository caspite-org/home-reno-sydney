import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

/**
 * Button Component - Material Design 3 Expressive
 * Rounded, elevated buttons with smooth transitions
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] focus:ring-[var(--color-primary)] shadow-[var(--shadow-level-2)] hover:shadow-[var(--shadow-level-3)]',
    secondary:
      'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-dark)] focus:ring-[var(--color-secondary)] shadow-[var(--shadow-level-2)] hover:shadow-[var(--shadow-level-3)]',
    tertiary:
      'bg-[var(--color-tertiary)] text-white hover:bg-[var(--color-tertiary-dark)] focus:ring-[var(--color-tertiary)] shadow-[var(--shadow-level-2)] hover:shadow-[var(--shadow-level-3)]',
    outline:
      'bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-container)] focus:ring-[var(--color-primary)]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-[var(--font-size-label-md)] rounded-[var(--radius-expressive-md)]',
    md: 'px-6 py-3 text-[var(--font-size-label-lg)] rounded-[var(--radius-expressive-lg)]',
    lg: 'px-8 py-4 text-[var(--font-size-title-md)] rounded-[var(--radius-expressive-xl)]',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
