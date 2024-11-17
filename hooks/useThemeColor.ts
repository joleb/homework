import useColorScheme from "./useColorScheme";

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
