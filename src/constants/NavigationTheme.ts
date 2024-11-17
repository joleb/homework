import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const lightNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3B82F6",
    background: "#ffffff",
    card: "#FAFAFA",
    text: "#11181C",
    border: "#E0E0E0",
    notification: "#F59E0B",
  },
};

export const darkNavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#bb86fc",
    background: "#121212",
    card: "#1E1E1E",
    text: "#ECEDEE",
    border: "#3E4C59",
    notification: "#F59E0B",
  },
};
