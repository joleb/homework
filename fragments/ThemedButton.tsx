import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";

import Spacing from "../constants/Spacing";
import {
  CreateStylesColors,
  useThemeAwareStyles,
} from "../hooks/useThemeAwareStyles";
import { darkColors, lightColors } from "../constants/Colors";

import { ThemedText } from "./ThemedText";

interface ThemedButtonProps extends PressableProps {
  children: string;
  variant?: "primary" | "secondary";
}
const customHitSlop = {
  top: 8,
  right: 8,
  bottom: 8,
  left: 8,
};
const textVariantColorMap = {
  primary: {
    darkColor: darkColors.buttonPrimaryText,
    lightColor: lightColors.buttonPrimaryText,
  },
  secondary: {
    darkColor: darkColors.buttonSecondaryText,
    lightColor: lightColors.buttonSecondaryText,
  },
};

const ThemedButton: React.FC<ThemedButtonProps> = ({
  children,
  style,
  hitSlop = customHitSlop,
  variant = "primary",
  ...props
}) => {
  const styles = useThemeAwareStyles(createStyles);
  return (
    <Pressable style={styles.container} hitSlop={hitSlop} {...props}>
      <ThemedText {...textVariantColorMap[variant]}>{children}</ThemedText>
    </Pressable>
  );
};
export default ThemedButton;

const createStyles = (colors: CreateStylesColors) =>
  StyleSheet.create({
    container: {
      paddingVertical: Spacing.xM,
      paddingHorizontal: Spacing.l,
      alignSelf: "center",
      borderRadius: 24,
      backgroundColor: colors.buttonPrimaryBackground,
    },
  });
