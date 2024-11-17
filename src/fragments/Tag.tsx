import { StyleSheet, TextProps } from "react-native";
import { useMemo } from "react";

import { ThemedText } from "@/src/fragments/ThemedText";
import {
  CreateStylesColors,
  useThemeAwareStyles,
} from "@/src/hooks/useThemeAwareStyles";
import Spacing from "@/src/constants/Spacing";
import { Colors } from "@/src/constants/Colors";

interface TagProps extends TextProps {
  label: string;
  variant?: "default" | "warning";
}

const Tag: React.FC<TagProps> = ({ label, variant = "default", style }) => {
  const styles = useThemeAwareStyles(createStyles);
  const flattenedStyles = useMemo(
    () => StyleSheet.flatten([styles.container, styles[variant], style]),
    [styles, variant, style],
  );
  return (
    <ThemedText
      type="caption"
      style={flattenedStyles}
      lightColor={Colors.light.text}
      darkColor={Colors.dark.text}
    >
      {label}
    </ThemedText>
  );
};

export default Tag;

const createStyles = (colors: CreateStylesColors) =>
  StyleSheet.create({
    container: {
      paddingVertical: Spacing.xS,
      paddingHorizontal: Spacing.s,
      borderWidth: 2,
      borderRadius: 8,
      alignSelf: "flex-start",
    },
    default: {
      borderColor: colors.tagBorder,
    },
    warning: {
      borderColor: colors.warningBorder,
    },
  });
