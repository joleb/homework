import { Text, type TextProps, StyleSheet } from "react-native";
import { useMemo } from "react";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "caption"
    | "small";
  variant?: "default" | "warning";
};

const colorMapping = {
  default: "text",
  warning: "textError",
} as const;

export const ThemedText = ({
  style,
  lightColor,
  darkColor,
  variant = "default",
  type = "default",
  ...rest
}: ThemedTextProps) => {
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorMapping[variant],
  );

  const mergedStyle = useMemo(
    // custom styles should always be applied after theme styles
    () => StyleSheet.flatten([{ color }, styles[type], style]),
    [style, color, type],
  );
  return <Text style={mergedStyle} {...rest} />;
};

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  small: {
    fontSize: 14,
    lineHeight: 20,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 22,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "bold",
  },
});
