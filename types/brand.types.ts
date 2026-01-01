/**
 * Brand Identity Type Definitions
 * Material Design 3 Expressive Theme
 */

export interface ColorScheme {
  main: string
  light: string
  dark: string
  container: string
  onContainer: string
}

export interface SurfaceColors {
  background: string
  surface: string
  surfaceVariant: string
  surfaceTint: string
  onSurface: string
  onSurfaceVariant: string
}

export interface BrandColors {
  primary: ColorScheme
  secondary: ColorScheme
  tertiary: ColorScheme
  surface: SurfaceColors
  error: ColorScheme
  success: ColorScheme
}

export interface Typography {
  displayLarge: string
  displayMedium: string
  displaySmall: string
  headlineLarge: string
  headlineMedium: string
  headlineSmall: string
  titleLarge: string
  titleMedium: string
  titleSmall: string
  bodyLarge: string
  bodyMedium: string
  bodySmall: string
  labelLarge: string
  labelMedium: string
  labelSmall: string
}

export interface Spacing {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
}

export interface BorderRadius {
  expressiveSm: string
  expressiveMd: string
  expressiveLg: string
  expressiveXl: string
  expressive2xl: string
  full: string
}

export interface Elevation {
  level0: string
  level1: string
  level2: string
  level3: string
  level4: string
  level5: string
}

export interface BrandConfig {
  colors: BrandColors
  typography: Typography
  spacing: Spacing
  borderRadius: BorderRadius
  elevation: Elevation
}
