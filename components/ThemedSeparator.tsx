import { View, StyleSheet } from "react-native";
import { useMemo } from "react";

import { useThemeColor } from "../hooks/useThemeColor";

import { ThemedViewProps } from "./ThemedView";

const ThemedSeparator = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "separator",
  );
  const mergedStyle = useMemo(
    // custom styles should always be applied after theme styles
    () => StyleSheet.flatten([{ height: 1, backgroundColor }, style]),
    [style, backgroundColor],
  );

  return <View style={mergedStyle} {...otherProps} />;
};

export default ThemedSeparator;
