/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from "react-native";

import { AvailableThemedColors, Colors } from "@/constants/Colors";

export const useThemeColor = (
  // let them pass in a color for light and dark mode
  props: { light?: string; dark?: string },
  colorName: AvailableThemedColors,
) => {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
};
