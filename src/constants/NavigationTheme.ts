import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const lightNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3B82F6", // Brighter primary color for active navigation items
    background: "#ffffff", // White background for the app
    card: "#FAFAFA", // Softer gray background for navigation cards
    text: "#11181C", // Darker text color for readability
    border: "#E0E0E0", // Light gray border for subtle separation
    notification: "#F59E0B", // Yellow-orange for notifications
  },
};

export const darkNavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#bb86fc", // Light purple for active navigation items
    background: "#121212", // Dark background for the app
    card: "#1E1E1E", // Dark gray background for navigation cards
    text: "#ECEDEE", // Light text color for readability
    border: "#3E4C59", // Darker border for subtle separation
    notification: "#F59E0B", // Yellow-orange for notifications
  },
};
