export type AvailableThemedColors = keyof typeof lightColors;

export enum SupportedThemes {
  light = "light",
  dark = "dark",
}

export const lightColors = {
  text: "#11181C",
  textError: "#d32f2f",
  background: "#ffffff",
  tint: "#6200EE",
  border: "#9BA1A6",
  icon: "#9BA1A6",
  tabIconDefault: "#9BA1A6",
  tabIconSelected: "#6200EE",
  separator: "#E0E0E0",
  tagBorder: "#333",
  primary: "#3B82F6",
  primaryBorder: "#1D4ED8",
  primaryBackground: "#E3F2FD",
  secondary: "#EF4444",
  secondaryBorder: "#B91C1C",
  secondaryBackground: "#FEE2E2",
  success: "#10B981",
  successBorder: "#047857",
  successBackground: "#D1FAE5",
  warning: "#F59E0B",
  warningBorder: "#B45309",
  warningBackground: "#FEF3C7",
  error: "#EF4444",
  errorBorder: "#B91C1C",
  errorBackground: "#FEE2E2",
  cardBackground: "#FAFAFA",
  cardShadow: "#00000033",
  buttonPrimaryBackground: "#3B82F6",
  buttonPrimaryText: "#FFFFFF",
  buttonSecondaryBackground: "#10B981",
  buttonSecondaryText: "#FFFFFF",
  textInputBackground: "#FFFFFF",
  textInputPlaceholder: "#6B7280",
};

export const darkColors = {
  text: "#ECEDEE",
  textError: "#ff8a80",
  background: "#121212",
  tint: "#bb86fc",
  border: "#3E4C59",
  icon: "#9BA1A6",
  tabIconDefault: "#9BA1A6",
  tabIconSelected: "#bb86fc",
  separator: "#2D3336",
  tagBorder: "#9BA1A6",
  primary: "#bb86fc",
  primaryBorder: "#7B52AB",
  primaryBackground: "#322A47",
  secondary: "#ff8a80",
  secondaryBorder: "#B23C17",
  secondaryBackground: "#4A1F1F",
  success: "#03DAC6",
  successBorder: "#018786",
  successBackground: "#003B38",
  warning: "#F59E0B",
  warningBorder: "#B45309",
  warningBackground: "#4A3009",
  error: "#ff8a80",
  errorBorder: "#B23C17",
  errorBackground: "#4A1F1F",
  cardBackground: "#1E1E1E",
  cardShadow: "#00000088",
  buttonPrimaryBackground: "#3700B3",
  buttonPrimaryText: "#FFFFFF",
  buttonSecondaryBackground: "#03DAC6",
  buttonSecondaryText: "#000000",
  textInputBackground: "#1C1C1C",
  textInputPlaceholder: "#9CA3AF",
};

export const Colors: Record<
  SupportedThemes,
  Record<AvailableThemedColors, string>
> = {
  light: lightColors,
  dark: darkColors,
} as const;