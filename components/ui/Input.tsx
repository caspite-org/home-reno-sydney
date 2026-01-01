import type { InputHTMLAttributes } from 'react'
import { cn } from '@/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

/**
 * Input Component - Material Design 3 Expressive
 * Rounded text input with label and error states
 */
export const Input = ({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}: InputProps) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-[var(--font-size-label-lg)] font-medium text-[var(--color-on-surface)] mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full px-4 py-3 rounded-[var(--radius-expressive-md)]',
          'border-2 transition-all duration-200',
          'text-[var(--color-on-surface)] bg-[var(--color-surface)]',
          'placeholder:text-[var(--color-on-surface-variant)]',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          error
            ? 'border-[var(--color-error)] focus:ring-[var(--color-error)]'
            : 'border-[var(--color-surface-variant)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-[var(--font-size-body-sm)] text-[var(--color-error)]">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">
          {helperText}
        </p>
      )}
    </div>
  )
}
