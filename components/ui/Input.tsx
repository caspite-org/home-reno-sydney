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
          className="block text-sm font-semibold text-gray-900 mb-4"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full px-6 py-5 rounded-2xl text-base',
          'border-2 transition-all duration-300',
          'text-gray-900 bg-white',
          'placeholder:text-gray-500',
          'focus:outline-none focus:ring-2',
          error
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-200 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] hover:border-[var(--color-primary)]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-600">
          {helperText}
        </p>
      )}
    </div>
  )
}
