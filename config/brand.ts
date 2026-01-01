/**
 * Brand Identity Configuration
 * Material Design 3 Expressive Theme
 * Home Reno Sydney
 */

import type { BrandConfig } from '@/types'

export const brand: BrandConfig = {
  colors: {
    // Primary: Deep Blue - Trust, professionalism, reliability
    primary: {
      main: '#1E40AF', // Deep blue
      light: '#3B82F6', // Lighter blue
      dark: '#1E3A8A', // Darker blue
      container: '#DBEAFE', // Light blue container
      onContainer: '#1E3A8A', // Text on container
    },

    // Secondary: Warm Orange - Energy, creativity, warmth
    secondary: {
      main: '#EA580C', // Warm orange
      light: '#FB923C', // Lighter orange
      dark: '#C2410C', // Darker orange
      container: '#FED7AA', // Light orange container
      onContainer: '#7C2D12', // Text on container
    },

    // Tertiary: Slate Gray - Modern, sophisticated
    tertiary: {
      main: '#475569', // Slate gray
      light: '#64748B', // Lighter slate
      dark: '#334155', // Darker slate
      container: '#E2E8F0', // Light slate container
      onContainer: '#0F172A', // Text on container
    },

    // Surface colors
    surface: {
      background: '#FFFFFF', // Pure white background
      surface: '#F8FAFC', // Slight off-white surface
      surfaceVariant: '#F1F5F9', // Variant surface
      surfaceTint: '#1E40AF', // Tint (matches primary)
      onSurface: '#0F172A', // Dark text on surface
      onSurfaceVariant: '#475569', // Medium text on surface
    },

    // Error: Red
    error: {
      main: '#DC2626', // Red
      light: '#EF4444', // Lighter red
      dark: '#B91C1C', // Darker red
      container: '#FEE2E2', // Light red container
      onContainer: '#7F1D1D', // Text on container
    },

    // Success: Green
    success: {
      main: '#16A34A', // Green
      light: '#22C55E', // Lighter green
      dark: '#15803D', // Darker green
      container: '#D1FAE5', // Light green container
      onContainer: '#14532D', // Text on container
    },
  },

  typography: {
    // Display - Large, impactful headlines
    displayLarge: '3.5rem', // 56px
    displayMedium: '2.75rem', // 44px
    displaySmall: '2.25rem', // 36px

    // Headline - Section headers
    headlineLarge: '2rem', // 32px
    headlineMedium: '1.75rem', // 28px
    headlineSmall: '1.5rem', // 24px

    // Title - Card titles, section headings
    titleLarge: '1.375rem', // 22px
    titleMedium: '1.125rem', // 18px
    titleSmall: '0.875rem', // 14px

    // Body - Main content
    bodyLarge: '1rem', // 16px
    bodyMedium: '0.875rem', // 14px
    bodySmall: '0.75rem', // 12px

    // Label - Buttons, labels
    labelLarge: '0.875rem', // 14px
    labelMedium: '0.75rem', // 12px
    labelSmall: '0.6875rem', // 11px
  },

  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
  },

  // M3 Expressive - Extra rounded corners
  borderRadius: {
    expressiveSm: '0.75rem', // 12px
    expressiveMd: '1rem', // 16px
    expressiveLg: '1.5rem', // 24px
    expressiveXl: '1.75rem', // 28px
    expressive2xl: '2rem', // 32px
    full: '9999px', // Fully rounded
  },

  // Material Design 3 elevation levels
  elevation: {
    level0: 'none',
    level1: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    level2: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    level3:
      '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    level4:
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    level5:
      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
}
