const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export type AvailableThemedColors = keyof typeof lightColors;

enum SupportedThemes {
  light = "light",
  dark = "dark",
}

export const lightColors = {
  text: "#11181C",
  textError: "#d32f2f",
  background: "#ffffff",
  tint: tintColorLight,
  border: "#687076",
  icon: "#687076",
  tabIconDefault: "#687076",
  tabIconSelected: tintColorLight,
  separator: "#ccc",
  tagBorder: "#000",
  primary: "#a3c4f3",
  primaryBorder: "#5a7fa4",
  primaryBackground: "#d0e1fb",
  secondary: "#f3a3a3",
  secondaryBorder: "#a35a5a",
  secondaryBackground: "#fbd0d0",
  success: "#a3f3a3",
  successBorder: "#5aa35a",
  successBackground: "#d0fbd0",
  warning: "#f3d6a3",
  warningBorder: "#a37f5a",
  warningBackground: "#fbefd0",
  error: "#f3a3a3",
  errorBorder: "#a35a5a",
  errorBackground: "#fbd0d0",
  cardBackground: "#f5f5f5",
  cardShadow: "#000",
  buttonPrimaryBackground: "#6200ee",
  buttonPrimaryText: "#ffffff",
  buttonSecondaryBackground: "#03dac6",
  buttonSecondaryText: "#000000",
  textInputBackground: "#f0f0f0",
};

export const darkColors = {
  text: "#ECEDEE",
  textError: "#ff8a80",
  background: "#121212",
  tint: tintColorDark,
  border: "#687076",
  icon: "#9BA1A6",
  tabIconDefault: "#9BA1A6",
  tabIconSelected: tintColorDark,
  separator: "#2D3336",
  tagBorder: "#ccc",
  primary: "#a3c4f3",
  primaryBorder: "#5a7fa4",
  primaryBackground: "#d0e1fb",
  secondary: "#f3a3a3",
  secondaryBorder: "#a35a5a",
  secondaryBackground: "#fbd0d0",
  success: "#a3f3a3",
  successBorder: "#5aa35a",
  successBackground: "#d0fbd0",
  warning: "#f3d6a3",
  warningBorder: "#a37f5a",
  warningBackground: "#fbefd0",
  error: "#f3a3a3",
  errorBorder: "#a35a5a",
  errorBackground: "#fbd0d0",
  cardBackground: "#1e1e1e",
  cardShadow: "#000000",
  buttonPrimaryBackground: "#bb86fc",
  buttonPrimaryText: "#000000",
  buttonSecondaryBackground: "#03dac6",
  buttonSecondaryText: "#000000",
  textInputBackground: "#f0f0f0",
};

export const Colors: Record<
  SupportedThemes,
  Record<AvailableThemedColors, string>
> = {
  light: lightColors,
  dark: darkColors,
} as const;
