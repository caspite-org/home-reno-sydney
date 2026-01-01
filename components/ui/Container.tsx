import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  children: ReactNode
}

/**
 * Container Component
 * Responsive container with max-width constraints
 */
export const Container = ({
  size = 'lg',
  className,
  children,
  ...props
}: ContainerProps) => {
  const baseStyles = 'mx-auto px-4 sm:px-6 lg:px-8'

  const sizes = {
    sm: 'max-w-3xl', // 768px
    md: 'max-w-5xl', // 1024px
    lg: 'max-w-7xl', // 1280px
    xl: 'max-w-[1440px]',
    full: 'max-w-full',
  }

  return (
    <div className={cn(baseStyles, sizes[size], className)} {...props}>
      {children}
    </div>
  )
}
