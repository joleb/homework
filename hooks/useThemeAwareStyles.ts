import { useMemo } from "react";
import { useColorScheme } from "react-native";

import { Colors, AvailableThemedColors } from "@/constants/Colors";

export type CreateStylesColors = Record<AvailableThemedColors, string>;

type Generator<T extends Record<string, unknown>> = (
  colors: CreateStylesColors,
) => T;

export const useThemeAwareStyles = <T extends Record<string, unknown>>(
  createStyles: Generator<T>,
) => {
  const theme = useColorScheme() ?? "light";
  const styles = useMemo(
    () => createStyles(Colors[theme]),
    [theme, createStyles],
  );
  return styles;
};
