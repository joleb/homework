import React from "react";
import { ActivityIndicator, PressableProps, StyleSheet } from "react-native";

import { ThemedText } from "./ThemedText";
import PressableOpacity from "./PressableOpacity";

import Spacing from "@/src/constants/Spacing";
import {
  CreateStylesColors,
  useThemeAwareStyles,
} from "@/src/hooks/useThemeAwareStyles";
import { darkColors, lightColors } from "@/src/constants/Colors";

interface ThemedButtonProps extends PressableProps {
  children: string;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
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
  isLoading,
  disabled,
  ...props
}) => {
  const styles = useThemeAwareStyles(createStyles);
  const customStyle = StyleSheet.flatten([styles.container, style]);
  return (
    <PressableOpacity
      disabled={isLoading || disabled}
      style={customStyle}
      hitSlop={hitSlop}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size={"small"} />
      ) : (
        <ThemedText {...textVariantColorMap[variant]}>{children}</ThemedText>
      )}
    </PressableOpacity>
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
      justifyContent: "center",
      height: 48,
    },
  });
