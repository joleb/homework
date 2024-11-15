const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export type AvailableThemedColors = keyof typeof lightColors;

enum SupportedThemes {
  light = "light",
  dark = "dark",
}

const lightColors = {
  text: "#11181C",
  background: "#ffffff",
  tint: tintColorLight,
  icon: "#687076",
  tabIconDefault: "#687076",
  tabIconSelected: tintColorLight,
  separator: "#ccc",
  tagBorder: "#000",
  primary: "#6200ee",
  primaryBorder: "#3700b3",
  primaryBackground: "#bb86fc",
  secondary: "#03dac6",
  secondaryBorder: "#018786",
  secondaryBackground: "#03dac6",
  success: "#4caf50",
  successBorder: "#388e3c",
  successBackground: "#c8e6c9",
  warning: "#ff9800",
  warningBorder: "#f57c00",
  warningBackground: "#ffe0b2",
  error: "#f44336",
  errorBorder: "#d32f2f",
  errorBackground: "#ffcdd2",
  cardBackground: "#f5f5f5",
  cardShadow: "#e0e0e0",
};

const darkColors = {
  text: "#ECEDEE",
  background: "#121212",
  tint: tintColorDark,
  icon: "#9BA1A6",
  tabIconDefault: "#9BA1A6",
  tabIconSelected: tintColorDark,
  separator: "#2D3336",
  tagBorder: "#ccc",
  primary: "#bb86fc",
  primaryBorder: "#3700b3",
  primaryBackground: "#6200ee",
  secondary: "#03dac6",
  secondaryBorder: "#018786",
  secondaryBackground: "#03dac6",
  success: "#4caf50",
  successBorder: "#388e3c",
  successBackground: "#c8e6c9",
  warning: "#ff9800",
  warningBorder: "#f57c00",
  warningBackground: "#ffe0b2",
  error: "#cf6679",
  errorBorder: "#b00020",
  errorBackground: "#ffccd5",
  cardBackground: "#1e1e1e",
  cardShadow: "#000000",
};

export const Colors: Record<
  SupportedThemes,
  Record<AvailableThemedColors, string>
> = {
  light: lightColors,
  dark: darkColors,
} as const;

export type ThemedColors = typeof Colors.light | typeof Colors.dark;
